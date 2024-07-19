import React, { useEffect } from 'react';

const ARArtwork = () => {
    useEffect(() => {
        // Ensure aframe and ar.js scripts are loaded
        if (!window.AFRAME) {
          const aframeScript = document.createElement('script');
          aframeScript.src = 'https://aframe.io/releases/1.2.0/aframe.min.js';
          aframeScript.onload = () => {
            const arScript = document.createElement('script');
            arScript.src = 'https://cdn.rawgit.com/jeromeetienne/AR.js/1.7.2/aframe/build/aframe-ar.js';
            document.head.appendChild(arScript);
          };
          document.head.appendChild(aframeScript);
        }
      }, []);

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-marker preset="hiro">
        <a-entity
          geometry="primitive: plane; height: 1; width: 1;"
          material="src: url(/artwork.jpg);"
          position="0 0 0"
          rotation="-90 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARArtwork;
