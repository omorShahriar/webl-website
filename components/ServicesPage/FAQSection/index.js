import styled from "styled-components";

import {
  PrimaryHeading,
  SecondaryHeading,
  SecondaryBodyText,
} from "../../Typography";
import { GenericWrapper } from "../../Utils/GenericWrapper";
import Accordion from "./Accordion";

const FAQSection = () => {
  return (
    <GenericWrapper>
      <SecondaryHeading textAlign="center">
        Frequently Asked Questions
      </SecondaryHeading>
      <Accordion />
    </GenericWrapper>
  );
};

export default FAQSection;
