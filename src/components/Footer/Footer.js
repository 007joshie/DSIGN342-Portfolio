import React from "react";

import { Section } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section>
      <FooterWrapper>
        <LinkList>
          <Slogan>
            DSIGN342-21B
          </Slogan>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialIcons href="https://github.com/007joshie" target="_blank">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="#"
                target="_blank"
              >
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="#"
                target="_blank"
              >
                <AiFillTwitterCircle size="3rem" />
              </SocialIcons>
            </SocialIconsContainer>
          </SocialContainer>
        </LinkList>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
