import React from "react";
import { Button } from "react-scroll";

import {
  imgWrap,
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

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
              </TextWrapper>
              <BtnWrap>
                <Button to="home" />
              </BtnWrap>
            </Column1>
            <Column2>
              <imgWrap>
                <Img />
              </imgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
