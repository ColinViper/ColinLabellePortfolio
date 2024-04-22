import React from "react";
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
  height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const SectionWrapper = styled.a`
  display: block; /* Make the link a block element */
  text-decoration: none; /* Remove default underline */
  background-color: #fffdda;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #ccc;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Increase size on hover */
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
`;

const Image = styled.img`
  max-height: 10rem;
`;

const Contact = () => {
  return (
    <div>
      <Title
        style={{
          fontSize: "5rem",
          marginBottom: "4rem",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        Contact Me
      </Title>

      <Container>
        <GridContainer>
          <SectionWrapper
            href="https://www.linkedin.com/in/colin-labelle-3708bb193"
            target="_blank"
          >
            <Section>
              <Image src={linkedIn} alt="LinkedIn Icon" />
              <Title>LinkedIn</Title>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="mailto:colinlabelle777@gmail.com">
            <Section>
              <Image src={email} alt="Email Icon" />
              <Title>Email</Title>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="https://www.twitter.com" target="_blank">
            <Section>
              <Image src={twitter} alt="Twitter Icon" />
              <Title>Twitter</Title>
            </Section>
          </SectionWrapper>
        </GridContainer>
      </Container>
    </div>
  );
};

export default Contact;
