import React from "react";
import { motion } from "framer-motion";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroButton } from "./HeroStyles";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <SectionTitle main center>
            Kia Ora! I'm Josh.<br />
            Welcome To <br />
            My Portfolio
          </SectionTitle>
        </motion.div>

        <motion.div variants={item}>
          <SectionText>
            I am nearing the end of my third-year of studies at the University of Waikato. I am Studying Computer Science and Design. 
          </SectionText>
        </motion.div>
        <motion.div variants={item}>
          <Link href="#tech">
            <Button>Learn More</Button>
          </Link>
        </motion.div>
      </motion.div>
    </LeftSection>
  </Section>
);

export default Hero;
