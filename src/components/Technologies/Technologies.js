import React from "react";
import { DiFirebase, DiGitBranch, DiTerminal, DiCode } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionSubTitle,
} from "../../styles/GlobalComponents";
import SlideUpWhenVisible from "../../utils/SlideUpWhenVisible";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionSubTitle main>About</SectionSubTitle>
    <SlideUpWhenVisible>
      <SectionText>
        I'm Josh, a learner, a designer and creative. I aim to be at the forefront of the intersect between design and technology. I am passionate for all things tech.
        <br/>
        <br/>
        During my past three years at the University of Waikato I have developed the necessary skills to advance my creative and technical endeavours. I am in the unique position of being both technically minded with a creative mindset. On the creative side I have learned design principles and software such as Illustrator and Indesign. On the Technical side I have gain a deep understanding of programming concepts and languages.
        <br/>
        <br/>
        When I am not studying I enjoy being active in the great outdoors. My happy place is walking to music in new locations. When not working or studying, you can find me creating artwork.
      </SectionText>
    </SlideUpWhenVisible>
    <SlideUpWhenVisible>
      <List>
        <ListItem>
          <DiCode size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              experience with <br />
              HTML, CSS, Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiTerminal size="3rem" />
          <ListContainer>
            <ListTitle>Programming</ListTitle>
            <ListParagraph>
              experience with <br />
              Java, C#, Javascript 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiGitBranch size="3rem" />
          <ListContainer>
            <ListTitle>Design Tools</ListTitle>
            <ListParagraph>
              experience with <br />
              Illustrator, Indesign, After Effects
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SlideUpWhenVisible>
    <SectionDivider />
    <SectionSubTitle main>Experience</SectionSubTitle>
    <SlideUpWhenVisible>
      <SectionText>
        Two Years working as a demostrator at the University of Waikato.
        <br/>
        <br/>
        I have seven years experience volunteering as a lighting director at two churches.
      </SectionText>
    </SlideUpWhenVisible>
  </Section>
);

export default Technologies;
