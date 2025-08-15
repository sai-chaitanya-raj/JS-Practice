let a = [12, 14, 54, 43, 23];
let b = a.map((value, index, array) => {
    console.log(value, index, array)
    return value + index;
})
console.log(b);


let fruits = new Map([ 
    ["apple", 100],
    ["banana", 60],
    ["mango", 150] 
]);

for (let [key, value] of fruits) {
    console.log(`${key} : ₹${value}`);
}
fruits.set("gauva",60);
console.log(fruits.entries());
console.log(fruits.has("potato"));
console.log(fruits.size);
