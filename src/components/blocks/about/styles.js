import styled from "styled-components";
import aboutImage from "/src/assets/about.svg";

export const AboutSection = styled.section`
  display: flex;
  position: relative;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  align-items: center;
  z-index: 1;
  flex-direction: column;
  padding-left: ${(props) => props.theme.pagePadding};
  flex-shrink: 0;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled.p`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;
