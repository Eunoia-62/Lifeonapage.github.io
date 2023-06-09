const form = document.getElementById("form1")

eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),

form.onsubmit = (e) => {
    e.preventDefault(); //preventing from form submitting
    //if email and password is blank then add shake class in it else call specified function 
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();

    eInput.onkeyup = () => { checkEmail(); } //calling checkEmail function on email input keyup

    function checkEmail() { //checkEmail function
        let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; //pattern for validate email
        if (!eInput.value.match(pattern)) { //if pattern not matched then add error and remove valid class
            eField.classList.remove("valid");
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else { //if pattern matched then remove error and add valid class
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    //if eField and pField doesn't contains error class that mean user filled details properly
    if (!eField.classList.contains("error")){
        //hi
}
}
