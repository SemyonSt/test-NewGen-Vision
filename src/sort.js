const sortPrice = (arr, type) => {
  if (type === 'minToMax') {
    return arr.sort((a, b) => a.prices[0] - b.prices[0]);
  }
  return arr.sort((a, b) => b.prices[0] - a.prices[0]);
};

export default sortPrice;
