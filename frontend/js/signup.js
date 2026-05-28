const nameInput = document.getElementById('name')
const familyInput = document.getElementById('family')
const emailInput = document.getElementById('email')
const passInput = document.getElementById('pass')
const ageInput = document.getElementById('age')
const registerBtn = document.getElementById('register')

registerBtn.addEventListener('click' , async(event)=>{
    event.preventDefault()
    const userData = {
        name : nameInput.value,
        family : familyInput.value,
        email : emailInput.value,
        password : passInput.value,
        age : ageInput.value
    }

    const res = await fetch('http://localhost:8000/api/users/' , {
        method : "POST",
        body : JSON.stringify(userData),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const data = await res.json()
    
    if(res.status == 422){
        return Swal.fire({
        title : 'Registration Failed!',
        icon : 'error',
        })
    }

    Swal.fire({
        title : 'Registration is successful!',
        icon : 'success',
        

    })
})



