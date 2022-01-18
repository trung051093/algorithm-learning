import { findSumWithIndex } from ".";

const dataMock = [1, 8, 9, 2, 0];
const sumMock = 10;
const resultMock = [2, 8];

test("find sum with max index", () => {
  const data = findSumWithIndex(dataMock, sumMock);
  expect(data).toEqual(resultMock);
});
