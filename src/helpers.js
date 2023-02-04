export const omit = (o, key) => {
  return Object.fromEntries(Object.entries(o).filter((e) => e[0] !== key));
};

export const omitMultiple = (o, keys) => {
  const exclude = new Set(keys);
  return Object.fromEntries(Object.entries(o).filter((e) => !exclude.has(e[0])));
};
