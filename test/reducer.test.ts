import { counterReducer } from "../src/reducer";
import * as expect from "expect";

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

expect(
  counterReducer(1, { type: 'UNKNOWN' })
).toEqual(1);

console.log('Reducer tests passed!');