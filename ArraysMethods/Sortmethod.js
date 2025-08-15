let compare = (a,b) => {
    return a-b;
}   
let a = [1,2,4,564,57,675,43,5687,45,327];
a.sort(compare);
a.reverse();
console.log(a);
