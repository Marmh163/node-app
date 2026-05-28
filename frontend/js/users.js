const userContainer = document.querySelector('.userContainer')

window.addEventListener('load' , async () => generateUI())

async function  deleteUserById(id){
    const res= await fetch(`http://localhost:8000/api/users/${id}` , {
        method : 'DELETE'
    })
    const data = await res.json()
    if(res.status != 200){
        return Swal.fire({
            title: 'user removed failed',
            icon: 'error'
        })
    }
    Swal.fire({
            title: 'user removed successfully',
            icon: 'success'
    })

    generateUI()

}

async function getUsers(){
    const res1 = await fetch('http://localhost:8000/api/users/')
    const users = await res1.json()
    return users
}

function generateUserElement(user){
    const userElement = `<div class="user">
                    <p><b>name</b> : ${user.name}</p>
                    <p><b>family</b> : ${user.family}</p>
                    <p><b>email</b> : ${user.email}</p>
                    <p><b>password</b> : ${user.password}</p>
                    <p><b>age</b> : ${user.age}</p>
                    <button onClick="deleteUserById('${user._id}')">delete user</button>
                </div>`
        return userElement
}


async function generateUI(){
    const users = await getUsers()
    userContainer.innerHTML = ''
    users.forEach(user => {
        userContainer.innerHTML += generateUserElement(user)
    })
}