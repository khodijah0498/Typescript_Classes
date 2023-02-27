interface coordinate{
    x: number;
    y: number
}
function parseCoordinateFromObject (obj:coordinate) : coordinate{
    return{
        ...obj
    }
}
function parseCoordinateFromNumber(x: number, y: number): coordinate {
  return {
    x,
    y
  };
}
function parseCoordinate(str: coordinate) : coordinate;
function parseCoordinate(obj: coordinate): coordinate;
function parseCoordinate(x: number, y: number): coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): coordinate {
    let coord : coordinate = {
        x: 0,
        y: 0,
    }
    if (typeof arg1 === "string") {
        (arg1 as string).split(",").forEach((str)=>{
            const[key, value] = str.split(":");
            coord[key as "x" | "y"] = parseInt(value, 10)
        });
     } else if (typeof arg1 === "object") {
       coord = {
         ...(arg1 as coordinate),
       };
     } else {
       coord = {
         x: arg1 as number,
         y: arg2 as number,
       };
     }
    return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({x: 2 , y: 3}));
console.log(parseCoordinate("x:4, y:6"))