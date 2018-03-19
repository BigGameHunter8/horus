function validate(){
    var phone = document.getElementById("phone");
    var error = document.getElementById("error");
    
    console.log(error);
    
    if(isNaN(phone.value)){
        error.innerHTML="Введите только цифры";
        console.log(error);
    }

    else if(phone.value=""){
        error.innerHTML="Вы не вели телефон";
        console.log(error);
    }
}