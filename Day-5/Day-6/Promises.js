// function saveData(){
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random() * 10)+1;
//         if(num>3){
//             resolve("Data Saved");
//             saveData();
//         }
//         else{
//             reject("Data Not Saved");
//         }
//     });
// }
// saveData().then((data) => {console.log(data);
// }).catch((err) => {console.log(err);
// });

function getnum(){
    return new Promise((res,rej) =>{
        setTimeoout(() => {
            let num = math.floor(math.random() * 10) +1;
            console.log(num);
            Res();
            2000;);
        }
        })
    }) 
}