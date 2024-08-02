import * as asyncStats from "../statsAsync";
// import * as app from "../app";

// *******************************


describe('async tests', () => { 
  it('Calculate the sum of all elements within an array (async)', async () => {
    const obtainedResult = await asyncStats.sum([1, 2, 3]);
    const expectedResult = 6;
    expect(obtainedResult).toBe(expectedResult);
  });
  
  it('Calculate the average of all the elements within an array (async)', async () => {
    const obtainedResult = await asyncStats.average([1, 2, 3]);
    const expectedResult = 2;
    expect(obtainedResult).toBe(expectedResult);
  });
})

