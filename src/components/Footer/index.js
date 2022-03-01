import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {FooterContainer, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcon, SocialIcons} from './FooterElements.js'

const Footer = () => (

    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/" >
                <SocialIcon />
                EXPLOR
                </SocialLogo>
            </SocialMediaWrap>
            <WebsiteRights>EXPLOR {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href="https://www.instagram.com/fckm.fff/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="https://twitter.com/ramazanov_gamza" target="_blank" aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/in/gamza-ramazanov-790b7b231/" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin/>
                </SocialIconLink>
            </SocialIcons>
        </SocialMedia>
    </FooterContainer>
)

export default Footer;
