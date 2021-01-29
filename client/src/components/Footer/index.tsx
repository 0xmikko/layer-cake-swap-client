import React from "react";
import CookieConsent from "react-cookie-consent";
import {FooterContent, StyledFooter} from "./styles";
import telegramIcon from "../../assets/social/telegram.svg"
import githubIcon from "../../assets/social/github.svg"

export function Footer() {
  return (
    <>
      <StyledFooter>
        <FooterContent>
            <div>
              &copy; Mikael Lazarev, 2021. All rights reserved
            </div>
            <div style={{marginRight: "1rem"}}>
                <a href="https://t.me/mikael_l" style={{marginRight: "14px"}}>
                    <img src={telegramIcon} height={28} />
                </a>
                <a href="https://github.com/MikaelLazarev/layer-cake-swap-node">
                    <img src={githubIcon} height={28} />
                </a>
            </div>
        </FooterContent>
        {/*</div>*/}
      </StyledFooter>
      <CookieConsent
        location="bottom"
        buttonText="Yes, I consent"
        cookieName="cookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "16px",
          minWidth: "150px",
          borderRadius: "5px",
        }}
        buttonWrapperClasses={"consent-button"}
        expires={150}
      >
        🍪 We need to talk about cookies! 🍪
        <br />
        <span style={{ fontSize: "13px", lineHeight: 1 }}>
          BCH Legeng and its partners use cookies to operate the website and
          platform, for analytical purposes, and for advertising/targeting
          purposes. You can learn more about our use of cookies in Our Privacy
          Policy. Using cookies helps us provide a better experience tailored to
          your needs. By clicking “Yes, I consent” below, you agree to our use
          of analytics and advertising/targeting cookies. You can opt out of our
          use of certain cookies at any time by following the instructions in
          Our Privacy Policy.
        </span>
      </CookieConsent>
    </>
  );
}
