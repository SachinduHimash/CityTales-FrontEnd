import React from 'react';
// import 'aframe';
// import 'aframe-look-at-component';
// import 'ar.js/aframe/build/aframe-ar-nft';


export default function NewCompo() {
    return (
      <div style={{width:300,height:500}}>
        <div>
        <a-scene vr-mode-ui="enabled: false" arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;">
          <a-text
            value="This content will always face you."
            look-at="[gps-camera]"
            scale="90 120 120"
            gps-entity-place="latitude: 46.8066369; longitude: 7.1553291;"
          ></a-text>
          <a-camera gps-camera rotation-reader></a-camera>
        </a-scene>
        </div>
      </div>
      );
}