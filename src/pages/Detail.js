import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  // 유저가 URL파라미터에 입력한거 가져오려면 useParams() 사용
  let { id } = useParams();
  console.log(id);

  // 자료의 순서가 변경되면 네번째에 있던 자료가 첫번째로 바뀌어서 /detail/0 이 될수도 있음
  // 그래서 현재 url에 입력한 번호와 같은 번호를 가진 상품을 찾아서 데이터바인딩 해달라고 코드짜면 됨
  // clothes 상품 데이터 안에 {id: 0} 이런식으로 저장되어있음
  // array자료.find(()=>{ return 조건식 }) 이렇게 쓰면 조건식에 맞는 자료를 찾아서 이 자리에 남김
  // selectDetail = props.clothes[id]
  let selectDetail = props.clothes.find(function (x) {
    // x: array자료에 있던 자료
    // array자료.id == url에 입력한 번호
    return x.id == id;
  });

  const [count, setCount] = useState(0);
  const [alertBtn, setAlertBtn] = useState(true);
  const [num, setNum] = useState("");

  // useEffect(()=>{}) mount, update시 실행됨/ 제렌더링마다 코드실행하고 싶으면
  // useEffect(()=>{},[]) mount시 실행됨/ mount시 1회 코드실행하고 싶으면
  useEffect(() => {
    let a = setTimeout(() => {
      setAlertBtn(false);
    }, 2000);
    return () => {
      // useEffect 동작 전에 실행
      // clean up function은 mount시 실행안됨. unmount(컴포넌트 삭제, 다른 페이지 넘어갔을 때 삭제됨)시 실행됨
      // unmount시 1회 코드실행하고 싶으면
      clearTimeout(a);
    };
  },[count]);
  // []: 의존성 배열(Dependency)
  // [count]: count의 값이 변할때만 함수 실행(mount시, count라는 state가 변할 때 실행됨)
  // []: 디펜던시가 없으면 업데이트될때 함수싱핼 안됨, 컴포넌트 mount시 1회만 실행하고 싶으면 빈칸으로.

  useEffect(() => {
    // isNaN(): 매개변수가 숫자인지 검사하는 함수
    if (isNaN(num) == true) {
      alert("숫자만 입력해주세요");
    }
  },[num]);

  return (
    <div className="container">
      {alertBtn == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={selectDetail.img} width="70%" alt="" />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
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
