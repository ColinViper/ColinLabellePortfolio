import React, { useState } from "react";
import NavbarSize from "../NavbarSize";
import styled from "styled-components";

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

const PageTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 15rem;
  margin-top: 0;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
    margin-bottom: 7rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 100rem;
  text-align: center;
  color: black;
`;

const Work = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
    <NavbarSize onNavbarHeightChange={setNavbarHeight} />
      <Container navbarHeight={navbarHeight}>
      <PageTitle>My Work</PageTitle>
        <GridContainer>
          <SectionWrapper href="/work1">
            <Section>
              <Title>Work 1</Title>
              <Paragraph>Work 1 description</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="/work2">
            <Section>
              <Title>Work 2</Title>
              <Paragraph>Work 2 description</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="/work3">
            <Section>
              <Title>Work 3</Title>
              <Paragraph>Work 3 description</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="/work4">
            <Section>
              <Title>Work 4</Title>
              <Paragraph>Work 4 description</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="/work5">
            <Section>
              <Title>Work 5</Title>
              <Paragraph>Work 5 description</Paragraph>
            </Section>
          </SectionWrapper>

          <SectionWrapper href="/work6">
            <Section>
              <Title>Work 6</Title>
              <Paragraph>Work 6 description</Paragraph>
            </Section>
          </SectionWrapper>
        </GridContainer>
      </Container>
      </>
  );
};

export default Work;
