let nameInput = document.querySelector("#firstname")
console.log(nameInput);
let nameError = document.querySelector(".nameEr")
console.log(nameError);
let surnameInput = document.querySelector("#surname")
console.log(surnameInput);
let surnameError = document.querySelector(".surnameEr")
console.log(surnameError);
let mailInput = document.querySelector("input[type=email]")
console.log(mailInput);
let mailError = document.querySelector(".mailEr")
console.log(mailError);
let pswInput = document.querySelector("#pass")
console.log(pswInput);
let confirmPswInput = document.querySelector("#confirmpass")
console.log(confirmPswInput);
let pswError = document.querySelector(".passEr")
console.log(pswError);
let btn = document.querySelector("button[type=button]")
console.log(btn);



btn.onclick = function(){
   
    if(!nameInput.value){
        nameError.classList.remove("d-none")
        
    }
    else{
        nameError.classList.add("d-none")
        document.getElementsById("nameId").style.color="red"
    }
    if(!surnameInput.value){
        surnameError.classList.remove("d-none")
    }
    else{
        surnameError.classList.add("d-none")
        document.getElementsById("soyadId").style.color="red"
    }
    if(!mailInput.value){
        mailError.classList.remove("d-none")
        
    }
    else{
        mailError.classList.add("d-none")
        document.getElementsById("mailId").style.color="red"
    }
    if(!pswInput.value && !confirmPswInput.value){
        pswError.classList.remove("d-none")
       
    }
    else{
        if(pswInput.value!=confirmPswInput.value){
            pswError.classList.remove("d-none") 
        }
        else{
            pswError.classList.add("d-none")
            document.getElementsById("pswId").style.color="red"
        }
    }

    


    

    const isValid = nameInput.value 
                    && surnameInput.value 
                    && mailInput.value &&
                    pswInput.value==confirmPswInput.value &&(pswInput.value && confirmPswInput.value)
                    && mailInput.value;
    if(isValid) {
        window.open('https://www.facebook.com/','_blank')
    }


}