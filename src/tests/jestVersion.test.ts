import * as app from "../app";
import * as stats from "../stats";

// *******************************

describe('standard tests', () => { 
  it('Hello world! test', () => {
    const obtainedResult = app.example();
    const expectedResult = "Hello World!";
    expect(obtainedResult).toBe(expectedResult);
  });

  it('Calculate the sum of all elements within an array', () => {
    const obtainedResult = stats.sum([1, 2, 3]);
    const expectedResult = 6;
    expect(obtainedResult).toBe(expectedResult);
  });

  it('Calculate the average of all the elements within an array', () => {
    const obtainedResult = stats.average([1, 2, 3]);
    const expectedResult = 2;
    expect(obtainedResult).toBe(expectedResult);
  });
});


