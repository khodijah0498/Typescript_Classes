// function parameters
export function printToFile(text:string, callback: () => void): void {
    console.log(text);
    callback();
}

//functions with param

export function arrayMutate(numbers:number[], mutate: (v: number) => number): number[] {
    return numbers.map(mutate);
}
export type MutationFunction = (v: number) => number;
export function arrMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
  export const myNewMutateFunc: MutationFunction =(v: number) => v + 100

console.log(arrayMutate([1.2,3], (v) => v+10));

// returning functions
export function createAdder( num: number):(val: number) => number {
    return(val: number) => num + val;
}
//another way
export type AdderFunction = (v: number) => number;
export function creatAdder(num: number): AdderFunction{
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(45))