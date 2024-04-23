import React, { useState } from "react";
import NavbarSize from "../NavbarSize";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ navbarHeight }) => `${navbarHeight}px`};
`;

const AboutMe = styled.div`
  font-size: 2rem;
  max-width: 100rem;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

const TopHalf = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5cb9f0;
  font-size: 4rem;
  text-align: center;
`;

const BottomHalf = styled.div`
  flex: 1;
  width: 100%;
  background-color: #fffdda;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 4rem;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const AboutMeTitle = styled.div`
  font-size: 4rem;
  padding: 3rem;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Name = styled.div`
  font-size: 9rem;
  font-weight: bold;
  margin-bottom: 0;

  @media screen and (max-width: 900px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

const NameText = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
      <NavbarSize onNavbarHeightChange={setNavbarHeight} />
      <Container navbarHeight={navbarHeight}>
        <TopHalf>
          <Name>Colin Labelle</Name>
          <NameText>Junior Full Stack Web Developer</NameText>
        </TopHalf>
        <BottomHalf>
          <AboutMeTitle>
            <Title>About Me</Title>
            <AboutMe>
              <p style={{ paddingTop: "5rem" }}>
                I am a junior web dev with a passion for coding and design
                aspiring to create seamless digital experiences that captivates
                and engages. With a background of game development, a keen eye
                for detail and a commitment to innovation, I strive to bring
                creativity and functionality to every project I undertake.
              </p>
              <p>
                I thrive in dynamic environments where collaboration and
                continuous learning are encouraged, and I'm excited about the
                opportunity to contribute my skills to innovative projects.
              </p>
            </AboutMe>
          </AboutMeTitle>
        </BottomHalf>
      </Container>
    </>
  );
};

export default Home;
