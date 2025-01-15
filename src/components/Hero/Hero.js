import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Brennan Finley's Portfolio
      </SectionTitle>
      <SectionText>
        I am a Software Engineer with expertise in generative AI technologies and full-stack development. Proven track record of delivering client-focused technical solutions and leading workshops for problem identification and resolution. Skilled in full-stack development, AI/ML technologies, and cloud platforms.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn More ----------- CHANGE THIS TO A LINK</Button>   */}
    </LeftSection>
  </Section>
);

export default Hero;