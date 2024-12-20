/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: jeremynaruto02 (https://sketchfab.com/jeremynaruto02)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cameraman-walking-216f1850e3734fa986168126266f079d
Title: Cameraman walking
*/

"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Man(props) {
  const { nodes, materials } = useGLTF('/models/cameraman_walking-transformed.glb')
  const manRef = useRef()

  useFrame((state, delta, xrFrame) => {
    // Maintain the existing vertical movement
    manRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    
    // Add rotation animation - complete rotation every 4 seconds
    manRef.current.rotation.y = state.clock.elapsedTime * (Math.PI / 4);
  })

  return (
    <group {...props} dispose={null}
    ref={manRef}
    position={[0,-1.9,0]}
    scale={[1,1,1]}
    rotation={[0.25,0,0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials.tiesandties}
          skeleton={nodes.Object_19.skeleton}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={2.228}
        />
        <skinnedMesh
          name="Object_21"
          geometry={nodes.Object_21.geometry}
          material={materials.ted_facemap}
          skeleton={nodes.Object_21.skeleton}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={2.228}
        />
        <skinnedMesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials.surveillance_camera}
          skeleton={nodes.Object_23.skeleton}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={2.228}
        />
        <skinnedMesh
          name="Object_25"
          geometry={nodes.Object_25.geometry}
          material={materials.arms_gloves}
          skeleton={nodes.Object_25.skeleton}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={2.228}
        />
        <skinnedMesh
          name="Object_26"
          geometry={nodes.Object_26.geometry}
          material={materials.coat}
          skeleton={nodes.Object_26.skeleton}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={2.228}
        />
        <skinnedMesh
          name="Object_27"
          geometry={nodes.Object_27.geometry}
          material={materials.suit_sheet}
          skeleton={nodes.Object_27.skeleton}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={2.228}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cameraman_walking-transformed.glb')