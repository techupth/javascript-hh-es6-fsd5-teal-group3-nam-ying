let height = undefined;
let result;

result = function IsUndefined(height){
     return height ?? "Height is not defined"
   
}

console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

