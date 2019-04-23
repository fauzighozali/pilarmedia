export const generateOptions = (list) => {
  return list.map((x) => {
    return {
      label: x,
      value: x
    }
  })
};

export const filterObjectinArray = (key, arr) => {
  return arr.map(x => x[key])
};
