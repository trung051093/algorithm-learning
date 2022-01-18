interface Params {
  obj: any;
  valueMatch: any;
  rootPath?: string;
  paths?: string[];
}

export function findKeyPath({
  obj,
  valueMatch,
  rootPath = "",
  paths = [],
}: Params) {
  if (Array.isArray(obj)) {
    obj.map((item, index) => {
      const currentPath = rootPath ? `${rootPath}.${index}` : rootPath;
      if (item === valueMatch) {
        paths.push(currentPath);
      } else {
        findKeyPath({
          obj: item,
          valueMatch,
          rootPath: currentPath,
          paths,
        });
      }
    });
  } else if (typeof obj === "object") {
    Object.keys(obj).map((key) => {
      const currentPath = rootPath ? `${rootPath}.${key}` : key;
      if (obj[key] === valueMatch) {
        paths.push(currentPath);
      } else {
        findKeyPath({
          obj: obj[key],
          valueMatch,
          rootPath: currentPath,
          paths,
        });
      }
    });
  }
  return paths;
}
