const isUnique = (channels, name) => {
  const same = channels.find((item) => item === name);
  console.log(!same);
  return !same;
};

export default isUnique;
