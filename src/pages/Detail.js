import React from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  // 유저가 URL파라미터에 입력한거 가져오려면 useParams() 사용
  let { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.clothes[id].img} width="70%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.clothes[id].title}</h4>
          <p>{props.clothes[id].content}</p>
          <p>{props.clothes[id].price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
