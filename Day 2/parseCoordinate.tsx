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