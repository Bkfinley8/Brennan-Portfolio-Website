import React from 'react';
import { DiFirebase, DiReact, DiRedhat, DiAndroid, DiJava  } from 'react-icons/di';
import { FaBrain } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have experience with a wide range of technologies, including:
    </SectionText>
    <List>
      <ListItem>
        <DiJava  size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph> JavaScript/TypeScript, HTML, CSS, Python, Java, C, C++, C#, Ruby, SQL, PHP, Dart, Kotlin, Matlab </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks & Tools</ListTitle>
          <ListParagraph>React.js, Next.js, Node.js, Ruby on Rails, Electron JS, Flask</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaBrain size="3rem" />
        <ListContainer>
          <ListTitle>AI/ML Technologies & Skills</ListTitle>
          <ListParagraph> IBM Watsonx.ai, Watson Assistant, Visual Inspection Tools, Elasticsearch, RAG, Langchain, Training Models</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRedhat size="3rem" />
        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>IBM Cloud, Red Hat OpenShift, GitHub, Linux (Ubuntu), Docker/Podman, Kubernetes</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend & Databases</ListTitle>
          <ListParagraph>IBM db2, MySQL, Elasticsearch, PostgreSQL, MongoDB, Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>Flutter, React Native, Android Studio (Java/Kotlin)</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>  
);

export default Technologies;
