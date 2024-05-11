try{
    let a=5;
    console.log(a);
    2=5;
}
catch(err){
    console.log("Error Received:"+err.message);
}
finally{
    console.log("Finally Block Executed");
}