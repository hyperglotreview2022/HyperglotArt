import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import styles from '../../styles/VG.module.css';
import { BiFullscreen } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';
import Loading from './Loading';

const Model = ({ scale }) => {
  const gltf = useGLTF('/virtualgallerymodels/amorphicchasms.glb', true);

  useEffect(() => {
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.side = THREE.DoubleSide;

        // Check if the material name includes "Glass" to identify glass doors
        if (node.material.name.includes("Glass")) {
          node.material.transparent = true;
          node.material.opacity = 0.5; // Adjust based on your needs
          node.material.roughness = 0;
          node.material.metalness = 0;
          node.material.transmission = 1;
        }
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} scale={scale} />;
};

const Lighting = () => {
  const { scene } = useThree();

  useEffect(() => {
    // Create an array of RectAreaLight to simulate window lights
    const rectLight1 = new THREE.RectAreaLight(0xffffff, 100, 10, 10); // Adjust width and height to match your window size
    rectLight1.position.set(0, 5, 70); // Adjust position to match your window position
    rectLight1.lookAt(5, 5, -110);
    scene.add(rectLight1);

    const rectLight2 = new THREE.RectAreaLight(0xffffff, 100, 10, 10); // Adjust width and height to match your window size
    rectLight2.position.set(-5, 5, 70); // Adjust position to match your window position
    rectLight2.lookAt(-5, 5, 110);
    scene.add(rectLight2);

    // Point lights for ambient lighting or additional illumination
    const pointLight1 = new THREE.PointLight(0xffffff, 1000);
    pointLight1.position.set(-190, 5, 70); // Adjust position as needed
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xffffff, 1000);
    pointLight2.position.set(0, 5, 50); // Adjust position as needed
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 1000);
    pointLight3.position.set(0, 5, 100); // Adjust position as needed
    scene.add(pointLight3);
    

    scene.add(new THREE.AmbientLight(0x404040, 0.5));

    return () => {
      scene.remove(rectLight1);
      scene.remove(rectLight2);
      scene.remove(pointLight1);
      scene.remove(pointLight2);
      scene.remove(pointLight3);
    };
  }, [scene]);

  return null;
};

const DragControlsComponent = ({ moveState }) => {
  const { camera, gl: { domElement }, scene } = useThree();
  const direction = useRef(new THREE.Vector3());
  const drag = useRef({ active: false, previousPosition: new THREE.Vector2() });

  const onMouseDown = (event) => {
    drag.current.active = true;
    drag.current.previousPosition.set(event.clientX, event.clientY);
  };

  const onMouseMove = (event) => {
    if (!drag.current.active) return;

    const movementX = event.clientX - drag.current.previousPosition.x;
    drag.current.previousPosition.set(event.clientX, event.clientY);

    const speed = 0.005;
    camera.rotation.y -= movementX * speed;
    camera.rotation.order = 'YXZ';
    camera.rotation.x = 0;
  };

  const onMouseUp = () => {
    drag.current.active = false;
  };

  const onTouchStart = (event) => {
    drag.current.active = true;
    drag.current.previousPosition.set(event.touches[0].clientX, event.touches[0].clientY);
  };

  const onTouchMove = (event) => {
    if (!drag.current.active) return;

    const movementX = event.touches[0].clientX - drag.current.previousPosition.x;
    drag.current.previousPosition.set(event.touches[0].clientX, event.touches[0].clientY);

    const speed = 0.005;
    camera.rotation.y -= movementX * speed;
    camera.rotation.order = 'YXZ';
    camera.rotation.x = 0;
  };

  const onTouchEnd = () => {
    drag.current.active = false;
  };

  const onKeyDown = (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        moveState.current.forward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        moveState.current.backward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        moveState.current.left = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        moveState.current.right = true;
        break;
    }
  };

  const onKeyUp = (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        moveState.current.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        moveState.current.backward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        moveState.current.left = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        moveState.current.right = false;
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    domElement.addEventListener('mousedown', onMouseDown);
    domElement.addEventListener('mousemove', onMouseMove);
    domElement.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart);
    domElement.addEventListener('touchmove', onTouchMove);
    domElement.addEventListener('touchend', onTouchEnd);

    return () => {
      domElement.removeEventListener('mousedown', onMouseDown);
      domElement.removeEventListener('mousemove', onMouseMove);
      domElement.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      domElement.removeEventListener('touchmove', onTouchMove);
      domElement.removeEventListener('touchend', onTouchEnd);
    };
  }, [domElement]);

  useFrame((_, delta) => {
    const { forward, backward, left, right } = moveState.current || {};
    const speed = 1;

    direction.current.set(0, 0, 0);

    if (forward) direction.current.z += speed;
    if (backward) direction.current.z -= speed;
    if (left) direction.current.x += speed;
    if (right) direction.current.x -= speed;

    direction.current.normalize().multiplyScalar(speed * delta);

    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);
    cameraDirection.y = 0;
    cameraDirection.normalize();

    const rightDirection = new THREE.Vector3().crossVectors(camera.up, cameraDirection).normalize();
    const moveVector = new THREE.Vector3()
      .add(cameraDirection.multiplyScalar(direction.current.z))
      .add(rightDirection.multiplyScalar(direction.current.x));

    const newPosition = camera.position.clone().add(moveVector);

    const raycaster = new THREE.Raycaster();
    raycaster.set(camera.position, moveVector.normalize());
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].distance < moveVector.length()) {
      return; // Stop movement if there's an intersection
    }

    camera.position.add(moveVector);
    camera.position.y = 10;
  });

  return null;
};

