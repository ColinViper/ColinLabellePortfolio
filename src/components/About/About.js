import React, { useState } from "react";
import NavbarSize from "../NavbarSize";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #5cb9f0;
  padding: 2rem;
  margin-top: ${({ navbarHeight }) => `${navbarHeight}px`};
`;

const SectionWrapper = styled.div`
  background-color: #fffdda;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 60%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 100rem;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const About = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
    <NavbarSize onNavbarHeightChange={setNavbarHeight} />
    <Container navbarHeight={navbarHeight}>
      <Title style={{ fontSize: "3rem", marginBottom: "2rem" }}>About Me</Title>

      <SectionWrapper>
        <Section>
          <Title>My Journey</Title>
          <Paragraph>
            My journey in web development began with a fascination for
            technology and a desire to create impactful digital experiences. I
            began by studying Game Programming and Development with Unity and C#
            and wanted to expand my knowledge by learning the fundamentals of
            HTML, CSS, and JavaScript, as well as front-end frameworks like
            React.js and back-end technologies such as Node.js.
          </Paragraph>
        </Section>
      </SectionWrapper>

      <SectionWrapper>
        <Section>
          <Title>Skills and Expertise</Title>
          <Paragraph>
            As a junior full stack developer, I bring a solid foundation in both
            front-end and back-end development, allowing me to tackle challenges
            across the entire stack. My skills include:
          </Paragraph>
          <ul>
            <li>
              <BoldText>Front-End Development:</BoldText> HTML, CSS, JavaScript,
              React.js
            </li>
            <li>
              <BoldText>Back-End Development:</BoldText> Node.js and MongoDB
            </li>
            <li>
              <BoldText>Version Control:</BoldText> Git, GitHub
            </li>
            <li>
              <BoldText>Problem-Solving:</BoldText> Clean, maintainable code
            </li>
            <li>
              <BoldText>Continuous Learning:</BoldText> Growth mindset
            </li>
          </ul>
        </Section>
      </SectionWrapper>

      <SectionWrapper>
        <Section>
          <Title>Goals</Title>
          <Paragraph>
            As I continue to grow as a developer, my goal is to deepen my
            expertise in full stack development and explore new technologies and
            frameworks. I'm committed to expanding my skill set, collaborating
            with talented individuals, and contributing to innovative projects
            that make a positive impact.
          </Paragraph>
        </Section>
      </SectionWrapper>
    </Container>
    </>
  );
};

export default About;
