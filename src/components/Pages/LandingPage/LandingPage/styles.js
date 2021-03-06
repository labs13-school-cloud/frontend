import styled from "styled-components";

export const LandingPageContainer = styled.div`
  margin: 0 auto;

  width: 100%;
  background-color: #8ecafb;
  @media (max-width: 700px) {
    padding: 0;
  }
`;
export const NavbarContainer = styled.nav`
  height: 75px;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f4f8;
  padding: 0 25px;

  @media (max-width: 700px) {
    padding: 0 5px;
  }

  img {
    width: 50px;
  }
  h2,
  a {
    margin-left: 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  h2 {
    color: #451476;
    border: 1px solid #451476;
    background-color: white;
    padding: 4px 10px;
    border-radius: 7%;
    &:hover {
      background-color: #451476;
      color: white;
    }

    @media (max-width: 700px) {
      width: 75px;
    }
  }
  h3 {
    color: #451476;
  }
`;
export const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NavbarItem = styled.a`
  margin-left: 30px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  color: #441476;
  &:visited {
    color: #441476;
  }
`;
export const HeroSection = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
export const BlueBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: rgb(142, 202, 251);
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const HeroCaption = styled.h1`
  font-size: 90px;
  margin: 0px;
  font-family: "Avenir Next";
  padding: 30px;
  color: rgb(76, 76, 76);

  @media (max-width: 1250px) {
    font-size: 65px;
  }

  @media (max-width: 1020px) {
    font-size: 58px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }
  
  @media (max-height: 870px) {
    font-size: 75px;
    padding: 54px;
  }

  @media (max-width: 414px) {
    font-size: 50px;
  }

  @media (max-width: 375px) {
    font-size: 50px;
  }

`;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  width: 50vw;
  height: 100vh;

  @media (max-width: 1020px) {
    padding-top: 100px;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 0px;
  }

  @media (max-width: 414px) {
    padding-top: 0px;
    height: 100vh;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
    padding-top: 0px;
    justify-content: space-evenly;
  }
  
  `;
  export const OwlLogo = styled.img`
  height: 600px;
  padding: 10px;
  
  @media (max-width: 1250px) {
    height: 420px;
  }
  
  @media (max-width: 700px) {
    height: 400px;
    padding-top: 30px;
  }
  
  @media (max-height: 780px) {
    height: 450px;
  }

  @media (max-width: 770px) {
    height: 300px;
  }

  @media (max-height: 870px) {
    height: 500px;
  }

  @media (max-width: 414px) {
    height: 392px;
  }

  @media (max-width: 375px) {
    height: 340px;
  }
  `;
export const  ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FirstSection = styled.div`
  background-color: #fafafa;
  width: 95%;
  margin: 40px auto 20px;
  padding: 75px 10px;
  display: flex;
  border-radius: 5px;
  h3 {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 80%;
    
  }
  p {
    text-align: center;
  }
`;
export const MarketingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 100px;
  padding: 0px 30px;
`;
export const MarketingSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  img {
    width: 100%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;
export const MarketingImage = styled.div`
  width: 40%;
  @media (max-width: 700px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const MarketingContent = styled.div`
  width: 50%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 100%;
    font-size: 32px;
    color: #14289A;
    margin-bottom: 0;
    text-align: left;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;
export const LandingPageContentContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  h1 {
    margin-top: 0;
    color: #14289a;
    font-size: 42px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
    text-align: center;
    p {
      padding: 0 50px;
    }
  }
`;
export const LandingPageButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  button:first-child {
    margin: 0 10px;
    background-color: #14289a;
    color: white;
    padding: 0 16px;
  }
  button:nth-child(2) {
    border: 1px solid #14289a;
    color: #14289a;

    &:hover {
      background-color: #14289a;
      color: white;
    }
  }
`;
export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 100px;
  position: sticky;
  top: 100%;
  svg {
    margin: 0 auto;
    font-size: 30px;
    cursor: pointer;
  }
`;
export const FooterItemsContainer = styled.div`
  background-color: #14289a;
  display: flex;
  color: white;
  justify-content: center;
  width: 90%;

  a {
    font-size: 16px;
    font-weight: 500;
    padding: 16px 20px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: white;
  }
`;
export const GetStartedButton = styled.div`
  button {
    margin: 10px 10px 0;
    background-color: #14289a;
    color: white;
    &:hover {
      /* margin: 0 15px; */
      background-color: #14289a;
      color: white;
    }
  }
`;
export const LogoImage = styled.img`
  width: 50px;
`;
