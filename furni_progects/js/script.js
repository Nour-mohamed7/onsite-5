

let price = document.getElementsByClassName("Price");
let total = document.getElementsByClassName("total");
let amount = document.getElementsByClassName("amount");
let plus = document.getElementsByClassName("plus");
let mins = document.getElementsByClassName("mins");
let del = document.getElementsByClassName("del");

for(let i = 0; i < plus.length; i++){

    let priceValue = parseFloat(price[i].innerText.replace("$",""));

    plus[i].addEventListener("click", function(){
        amount[i].value++;
        total[i].innerText = "$" + (priceValue * amount[i].value);
    });

    mins[i].addEventListener("click", function(){
        if(amount[i].value > 1){
            amount[i].value--;
            total[i].innerText = "$" + (priceValue * amount[i].value);
        }
    });

    del[i].addEventListener("click", function(){
        del[i].parentElement.parentElement.remove();
    });

}
    
    
    















    function valid(){
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let email = document.getElementById("email") ;
        let message = document.getElementById("message") ;
        let btn = document.getElementById("btn")
        
        if (lname.value === '' || fname.value === '') {
            alert("please enter your name");
        }
        
        if (!email.value.includes("@") || !email.value.includes(".")) {
            alert("email is not correct") ;
        }
        
        if (message.value === "") {
            alert("please enter your message") ;
        }
        
    }
    btn.addEventListener("click" , valid)