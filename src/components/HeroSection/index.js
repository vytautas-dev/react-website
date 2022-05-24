import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
const [hover, setHover] = useState(false);

const onHover = () => {
  setHover(!hover)
}
  return (
    <HeroContainer id="home">
<HeroBg>
  <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
</HeroBg>
<HeroContent>
  <HeroH1>
    I want to be React Developer
  </HeroH1>
    <HeroP>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex doloremque explicabo, illum adipisci quis nesciunt nihil amet rem maxime esse ducimus at vel distinctio sed. Vero neque dolore cupiditate!
    </HeroP>
  <HeroBtnWrapper>
    <Button to='sign-up' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
      Get started {hover ? <ArrowForward/> : <ArrowRight/>}
    </Button>
  </HeroBtnWrapper>
</HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
