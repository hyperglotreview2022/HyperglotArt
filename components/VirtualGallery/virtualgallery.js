import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import styles from '../../styles/VG.module.css';
import { BiFullscreen } from 'react-icons/bi';
import { IoMdArrowBack } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';

const Model = ({ scale }) => {
  const gltf = useGLTF('/virtualgallerymodels/kunstmatrix10.glb', true);
  return <primitive object={gltf.scene} />;
};

const DragControlsComponent = ({ moveState, boundaries }) => {
  const { camera, gl: { domElement } } = useThree();
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
    camera.rotation.order = 'YXZ';  // Ensure rotation order is correct
    camera.rotation.x = 0; // Reset tilt
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
    camera.rotation.order = 'YXZ';  // Ensure rotation order is correct
    camera.rotation.x = 0; // Reset tilt
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
    const speed = 20;

    // Reset direction vector
    direction.current.set(0, 0, 0);

    // Determine direction based on key state
    if (forward) direction.current.z += speed;
    if (backward) direction.current.z -= speed;
    if (left) direction.current.x += speed;
    if (right) direction.current.x -= speed;

    // Normalize direction vector and apply speed
    direction.current.normalize().multiplyScalar(speed * delta);

    // Get the camera direction
    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);
    cameraDirection.y = 0; // Ignore vertical direction
    cameraDirection.normalize();

    // Calculate movement vector in camera space
    const rightDirection = new THREE.Vector3().crossVectors(camera.up, cameraDirection).normalize();
    const moveVector = new THREE.Vector3()
      .add(cameraDirection.multiplyScalar(direction.current.z))
      .add(rightDirection.multiplyScalar(direction.current.x));

    // Calculate new position
    const newPosition = camera.position.clone().add(moveVector);

    // Boundary check
    if (boundaries) {
      if (
        newPosition.x < boundaries.minX || newPosition.x > boundaries.maxX ||
        newPosition.z < boundaries.minZ || newPosition.z > boundaries.maxZ
      ) {
        return; // Stop the camera from moving if it exceeds boundaries
      }
    }

    // Update camera position
    camera.position.add(moveVector);
    camera.position.y = 1.7; // Keep the camera height constant
  });

  return null;
};

