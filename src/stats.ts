export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}


export function average(numbers: number[]): number {
  return sum(numbers) / numbers.length;
}