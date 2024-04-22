import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const AboutMe = styled.div`
  font-size: 2rem;
  max-width: 100rem;
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
`;

const BottomHalf = styled.div`
  flex: 1;
  width: 100%;
  background-color: #fffdda;
  display: flex;
  justify-content: center;
`;

const AboutMeTitle = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <TopHalf>
        <h1 style={{ marginBottom: "0" }}>Colin Labelle</h1>
        <h2>Junior Full Stack Web Developer</h2>
      </TopHalf>
      <BottomHalf>
        <AboutMeTitle>
          <h2 style={{ fontSize: "4rem" }}>About Me</h2>
          <AboutMe>
            <p style={{ paddingTop: "5rem" }}>
              I am a junior web dev with a passion for coding and design
              aspiring to create seamless digital experiences that captivates
              and engages. With a background of game development, a keen eye for
              detail and a commitment to innovation, I strive to bring
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
  );
};

export default Home;
