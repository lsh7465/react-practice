import React from "react";
import styled from "styled-components";

const Select = () => {
  return (
    <StyledContainer>
      <ImageContainer>
        <StyledImage
          className="img"
          src="https://www.creamcheese.co.kr/2023/1made_0413.jpg"
        />
      </ImageContainer>
      <ImageContainer>
        <StyledImage
          className="img"
          src="https://www.creamcheese.co.kr/2023/2best_0413.jpg"
        />
      </ImageContainer>
      <ImageContainer>
        <StyledImage
          className="img"
          src="https://www.creamcheese.co.kr/2023/3app_0413.jpg"
        />
      </ImageContainer>
      <ImageContainer>
        <StyledImage
          className="img"
          src="https://www.creamcheese.co.kr/2023/4spring_0413.jpg"
        />
      </ImageContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
`;

const ImageContainer = styled.div`
  padding-left: 10px; /* 이미지 사이 간격 조정 */
`;

const StyledImage = styled.img`
  width: 290px;
  &:hover {
    opacity: 0.8;
  }
`;

export default Select;
