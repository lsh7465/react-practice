import React from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  // 유저가 URL파라미터에 입력한거 가져오려면 useParams() 사용
  let { id } = useParams();
  console.log(id);

  // 자료의 순서가 변경되면 네번째에 있던 자료가 첫번째로 바뀌어서 /detail/0 이 될수도 있음
  // 그래서 현재 url에 입력한 번호와 같은 번호를 가진 상품을 찾아서 데이터바인딩 해달라고 코드짜면 됨
  // clothes 상품 데이터 안에 {id: 0} 이런식으로 저장되어있음
  //array자료.find(()=>{ return 조건식 }) 이렇게 쓰면 조건식에 맞는 자료를 찾아서 이 자리에 남김
  // x: array자료에 있던 자료
  // selectDetail = props.clothes[id]
  let selectDetail = props.clothes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={selectDetail.img} width="70%" alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{selectDetail.title}</h4>
          <p>{selectDetail.content}</p>
          <p>{selectDetail.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
