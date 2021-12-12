import React, { useState, useRef, useEffect } from "react";
import TinyCrossfade from "react-tiny-crossfade";
import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  padding: 2rem 0.5rem;

  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: ${({ isActive }) => isActive && "translateY(-15px)"};
  & .transition-wrapper {
    transition: height 0.2s ease-out;
    overflow: hidden;
  }
  & .before-enter {
    opacity: 0;
  }
  & .entering {
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  & .before-leave {
    opacity: 1;
  }
  & .leaving {
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 1.25rem;
`;

const Description = styled.p`
  text-align: center;
  transition: all 0.3s ease-out;
  font-size: 1rem;
  color: #424242;
`;

const ServiceIcon = ({ icon }) => {
  return <div dangerouslySetInnerHTML={{ __html: icon }}></div>;
};

const ServiceDescription = ({ description, flipped, setFlipped }) => {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (flipped && ref.current && !ref.current.contains(e.target)) {
        setFlipped(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [flipped]);
  return (
    <InnerBox ref={ref}>
      <Description key="description">{description}</Description>
    </InnerBox>
  );
};
export const ServiceCard = ({ title, icon, isActive, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card isActive={isActive} onClick={() => setFlipped(!flipped)}>
      <TinyCrossfade
        disableInitialAnimation={true}
        className="transition-wrapper"
      >
        {flipped ? (
          <ServiceDescription
            description={description}
            flipped={flipped}
            setFlipped={setFlipped}
          />
        ) : (
          <InnerBox key="title">
            <ServiceIcon icon={icon} />

            <Title>{title}</Title>
          </InnerBox>
        )}
      </TinyCrossfade>
    </Card>
  );
};
