import data from '../src/data.js';
import { filterCourses, sortPrice } from '../src/filter.js';

test('from null to max', () => {
  const requiredRange1 = [null, 200];
  const result = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
  ];
  const result2 = [
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in USA', prices: [200, null] },
  ];
  const filter = filterCourses(data, requiredRange1);
  expect(sortPrice(filter, 'minToMax')).toEqual(result);
  expect(sortPrice(filter, 'maxToMin')).toEqual(result2);
});

test('from to', () => {
  const requiredRange2 = [100, 350];
  const result = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
  ];
  const result2 = [
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in England', prices: [0, 100] },
  ];
  const filter = filterCourses(data, requiredRange2);
  expect(sortPrice(filter, 'minToMax')).toEqual(result);
  expect(sortPrice(filter, 'maxToMin')).toEqual(result2);
});

test('from max to null', () => {
  const requiredRange3 = [200, null];
  const result = [
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Germany', prices: [500, null] },
  ];
  const result2 = [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
  ];
  const filter = filterCourses(data, requiredRange3);
  expect(sortPrice(filter, 'minToMax')).toEqual(result);
  expect(sortPrice(filter, 'maxToMin')).toEqual(result2);
});

test('from null to null', () => {
  const requiredRange4 = [null, null];
  const result = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Germany', prices: [500, null] },
  ];
  const result2 = [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in England', prices: [0, 100] },
  ];
  const filter = filterCourses(data, requiredRange4);
  expect(sortPrice(filter, 'minToMax')).toEqual(result);
  expect(sortPrice(filter, 'maxToMin')).toEqual(result2);
});
