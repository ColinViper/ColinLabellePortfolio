import React from "react";
import styled from "styled-components";

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
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 100rem;
  text-align: center;
  color: black;
`;

const Work = () => {
  return (
    <div>
      <Title style={{ fontSize: "5rem", marginBottom: "4rem", position: "absolute", left: "50%", transform: "translate(-50%)" }}>My Work</Title>
      <Container>
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
    </div>
  );
};

export default Work;
