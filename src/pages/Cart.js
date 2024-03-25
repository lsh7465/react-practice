import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCount } from "../store/CartSlice";

const Cart = () => {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.cart);

  const dispatch = useDispatch();

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {state.cart.map((a, i) => (
          <tr key={i}>
            <td>{state.cart[i].id}</td>
            <td>{state.cart[i].title}</td>
            <td>{state.cart[i].price} 원</td>
            <td>{state.cart[i].count}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(addCount(state.cart[i].id));
                }}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Cart;
