function addNumbers (a:number , b:number) {
return a + b;
}
export default addNumbers;

export const addStrings ( str1:string , str2:string): string{
`${str1} ${str2}`
}
export const format (title:string, param: string | number ): string{ 
    `${title} ${param}`
}
//void function
export const printFormat (title:string, param: string | number ): void{ 
    `console.log(format(title, param))
}
//promise function
export const fetchData =(url: "string") : promise<string> =>  promise.resolve(`Data from ${url}`)
