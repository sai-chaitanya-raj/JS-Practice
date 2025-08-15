let a = {
    Name:"chaitanya",
    Class:"Btech 4rth year",
    Year: 5,
    Backlogs: 0,
    Reappears: 2
}
for(let key in a){
    console.log(key , ":" , a[key]);

}
for(let key of Object.values(a)){
    console.log(key);
}