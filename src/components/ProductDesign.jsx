import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components';
import Iphone from "./Iphone"

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.6}>
          <Iphone/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
      <Desc>
        Dragon Oracle it's an app builded with Vanilla Javascript. Check out demo
      </Desc>
    </>
  )
}

export default ProductDesign