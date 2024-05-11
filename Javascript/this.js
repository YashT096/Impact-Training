


let std= {
    name:"Yash" ,
    age: 21,
    getname: function(){
        console.log(this.name)
    }
}
console.log(std.getname())


// this keyword in javascript refers to the object it belongs to.
// It has different values depending on where it is used:
function hello(){
    console.log(this)
}

hello();
// In this case, this refers to the global object. Because the function is not a part of an object.
// In a browser, this refers to the window object.