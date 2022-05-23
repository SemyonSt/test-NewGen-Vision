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
export default filterCourses;
