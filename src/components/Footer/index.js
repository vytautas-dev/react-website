import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialLogo, WebsiteRights, SocialMediaWrap, SocialIcons, SocialIconLink } from './FooterElements';
import {FaFacebook} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <FooterContainer>
<FooterWrap>
  <FooterLinksContainer>
    <FooterLinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle> About me </FooterLinkTitle>
          <FooterLink to="/signin"> How it works </FooterLink>
          <FooterLink to="/signin"> Testimonials </FooterLink>
          <FooterLink to="/signin"> Careers </FooterLink>
          <FooterLink to="/signin"> Inwestors </FooterLink>
          <FooterLink to="/signin"> Terms of Service </FooterLink>
      </FooterLinkItems>
      <FooterLinkItems>
        <FooterLinkTitle> About me </FooterLinkTitle>
          <FooterLink to="/signin"> How it works </FooterLink>
          <FooterLink to="/signin"> Testimonials </FooterLink>
          <FooterLink to="/signin"> Careers </FooterLink>
          <FooterLink to="/signin"> Inwestors </FooterLink>
          <FooterLink to="/signin"> Terms of Service </FooterLink>
      </FooterLinkItems>
    </FooterLinksWrapper>
    <FooterLinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle> About me </FooterLinkTitle>
          <FooterLink to="/signin"> How it works </FooterLink>
          <FooterLink to="/signin"> Testimonials </FooterLink>
          <FooterLink to="/signin"> Careers </FooterLink>
          <FooterLink to="/signin"> Inwestors </FooterLink>
          <FooterLink to="/signin"> Terms of Service </FooterLink>
      </FooterLinkItems>
      <FooterLinkItems>
        <FooterLinkTitle> About me </FooterLinkTitle>
          <FooterLink to="/signin"> How it works </FooterLink>
          <FooterLink to="/signin"> Testimonials </FooterLink>
          <FooterLink to="/signin"> Careers </FooterLink>
          <FooterLink to="/signin"> Inwestors </FooterLink>
          <FooterLink to="/signin"> Terms of Service </FooterLink>
      </FooterLinkItems>
    </FooterLinksWrapper>
  </FooterLinksContainer>
  <SocialMedia>
  <SocialMediaWrap>
    <SocialLogo to='/' onClick={toggleHome} >
      dolla
    </SocialLogo>
    <WebsiteRights> dolla © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
    <SocialIcons>
      <SocialIconLink href='/' target='_blanks' aria-label="Facebook"> <FaFacebook/> </SocialIconLink>
      <SocialIconLink href='/' target='_blanks' aria-label="Facebook"> <FaFacebook/> </SocialIconLink>
      <SocialIconLink href='/' target='_blanks' aria-label="Facebook"> <FaFacebook/> </SocialIconLink>
      <SocialIconLink href='/' target='_blanks' aria-label="Facebook"> <FaFacebook/> </SocialIconLink>
      <SocialIconLink href='/' target='_blanks' aria-label="Facebook"> <FaFacebook/> </SocialIconLink>
    </SocialIcons>
    </SocialMediaWrap>
  </SocialMedia>
</FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
