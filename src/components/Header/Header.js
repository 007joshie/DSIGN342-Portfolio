import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <img
            src="/images/logo.svg"
            alt="brand-logo"
            className="brand-logo"
          />
          <Span className="brand-name" style="font-weight:700;">Joshua Boag</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li id="nav-projects">
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        <div className="nav-effect projects"></div>
      </li>
      <li id="nav-tech">
        <Link href="#tech">
          <NavLink>About</NavLink>
        </Link>
        <div className="nav-effect tech"></div>
      </li>
      <li id="nav-contact">
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
        <div className="nav-effect contact"></div>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/007joshie" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="#"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
