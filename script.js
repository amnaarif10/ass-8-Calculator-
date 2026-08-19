function name() {
    console.log("AMNA")
}
name();

function sub (a, b,c, d) {
    console.log(a-b-c-d)
}
sub(28, 47, 8, 2)


function add (a, b,c, d) {
    console.log(a+b+c+d)
}
add(28, 47, 8, 2)


function multiply (a, b,c, d) {
    console.log(a*b*c*d)
}
multiply(28, 47, 8, 2)


function division (a, b,c, d) {
    console.log(a/b/c/d)
}
division(28, 47, 8, 2)

function checkNumber(a) {
    if(a%2==0){
        return "even"
    }
    else{
        return"odd"
    }
}
console.log(checkNumber(64))

function calculateAge(birthY) {
    let  currentYear = 2026
    let age= currentYear - birthY
    return age
}
console.log(calculateAge(2010));

function calculateValue(value) {
   let display = document.getElementById("show");

    if (value==='C') {
        display.innerText='';
    }

    else if(value==='='){
        try{
            
            display.innerText= eval(display.innerText);
        } catch (error) {
            display.innerText= "error";
        }
    }

    else {
        if(value !== undefined) {
            display.innerText += value;
        }
    }
}