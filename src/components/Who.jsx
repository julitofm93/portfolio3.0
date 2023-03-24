import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
/* import Html from "../../public/img/html.png"
import Js from "../../public/img/js.png"
import Sass from "../../public/img/sass.png"
import ReactImg from "../../public/img/react.png"
import Node from "../../public/img/node.png"
import Concept2 from "../../public/img/concept2.png"
import Mongo from "../../public/img/mongo.png"
import Express from "../../public/img/express.png"
import Git from "../../public/img/git.png" */

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Award = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const AwardImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  transition: 0.25s ease-in;

  &:hover{
    filter: drop-shadow(8px 10px 10px rgba(255, 255, 255, 0.5));
  }
`

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
         <Award>
                    <AwardImg src="img/html.png"/>
                    <AwardImg src="img/js.png"/>
                    <AwardImg src="img/css.png"/>
                </Award>
                <Award>
                    <AwardImg src="img/sass.png"/>
                    <AwardImg src="img/react.png"/>
                    <AwardImg src="img/node.png"/>
                </Award>
                <Award>
                    <AwardImg src="img/mongo.png"/>
                    <AwardImg src="img/express.png"/>
                    <AwardImg src="img/git.png"/>
                </Award>
        </Left>
        <Right>

          <Title>About Me</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Thinking outside the box</Subtitle>
          </WhatWeDo>
          <Desc>I am a Full Stack developer with experience building websites and web applications. I specialize in JavaScript, working backend apps with NodeJs and fronted with React. I'm passionate about learning and always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. I'm seeking for new challenges to test my skills at a work environment. I have incorporated several skills, but I let you here some of those</Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who