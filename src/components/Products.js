import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <>
      <StyledHeading>PRODUCTS</StyledHeading>
      <StyledContainer>
        <ImageContainer>
          <StyledImage src="//www.creamcheese.co.kr/web/product/medium/202403/899d12b0b28a688456a98c00070ee246.webp" />
          <h4>상품명</h4>
          <p>가격</p>
          <p>상품설명</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImage src="//www.creamcheese.co.kr/web/product/medium/202401/e4f04be66dd3b64df48de9ced776ed56.webp" />
          <h4>상품명</h4>
          <p>가격</p>
          <p>상품설명</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImage src="//www.creamcheese.co.kr/web/product/medium/202403/14f1b865a7834804568358e5cf221b75.webp" />
          <h4>상품명</h4>
          <p>가격</p>
          <p>상품설명</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImage src="//www.creamcheese.co.kr/web/product/medium/202403/fbbbde2566688bd0f5b2c18c21d74377.webp" />
          <h4>상품명</h4>
          <p>가격</p>
          <p>상품설명</p>
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
  margin: 32px auto 0;
`;

const ImageContainer = styled.div`
  padding-left: 10px; /* 이미지 사이 간격 조정 */
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: 320px;
  box-sizing: border-box;
  object-fit: cover;
`;

export default Products;
