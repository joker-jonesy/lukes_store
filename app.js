document.getElementById('button').addEventListener("click", ()=>{
    // coolFunction(1,2,"addition")
    looper(6)
})

const coolFunction = (nm,nm2,operator)=>{
    if(operator==="addition"){
        console.log(finalNumber(nm,nm2))
    }else if(operator==="subtraction"){
        console.log(nm-nm2)
    }else{
      console.log("not adding or subtracting")
    }

    const cond = returnBool(1);

    if(cond){
        console.log("is true")
    }else{
        console.log("not true")
    }
}

function petah(){
    const fname = prompt("WHat is your first name");
    const lname = prompt("WHat is your last name");

    if(fname==="Peter"&&lname==="Griffin"){
        console.log("hehehehehehe")
    }else{
        const fullname = fname+lname;
        console.log(fullname.length)
    }
}

petah();



// create 2 prompt windows
// ask for f and l name
// check looking Peter Griffin
// peter griffin laugh
// how many total letters are in both the first and last name

function returnBool(nm){
    return nm===1 ? true :false;

    // if(nm===1){
    //     return true
    // }else{
    //     return false;
    // }
}

function finalNumber(nm1,nm2){
    return nm1+nm2;
}

function myFirstFunction(nm,nm2){
    // let num =nm;
    // num=num+nm2;
    console.log(nm+nm2)
}

// rot=number of rotations
function looper(rot){
    // let num=0
    // while(num<word.length){
    //     console.log(word[num])
    //     num++;
    // }

    for(let i=0;i<rot;i++){
        console.log("rotated!")
    }
}


