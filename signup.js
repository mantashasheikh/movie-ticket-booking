VANTA.WAVES({
  el: "#big",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color:0x202429, 
  shininess: 64.00,
  zoom: 1.23
})




function SignUp(){
        let Name = document.querySelector("#name").value.trim()
        let Email = document.querySelector("#email").value.trim()
        let Username = document.querySelector("#username").value.trim()
        let Pass = document.querySelector("#pass").value.trim()
        let Cpass = document.querySelector("#cpass").value.trim()
        
        
        let Errname = document.querySelector("#errname")
        let Erremail = document.querySelector("#erremail")
        let Errusername = document.querySelector("#errusername")
        let Errpass = document.querySelector("#errpass")
        let Errcpass = document.querySelector("#errcpass")


        if(Name==""){
            Errname.innerHTML="Please enter name*"
            Errname.style.color="rgba(204, 6, 6, 1)"
            return false
        }
        else if(Email==""){
            Erremail.innerHTML="Please enter an email*"
            Erremail.style.color="rgba(204, 6, 6, 1)"
            return false
        }
        else if(!(Email.includes("@") && Email.includes(".com"))){
            Erremail.innerHTML="Please enter an valid email*"
            Erremail.style.color="rgba(204, 6, 6, 1)"
            return false
        }
        else if(Username==""){
            Errusername.innerHTML="Please enter a correct username"
        }
        else if(Pass==""){
            Errpass.innerHTML="Please enter a password*"
            Errpass.style.color="rgba(204, 6, 6, 1)"
            return false
        }
        else if(Pass.length!=8){
            Errpass.innerHTML="Please enter 8 characters*"
            Errpass.style.color="rgba(204, 6, 6, 1)"
            return false
        }
        else if((Pass.match(/[0123456789]/)
            && Pass.match(/[@,_]/)
            && Pass.match(/[a-z]/)
            && Pass.match(/[A-Z]/))){
            Errpass.innerHTML="Please enter 8 characters*"
            Errpass.style.color="red"
            return false
        }
        else if(Cpass==""){
            Errcpass.innerHTML="Please enter a password*"
            Errcpass.style.color="red"
            return false
        }
        else if(Cpass!=Pass){
            Errcpass.innerHTML="Does not match*"
            Errcpass.style.color="red"
            return false
        }

        localStorage.setItem("name",Name)
        localStorage.setItem("email",Email)
        localStorage.setItem("username",Username)
        localStorage.setItem("password",Pass)
        localStorage.setItem("confirm password",Cpass)


        location.href="login.html"
        return false


      }


