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
        {clothes.map((a, i) => {
          return <Card clothes={clothes[i]} />;
        })}
      </StyledContainer>
    </>
  );
};

function Card(props) {
  return (
    <ImageContainer>
      <StyledImage src={props.clothes.img} />
      <h4>{props.clothes.title}</h4>
      <p>{props.clothes.price}</p>
      <p>{props.clothes.content}</p>
    </ImageContainer>
  );
}

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
