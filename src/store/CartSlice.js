import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 4, title: "White and Black", price: 10000, count: 2 },
    { id: 5, title: "Grey Yordan", price: 12000, count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      // state: 현재상태, action: state 변경함수
      // payload는 해당 액션에 필요한 데이터를 포함
      // action.payload: Redux 액션에서 사용되는 데이터(작업에 필요한 정보)
      const 번호 = state.findIndex((a) => {
        // 각 요소의 id 속성이 action.payload와 일치하는지 확인
        return a.id === action.payload;
      });

      state[번호].count++;
      // payload와 같은 id를 가진 상품을 찾아서 +1
      // a라는 파라미터는 state 안에 있던 하나하나의 자료
      // array에 있던 자료를 다 꺼내서 조건식에 대입해보는데 조건식이 참이면 그게 몇번째 자료인지 알려줌
      // a.id와 payload가 같으면 그게 몇번째 자료인지 변수에 저장
    },
    removeCount(state, action) {
      const itemIdToRemove = action.payload;
      const index = state.findIndex((item) => item.id === itemIdToRemove);

      if (index >= 0 && state[index].count > 0) {
        // 리듀서함수가 직접 상태를 수정하면 return을 안써도 된다?
        state[index].count--;
        state[index].count === 0 && state.splice(index, 1);
        // count가 0일때만 splice메소드 호출
      }
    },
    addItem(state, action) {
      const itemToAdd = action.payload;
      const index = state.findIndex((item) => item.id === itemToAdd.id);
      if (index !== -1) {
        // 이미 장바구니에 존재하는 상품인 경우 수량을 증가시킵니다.
        state[index].count++;
      } else {
        // 장바구니에 새로운 상품을 추가합니다.
        state.push({ ...itemToAdd, count: 1 });
      }
    },
    removeItem(state, action) {
      const itemToRemove = state.findIndex((a) => {
        return a.id === action.payload;
      });

      state.splice(itemToRemove, 1);
    },
  },
});

export let { addCount, addItem, removeCount, removeItem } = cart.actions;

export default cart;
