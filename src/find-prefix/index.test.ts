import { findLongestPrefix } from ".";

const dataMock = ["axo", "axonprefix", "weareaxon", "axonn"];
const resultMock = "axo";

test("find longest prefix", () => {
  const data = findLongestPrefix(dataMock);
  expect(data).toEqual(resultMock);
});
