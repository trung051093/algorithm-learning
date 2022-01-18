export function findSumWithIndex(arr: number[], sum: number) {
  let mapIndex: any = {};
  let arrSmall: number[] = [];
  let arrLarge: number[] = [];
  let average = Math.round(sum / 2);
  let result: number[] = [];
  for (const [index, value] of arr.entries()) {
    mapIndex[value] = index;
    if (value < average) {
      arrSmall.push(value);
    } else {
      arrLarge.push(value);
    }
  }

  for (let i = 0; i < arrSmall.length; i++) {
    for (let j = 0; j < arrLarge.length; j++) {
      const a = arrSmall[i];
      const b = arrLarge[j];
      const aIndex = mapIndex[a];
      const bIndex = mapIndex[b];

      const [aResult, bResult] = result;
      const aResultIndex = mapIndex[aResult];
      const bResultIndex = mapIndex[bResult];

      if (a + b === sum && !aResult && !bResult) {
        result = [a, b];
      } else if (
        aResult &&
        bResult &&
        a + b === sum &&
        Math.max(aIndex, bIndex) > Math.max(aResultIndex, bResultIndex)
      ) {
        result = [a, b];
      }
    }
  }
  return result;
}
