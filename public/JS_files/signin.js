document.addEventListener("DOMContentLoaded", function() {
    let input__username = document.getElementById("username");
    let input__email = document.getElementById("email");
    let input__password = document.getElementById("password");
    let input__phone = document.getElementById("phone");
    let username__label = document.getElementById("label1");
    let email__label = document.getElementById("label2");
    let phone__label = document.getElementById("label3");
    let password__label = document.getElementById("label4");
    let form__signin = document.getElementById("form");
    let message__error = document.getElementById("message__error");
    if(input__username) {
        input__username.addEventListener("input", function() {
            username__label.classList.toggle("active", this.value !== '');
            this.value = this.value.replace(/[^a-zA-Z0-9_]/g, '');
        });
        input__email.addEventListener("input", function() {
            this.value = this.value.replace(/[^a-zA-Z0-9_@.]/g, '');
        });
        input__password.addEventListener("input", function() {
            this.value = this.value.replace(/[^a-zA-Z0-9_]/g, '');
        });
        input__phone.addEventListener("input", function() {
            this.value = this.value.replace(/[^a-zA-Z0-9_]/g, '');
        });
        input__username.addEventListener("focus", function() {
            username__label.style.transform = "translate3d(0, -1.75em, 0)";
            username__label.style.color = "hsl(var(--bg))";
            username__label.style.backgroundColor = "hsl(var(--muted))";
            input__username.style.setProperty("--controlopacity", "1");
        });
        input__username.addEventListener("blur", function(e) {
            if(e.target.value == '' || e.target.value == null) {
                username__label.style.transform = "translate3d(0, 0, 0)";
                username__label.style.backgroundColor = "hsl(var(--muted))";
                input__username.style.setProperty("--controlopacity", "0");
                username__label.style.color = "";
            }
        });
        input__email.addEventListener("focus", function() {
            email__label.style.transform = "translate3d(0, -1.75em, 0)";
            email__label.style.color = "hsl(var(--bg))";
            email__label.style.backgroundColor = "hsl(var(--muted))";
            input__email.style.setProperty("--controlopacity", "1");
        });
        input__email.addEventListener("blur", function(e) {
            if(e.target.value == '' || e.target.value == null) {
                email__label.style.transform = "translate3d(0, 0, 0)";
                email__label.style.backgroundColor = "hsl(var(--muted))";
                email__label.style.color = "";
                input__email.style.setProperty("--controlopacity", "0");
            }
        });
        input__phone.addEventListener("focus", function() {
            phone__label.style.transform = "translate3d(0, -1.75em, 0)";
            phone__label.style.color = "hsl(var(--bg))";
            phone__label.style.backgroundColor = "hsl(var(--muted))";
            input__phone.style.setProperty("--controlopacity", "1");
        });
        input__phone.addEventListener("blur", function(e) {
            if(e.target.value == '' || e.target.value == null) {
                phone__label.style.transform = "translate3d(0, 0, 0)";
                phone__label.style.transform = "translate3d(0, 0, 0)";
                phone__label.style.backgroundColor = "hsl(var(--muted))";
                phone__label.style.color = "";
                input__phone.style.setProperty("--controlopacity", "0");
            }
        });    
        input__password.addEventListener("focus", function() {
            password__label.style.transform = "translate3d(0, -1.75em, 0)";
            password__label.style.color = "hsl(var(--bg))";
            password__label.style.backgroundColor = "hsl(var(--muted))";
            input__password.style.setProperty("--controlopacity", "1");
        });

        input__password.addEventListener("blur", function(e) {
            if(e.target.value == '' || e.target.value == null) {
                password__label.style.transform = "translate3d(0, 0, 0)";
                password__label.style.backgroundColor = "hsl(var(--muted))";
                password__label.style.color = "";
                input__password.style.setProperty("--controlopacity", "0");
            }
        });
        
    }
    let arr = ['']
    let append = false;
    if(form__signin){
        form__signin.addEventListener("submit", function(event) {
            event.preventDefault();
            let message__content = document.createElement("p");
        if(input__username.value === '' || input__email.value === '' || input__password.value === '' || input__phone.value === '') {
                message__error.style.display = "block";
                message__content.textContent = "Please fill in all fields.";
                message__content.style.setProperty("margin-right", "-6rem");
                message__content.style.setProperty("margin-left", "-1rem"); 
                if(!append){
                    message__error.appendChild(message__content);
                    append = true;
                }
                event.preventDefault();
            }

            if(Number.isInteger(parseInt(input__username.value[0]))) {
                message__error.style.display = "block";
                message__content.textContent = "username cannot start with number.";
                message__content.style.setProperty("margin-right", "-12rem");
                message__content.style.setProperty("margin-left", "-6rem");
                input__username.focus();
                if(!append){
                    message__error.appendChild(message__content);
                    append = true;
                }
                event.preventDefault();
            }
            else{
                message__error.style.display = "none";

            }
        });

    }

});