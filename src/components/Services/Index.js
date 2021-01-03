import React from "react";

import Icon1 from "./../../images/svg-4.svg";
import Icon2 from "./../../images/svg-5.svg";
import Icon3 from "./../../images/svg-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesCard,
  ServicesWrapper,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="service">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expense</ServicesH2>
          <ServicesP>We Help reduce your fess and increase</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>We Can Help Your Problem with my solution</ServicesH2>
          <ServicesP>We Help reduce your fess and increase</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>We Up Costumer Experiences</ServicesH2>
          <ServicesP>We Help reduce your fess and increase</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
