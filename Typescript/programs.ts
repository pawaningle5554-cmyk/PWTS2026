console.log("***********Revrese String***********");

function revreseString(str: string): string {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  return rev;
}

console.log(revreseString("pawan"));

function revrerseArray(arrr: number[]): number[] {
  let rev1: number[] = [];

  for (let i = arrr.length - 1; i >= 0; i--) {
    rev1.push(arrr[i]);
  }
  return rev1;
}
console.log(revrerseArray([1, 2, 3]))

function rev10(arr2:number[]):number[]{
let revrese2: number[]=[]

for (let i=arr2.length-1;i>=0;i--){

    revrese2.push(arr2[i])
}
return revrese2
}
console.log(rev10([2,5,6,8,9,6,45,5,5,25]))

console.log("******count occurencase");

function countOccurences(str:string,char:string):number{

  let count = 0
  for(let i=0;i<str.length;i++){
    if(str[i]===char){
      count++
    }
  }
  return count
}
console.log(countOccurences("Mathamaticis", "a"));

console.log("******count occurencase of all***********");

function countCharacters(str: string) {
  const count: any = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(countCharacters("programming"));

console.log("******count occurencase firstNonRepeating***********");

function firstNonRepeatingChar(str:string):string{
  let count:any={}

  for (let char of str){
    count[char]=(count[char] || 0)+1

  }
  for(let char of str){
    if(count[char] ==1){
      return char
  }

}

  return ""
}
console.log(firstNonRepeatingChar('pajjji'));

console.log("******Find Duplciate Charcter in string***********");

function findDuplicateChar(str: string):string[]{
 const duplciates:string[]=[]

 for(let i =0;i<str.length;i++){
  for(let j =i+1;j<str.length;j++){
    if(str[i]===str[j] && !duplciates.includes(str[i]))
      duplciates.push(str[i])

  }

 }
 return duplciates


}
console.log(findDuplicateChar("Rawan"));

console.log("******Remove Duplciate Charcter in string***********");
// Remove duplciates char
function removeDuplicatesChar(str:string):string {
  let result = ""
  for(let char of str){
    if(!result.includes(char)){
      result +=char
  }
  }
return result
}
console.log(removeDuplicatesChar('pawan'));







