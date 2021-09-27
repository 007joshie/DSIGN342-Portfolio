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
        DESC
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
  </Section>
);

export default Technologies;
