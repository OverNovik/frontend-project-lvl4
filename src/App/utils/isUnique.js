export const isUnique = (channels, name) => {
  const same = channels.find((item) => item === name);
  return !same;
};