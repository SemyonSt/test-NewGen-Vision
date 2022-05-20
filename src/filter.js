const sortPrice = (arr, type) => {
  if (type === 'minToMax') {
    return arr.sort((a, b) => a.prices[0] - b.prices[0]);
  }
  return arr.sort((a, b) => b.prices[0] - a.prices[0]);
};

const normValue = (value) => {
  let [from, to] = value;

  if (from === null) {
    from = 0;
  }
  if (to === null) {
    to = Infinity;
  }
  return [from, to];
};

const filterCourses = (data, range) => (data.filter((courses) => {
  const [minPrice, maxPrice] = normValue(range);
  const [minCoursePrice, maxCoursePrice] = normValue(courses.prices);
  return maxCoursePrice >= minPrice && minCoursePrice <= maxPrice;
}));
export { filterCourses, sortPrice };