const Index = () => {
  const [togglefull, setTogglefull] = useState(false);
  const moveState = useRef({ forward: false, backward: false, left: false, right: false });
  const modelScale = 1; // Adjust the scale factor as needed

  // Define the boundaries of the gallery (adjust as needed)
  const boundaries = {
    minX: -17,
    maxX: 15,
    minZ: -90,
    maxZ: 100,
  };

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
      {togglefull && <div className={styles.backicon} onClick={toggleFullscreen}><IoMdArrowBack /> Back to Page</div>}
      <Canvas shadows camera={{ position: [0, 1.7, 5] }}> {/* Adjusted camera position */}
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Model scale={modelScale} />
          <Environment preset="sunset" />
        </Suspense>
        <DragControlsComponent moveState={moveState} boundaries={boundaries} />
      </Canvas>
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




// import React, { Suspense, useRef, useEffect, useState } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { useGLTF, PointerLockControls, Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import styles from '../../styles/VG.module.css';
// import { BiFullscreen } from 'react-icons/bi';
// import { IoMdArrowBack } from 'react-icons/io';
// import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';

// const Model = ({ scale }) => {
//   const gltf = useGLTF('/virtualgallerymodels/kunstmatrix10.glb', true);
//   return <primitive object={gltf.scene} />;
// };

// const FirstPersonControls = ({ enablePointerLock, moveState, boundaries }) => {
//   const { camera, gl: { domElement } } = useThree();
//   const controlsRef = useRef();
//   const direction = useRef(new THREE.Vector3());

//   const onKeyDown = (event) => {
//     switch (event.code) {
//       case 'KeyW':
//       case 'ArrowUp':
//         moveState.current.forward = true;
//         break;
//       case 'KeyS':
//       case 'ArrowDown':
//         moveState.current.backward = true;
//         break;
//       case 'KeyA':
//       case 'ArrowLeft':
//         moveState.current.left = true;
//         break;
//       case 'KeyD':
//       case 'ArrowRight':
//         moveState.current.right = true;
//         break;
//     }
//   };

//   const onKeyUp = (event) => {
//     switch (event.code) {
//       case 'KeyW':
//       case 'ArrowUp':
//         moveState.current.forward = false;
//         break;
//       case 'KeyS':
//       case 'ArrowDown':
//         moveState.current.backward = false;
//         break;
//       case 'KeyA':
//       case 'ArrowLeft':
//         moveState.current.left = false;
//         break;
//       case 'KeyD':
//       case 'ArrowRight':
//         moveState.current.right = false;
//         break;
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', onKeyDown);
//     document.addEventListener('keyup', onKeyUp);
//     return () => {
//       document.removeEventListener('keydown', onKeyDown);
//       document.removeEventListener('keyup', onKeyUp);
//     };
//   }, []);

//   useEffect(() => {
//     const onMouseDown = (event) => {
//       const controlButtons = document.querySelectorAll(`.${styles.controlbtn}`);
//       let clickedOnControlButton = false;
//       controlButtons.forEach(button => {
//         if (button.contains(event.target)) {
//           clickedOnControlButton = true;
//         }
//       });

//       if (!clickedOnControlButton && controlsRef.current && enablePointerLock) {
//         controlsRef.current.lock();
//       }
//     };

//     domElement.addEventListener('mousedown', onMouseDown);

//     return () => {
//       domElement.removeEventListener('mousedown', onMouseDown);
//     };
//   }, [enablePointerLock, domElement]);

//   useFrame((_, delta) => {
//     if (controlsRef.current) {
//       const { forward, backward, left, right } = moveState.current || {}; // Use optional chaining
//       const speed = 15;

//       // Reset direction vector
//       direction.current.set(0, 0, 0);

//       // Determine direction based on key state
//       if (forward) direction.current.z += speed;
//       if (backward) direction.current.z -= speed;
//       if (left) direction.current.x += speed;
//       if (right) direction.current.x -= speed;

//       // Normalize direction vector and apply speed
//       direction.current.normalize().multiplyScalar(speed * delta);

//       // Get the camera direction
//       const cameraDirection = new THREE.Vector3();
//       camera.getWorldDirection(cameraDirection);
//       cameraDirection.y = 0; // Ignore vertical direction
//       cameraDirection.normalize();

//       // Calculate movement vector in camera space
//       const rightDirection = new THREE.Vector3().crossVectors(camera.up, cameraDirection).normalize();
//       const moveVector = new THREE.Vector3()
//         .add(cameraDirection.multiplyScalar(direction.current.z))
//         .add(rightDirection.multiplyScalar(direction.current.x));

//       // Calculate new position
//       const newPosition = camera.position.clone().add(moveVector);

//       // Boundary check
//       if (boundaries) {
//         if (
//           newPosition.x < boundaries.minX || newPosition.x > boundaries.maxX ||
//           newPosition.z < boundaries.minZ || newPosition.z > boundaries.maxZ
//         ) {
//           return; // Stop the camera from moving if it exceeds boundaries
//         }
//       }

//       // Update camera position
//       camera.position.add(moveVector);
//       camera.position.y = 1.7; // Keep the camera height constant

//       // Restrict vertical rotation
//       const euler = new THREE.Euler(0, camera.rotation.y, 0, 'YXZ');
//       camera.rotation.copy(euler);
//     }
//   });

//   return <PointerLockControls ref={controlsRef} args={[camera, domElement]} />;
// };

// const Index = () => {
//   const [togglefull, setTogglefull] = useState(false);
//   const [pointerLockEnabled, setPointerLockEnabled] = useState(false);
//   const moveState = useRef({ forward: false, backward: false, left: false, right: false });
//   const modelScale = 1; // Adjust the scale factor as needed

//   // Define the boundaries of the gallery (adjust as needed)
//   const boundaries = {
//     minX: -17,
//     maxX: 13,
//     minZ: -90,
//     maxZ: 100,
//   };

//   const toggleFullscreen = () => {
//     setTogglefull(!togglefull);
//     setPointerLockEnabled(!togglefull); // Enable pointer lock controls when entering fullscreen
//   };

//   const moveForward = () => (moveState.current.forward = true);
//   const moveBackward = () => (moveState.current.backward = true);
//   const moveLeft = () => (moveState.current.left = true);
//   const moveRight = () => (moveState.current.right = true);

//   return (
//     <div className={!togglefull ? styles.container : styles.fullcontainer}>
//       <div className={styles.fullscreenicon} onClick={toggleFullscreen}><BiFullscreen /></div>
//       {togglefull && <div className={styles.backicon} onClick={toggleFullscreen}><IoMdArrowBack /> Back to Page</div>}
//       <Canvas shadows camera={{ position: [0, 1.7, 5] }}> {/* Adjusted camera position */}
//         <ambientLight intensity={0.3} />
//         <Suspense fallback={null}>
//           <Model scale={modelScale} />
//           <Environment preset="sunset" />
//         </Suspense>
//         <FirstPersonControls enablePointerLock={pointerLockEnabled} moveState={moveState} boundaries={boundaries} />
//       </Canvas>
//       <div className={styles.controls}>
//         <div className={styles.controlbtn} onMouseDown={moveForward} onMouseUp={() => (moveState.current.forward = false)}><IoIosArrowUp /></div>
//         <div className={styles.bottom}>
//           <div className={styles.controlbtn} onMouseDown={moveLeft} onMouseUp={() => (moveState.current.left = false)}><IoIosArrowBack /></div>
//           <div className={styles.controlbtn} onMouseDown={moveBackward} onMouseUp={() => (moveState.current.backward = false)}><IoIosArrowDown /></div>
//           <div className={styles.controlbtn} onMouseDown={moveRight} onMouseUp={() => (moveState.current.right = false)}><IoIosArrowForward /></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;




