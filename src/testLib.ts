/**
 * Runs a test case and logs the expectedResult.
 * @param testName - The name of the test.
 * @param description - A description of what the test is trying to achieve.
 * @param callback - The callback function that contains the test logic.
 */
export async function test(testName: string, description:string, callback: () => void)
{  
  try {
    await callback();
    console.log(`✅ ${testName} passed. ${description}`);

  } catch (error) {
    console.error(`🚨 ${testName} failed. Trying to ${description}.`);
    // console.error(`🚨 Test ${testName} failed. Trying to ${description}. Expected ${realResult} (${typeof realResult}), but got ${expectedResult} (${typeof expectedResult})`);
  }
}

/**
 * Alias for `test` function.
 */
export const it = test;




/**
 * Creates an expectation for a test case.
 * @param testName - The name of the test case.
 * @param realResult - The expected expectedResult of the test case.
 * @returns An object with a `toBe` method for asserting the expectedResult of the test case.
 */
export function expect<T>(testName: string, realResult: T) {
  return {
    toBe: (expectedResult: T) => {
      if (expectedResult !== realResult)
        throw new Error (`🚨 Test ${testName} failed. Expected ${realResult} (${typeof realResult}), but got ${expectedResult} (${typeof expectedResult})`);
    }
  };
}




export function describe(description: string, callback: () => void) {
  console.log(description);
  callback();
}