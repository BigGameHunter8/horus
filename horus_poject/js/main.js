function validate(e){

    var phone = document.getElementById("phone");
    var error = document.getElementById("error");

    error.innerHTML = "";
    
    if(isNaN(phone.value)){
        error.innerHTML="Введите только цифры";
        e.preventDefault();
    }

    else if(phone.value==""){
        error.innerHTML="Вы не ввели телефон";
        e.preventDefault();
    }

    var s_phone=document.getElementById("s_phone");
    var s_error=document.getElementById("s_error");

    s_error.innerHTML="";

    if(isNaN(s_phone.value)){
        s_error.innerHTML="Введите только цифры";
        e.preventDefault();
    }

    else if(s_phone.value==""){
        s_error.innerHTML="Вы не ввели телефон";
        e.preventDefault();
    }
}


var form =document.getElementById("form");
form.addEventListener("submit",validate);

$(document).ready(function(){

    //active_form_input
    

   
    
});
