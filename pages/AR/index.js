import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

const ARArtwork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;
    let controller;
    let reticle;
    let hitTestSource = null;
    let hitTestSourceRequested = false;
    let artwork;

    const init = () => {
      const container = containerRef.current;

      // Create scene
      scene = new THREE.Scene();

      // Create camera
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        20
      );

      // Create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      container.appendChild(renderer.domElement);

      // Add AR button
      document.body.appendChild(ARButton.createButton(renderer));

      // Add light
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      light.position.set(0.5, 1, 0.25);
      scene.add(light);

      // Load artwork texture
      const textureLoader = new THREE.TextureLoader();
      const artworkTexture = textureLoader.load('/artwork.jpg', () => {
        // Texture loaded successfully
        console.log('Artwork texture loaded successfully.');
      }, undefined, (err) => {
        // Texture load failed
        console.error('An error happened while loading the texture.', err);
      });

      // Create artwork plane
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.MeshBasicMaterial({ map: artworkTexture });
      artwork = new THREE.Mesh(geometry, material);
      artwork.visible = false; // Hide the artwork initially
      scene.add(artwork);

      // Create reticle for placing artwork
      const reticleGeometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(
        -Math.PI / 2
      );
      const reticleMaterial = new THREE.MeshBasicMaterial();
      reticle = new THREE.Mesh(reticleGeometry, reticleMaterial);
      reticle.matrixAutoUpdate = false;
      reticle.visible = false;
      scene.add(reticle);

      // Add AR controller
      controller = renderer.xr.getController(0);
      controller.addEventListener('select', onSelect);
      scene.add(controller);

      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };

    const onSelect = () => {
      if (reticle.visible) {
        const position = new THREE.Vector3();
        const quaternion = new THREE.Quaternion();
        const scale = new THREE.Vector3();

        reticle.matrix.decompose(position, quaternion, scale);

        artwork.position.copy(position);
        artwork.rotation.setFromQuaternion(quaternion);
        artwork.scale.set(1, 1, 1); // Set the scale relative to the distance
        artwork.visible = true; // Show the artwork
      }
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      renderer.setAnimationLoop(render);
    };

    const render = (timestamp, frame) => {
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (hitTestSourceRequested === false) {
          session.requestReferenceSpace('viewer').then((referenceSpace) => {
            session.requestHitTestSource({ space: referenceSpace }).then((source) => {
              hitTestSource = source;
            });
          });

          session.addEventListener('end', () => {
            hitTestSourceRequested = false;
            hitTestSource = null;
          });

          hitTestSourceRequested = true;
        }

        if (hitTestSource) {
          const viewerPose = frame.getViewerPose(referenceSpace);

          if (viewerPose) {
            const hitTestResults = frame.getHitTestResults(hitTestSource);

            if (hitTestResults.length > 0) {
              const hit = hitTestResults[0];
              const hitPose = hit.getPose(referenceSpace);

              reticle.visible = true;
              reticle.matrix.fromArray(hitPose.transform.matrix);
            } else {
              reticle.visible = false;
            }
          }
        }
      }

      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      const container = containerRef.current;
      if (container) {
        container.removeChild(renderer.domElement);
      }
      document.body.removeChild(document.body.lastChild);
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default ARArtwork;