const Index = () => {
  const [togglefull, setTogglefull] = useState(false);
  const moveState = useRef({ forward: false, backward: false, left: false, right: false });
  const modelScale = 10;

  const toggleFullscreen = () => {
    setTogglefull(!togglefull);
  };

  const moveForward = () => (moveState.current.forward = true);
  const moveBackward = () => (moveState.current.backward = true);
  const moveLeft = () => (moveState.current.left = true);
  const moveRight = () => (moveState.current.right = true);

  return (
    <div className={!togglefull ? styles.container : styles.fullcontainer}>
      <div className={styles.fullscreenicon} onClick={toggleFullscreen}><BiFullscreen /></div>
      <Suspense fallback={<Loading />}>
      <Canvas shadows camera={{ position: [0, 0, 150] }}>
        <ambientLight intensity={2} />
        <spotLight position={[200, 50, 250]} angle={90} penumbra={10} decay={0} intensity={0.75} />
        <spotLight position={[100, 350, -260]} angle={90} penumbra={10} decay={0} intensity={0.75} />
        <spotLight position={[100, 450, 560]} angle={90} penumbra={10} decay={0} intensity={0.75} />
          <Model scale={modelScale} />
          {/* <Lighting /> */}

        <DragControlsComponent moveState={moveState} />
      </Canvas>        
      </Suspense>
      <div className={styles.controls}>
        <div className={styles.controlbtn} onMouseDown={moveForward} onTouchStart={moveForward} onMouseUp={() => (moveState.current.forward = false)} onTouchEnd={() => (moveState.current.forward = false)}><IoIosArrowUp /></div>
        <div className={styles.bottom}>
          <div className={styles.controlbtn} onMouseDown={moveLeft} onTouchStart={moveLeft} onMouseUp={() => (moveState.current.left = false)} onTouchEnd={() => (moveState.current.left = false)}><IoIosArrowBack /></div>
          <div className={styles.controlbtn} onMouseDown={moveBackward} onTouchStart={moveBackward} onMouseUp={() => (moveState.current.backward = false)} onTouchEnd={() => (moveState.current.backward = false)}><IoIosArrowDown /></div>
          <div className={styles.controlbtn} onMouseDown={moveRight} onTouchStart={moveRight} onMouseUp={() => (moveState.current.right = false)} onTouchEnd={() => (moveState.current.right = false)}><IoIosArrowForward /></div>
        </div>
      </div>
    </div>
  );
};

export default Index;



