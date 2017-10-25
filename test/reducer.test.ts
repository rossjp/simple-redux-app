import { counterReducer } from "../src/reducer";

test('test increment', () => {
  expect(
    counterReducer(0, { type: 'INCREMENT' })
  ).toEqual(1);

  expect(
    counterReducer(1, { type: 'INCREMENT' })
  ).toEqual(2);
});

test('test decrement', () => {
  expect(
    counterReducer(2, { type: 'DECREMENT' })
  ).toEqual(1);

  expect(
    counterReducer(1, { type: 'DECREMENT' })
  ).toEqual(0);
});

test('test unknown action', () => {
  expect(
    counterReducer(1, { type: 'UNKNOWN' })
  ).toEqual(1);
});
