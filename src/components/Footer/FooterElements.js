import styled from 'styled-components'
import {Link} from 'gatsby'
import {DiScala} from 'react-icons/di'

export const FooterContainer = styled.div`
background-color: #101522;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
margin-bottom: 20px;

@media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
`

export const SocialMediaWrap = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 20px auto;


@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px
font-size: 2rem
`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
font-family: 'Ubuntu', sans-serif;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const SocialIconLink = styled.a`
cursor: pointer;
color: #fff;
font-size: 24px;
`

export const SocialIcon = styled(DiScala)`
color: white;
margin-right: 10px;
`