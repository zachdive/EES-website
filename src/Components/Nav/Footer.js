import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.section`
background-color: #00364D;
border-top-style: solid;
border-width: 1px;
border-color: white;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const IconsContainer = styled.section`
background-color: #00364D;
display: flex !important;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

function Footer() {
    return (
        
        <SocialsContainer>
               
           <h1>Our Socials</h1>

            {/* clickable Icons to the Society's various social media */}
            <IconsContainer>
                <a href="https://www.linkedin.com/company/exeterentrepreneurs/about/" target="_blank"></a>
                <a href="https://www.facebook.com/ExeterEntrepreneurs" target="_blank"><img src="/facebook.png" alt="Social Media logo" /></a>
                <a href="https://www.instagram.com/exeter_entrepreneurs/" target="_blank"><img src="/insta.png" alt="Social Media logo" /></a>
                <a href="https://twitter.com/EEUniSociety" target="_blank"><img src="/twitter.png" alt="Social Media logo" /></a>
                <a href="mailto:hello@exeterentrepreneurs.com" target="_blank"><img src="/gmail.png" alt="Social Media logo" /></a>
            </IconsContainer>
        </SocialsContainer>
    );
}

export default Footer;