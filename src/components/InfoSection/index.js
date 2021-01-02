import React from "react";
import Button from "../HeroSection/ButtonElements";

import {
  ImgWrap,
  Img,
  Column2,
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoSectionElement";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  darkText,
  description,
  ligthText,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading ligthText={ligthText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
              <BtnWrap>
                <Button to="home">{buttonLabel}</Button>
              </BtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
