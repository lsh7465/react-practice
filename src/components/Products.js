import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Products = ({ clothes }) => {
  // const Products = (props) => {
  //   const { clothes } = props; // 객체 분해
  //   // 또는 const clothes = props.clothes; 로도 사용 가능
  return (
    <>
      <StyledHeading>PRODUCTS</StyledHeading>
      <StyledContainer>
        {clothes.map((a, i) => {
          return <Card clothes={clothes[i]} key={clothes[i]} />;
        })}
      </StyledContainer>
    </>
  );
};

function Card(props) {
  return (
    <Link
      to={`/detail/${props.clothes.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ImageContainer>
        <StyledImage src={props.clothes.img} />
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
        <p>{props.clothes.content}</p>
      </ImageContainer>
    </Link>
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
