import * as expect from "expect";

export const counterReducer = (state: any = 5, action: any) => {
  console.log("reducing", state, action);
  switch(action.type) {
    case 'INCREMENT':
      console.log("state+1=", state + 1);
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

expect(
  counterReducer(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counterReducer(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
  counterReducer(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
  counterReducer(1, { type: 'DECREMENT' })
).toEqual(0);

expect (
  counterReducer(1, { type: 'UNKNOWN' })
).toEqual(1);

console.log('Reducer tests passed!');
