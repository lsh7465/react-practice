import React, { useState } from "react";
import styled from "styled-components";
import data from "../data";

const Products = () => {
  const [clothes] = useState(data);
  console.log(clothes);

  return (
    <>
      <StyledHeading>PRODUCTS</StyledHeading>
      <StyledContainer>
        <ImageContainer>
          <StyledImage src={clothes[0].img} />
          <h4>{clothes[0].title}</h4>
          <p>{clothes[0].price}</p>
          <p>{clothes[0].content}</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImage src={clothes[1].img} />
          <h4>{clothes[1].title}</h4>
          <p>{clothes[1].price}</p>
          <p>{clothes[1].content}</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImage src={clothes[2].img} />
          <h4>{clothes[2].title}</h4>
          <p>{clothes[2].price}</p>
          <p>{clothes[2].content}</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImage src={clothes[3].img} />
          <h4>{clothes[3].title}</h4>
          <p>{clothes[3].price}</p>
          <p>{clothes[3].content}</p>
        </ImageContainer>
      </StyledContainer>
    </>
  );
};

const StyledHeading = styled.h2`
  margin-top: 90px;
  font-size: 20px;
  text-align: center;
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
`;

const ImageContainer = styled.div`
  width: 300px;
  padding: 0 2px 0 0;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: 320px;
  box-sizing: border-box;
  object-fit: cover;
`;

export default Products;
