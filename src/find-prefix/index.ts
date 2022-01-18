interface Params {
  obj: any;
  valueMatch: any;
  rootPath?: string;
  paths?: string[];
}

export function findMatchPrefix(str1: string, str2: string) {
  let match = "";
  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (str1[i] && str2[i] && str1[i] === str2[i]) {
      match += str1[i];
    } else {
      break;
    }
  }
  return match;
}

export function findLongestPrefix(arr: string[]) {
  return arr.reduce((acc, curr, index) => {
    if (index === 0) return curr;
    if (curr.length < acc.length) return acc;
    const findMatch = findMatchPrefix(acc, curr);
    if (findMatch) {
      return findMatch;
    } else {
      return acc;
    }
  }, "");
}
