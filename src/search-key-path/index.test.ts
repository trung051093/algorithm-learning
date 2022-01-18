import { findKeyPath } from ".";

const objectMock = {
  propA: "foo",
  propB: "bar",
  propC: [
    "foo",
    {
      abcd: "bar",
      bar: "foo",
    },
    {
      abc: "bar",
      bar: "foo",
      propE: [
        {
          abc: "bar",
        },
        "foo",
        {
          propE: "foo",
        },
      ],
      propF: {
        bar: "foo",
        abc: "bar",
      },
    },
  ],
};

const result = [
  "propA",
  "propC.0",
  "propC.1.bar",
  "propC.2.bar",
  "propC.2.propE.1",
  "propC.2.propE.2.propE",
  "propC.2.propF.bar",
];

test("the data is empty", () => {
  const data = findKeyPath({
    obj: objectMock,
    valueMatch: "foo",
  });
  expect(data).toEqual(result);
});
