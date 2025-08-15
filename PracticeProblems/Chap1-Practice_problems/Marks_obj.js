let marks = {
    harry : 98,
    rohan : 70,
    aakash : 7
}

for(let i = 0; i<Object.keys(marks).length;i++){
    console.log("the marks of " , Object.keys(marks)[i],"are" , marks[Object.keys(marks)[i]]);
}