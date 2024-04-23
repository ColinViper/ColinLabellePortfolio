import React, { useState } from "react";
import NavbarSize from "../NavbarSize";
import styled from "styled-components";

import linkedIn from "../../assets/LinkedinIcon.png";
import email from "../../assets/Email.png";
import twitter from "../../assets/Twitter.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5cb9f0;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  margin-top: ${({ navbarHeight }) => `${navbarHeight}px`};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SectionWrapper = styled.a`
  display: block;
  text-decoration: none;
  background-color: #fffdda;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #ccc;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 5rem;
  margin-top: 0;
  color: black;

  @media screen and (max-width: 900px) {
    font-size: 3.75rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Image = styled.img`
  max-height: 10rem;
`;

const Contact = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
    <NavbarSize onNavbarHeightChange={setNavbarHeight} />
      <Container navbarHeight={navbarHeight}>
      <Title>Contact Me</Title>
        <GridContainer>
          <SectionWrapper
            href="https://www.linkedin.com/in/colin-labelle-3708bb193"
            target="_blank"
          >
            <Section>
              <Image src={linkedIn} alt="LinkedIn Icon" />
              <Paragraph>LinkedIn</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="mailto:colinlabelle777@gmail.com">
            <Section>
              <Image src={email} alt="Email Icon" />
              <Paragraph>Email</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="https://www.twitter.com" target="_blank">
            <Section>
              <Image src={twitter} alt="Twitter Icon" />
              <Paragraph>Twitter</Paragraph>
            </Section>
          </SectionWrapper>
        </GridContainer>
      </Container>
      </>
  );
};

export default Contact;
