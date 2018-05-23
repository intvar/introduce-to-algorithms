const mergeSort = require('./merge-sort');

describe('Merge sort', () => {
  it('should sort an array from one element', () => {
    const testArray = [5];
    mergeSort(testArray, 0, testArray.length - 1);
    expect(testArray).toEqual([5]);
  });
  it('should sort an array', () => {
    const testArray = [5,2,4,6,1,3];
    mergeSort(testArray, 0, testArray.length - 1);
    expect(testArray).toEqual([1,2,3,4,5,6]);
  });
  it('should sort a sorted array', () => {
    const testArray = [1,2,3,4,5];
    mergeSort(testArray, 0, testArray.length - 1);
    expect(testArray).toEqual([1,2,3,4,5]);
  });
});