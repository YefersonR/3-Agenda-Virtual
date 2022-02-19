const container = document.getElementById("container")
const form = document.getElementById("form")
const url = "http://www.raydelto.org/agenda.php"
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")


console.getElementById
//fetch : GET
function getData(){
    
    fetch(url)
    .then(response => response.json())
    .then(data => data.forEach(element => {
        container.innerHTML += `
        <div class="contact-info">
            <ul>
                <li>${element.nombre}</li>
                <li>${element.apellido}</li>
                <li>${element.telefono}</li>
            </ul>
        </div>
            `
    })
    ).catch(error => error)
}

//fetch : POST
function sendData(){
    fetch(url,{
        method: 'POST',
        body:  JSON.stringify({
            nombre:nombre.value,
            apellido:apellido.value,
            telefono:telefono.value
        })
    })
    .then(res =>  res.json())
    .then(data => console.log(data))
}

function clear(){
    nombre.value= ''
    apellido.value= ''
    telefono.value= ''
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    sendData()  
    getData()  
    clear()

}) 


//
document.addEventListener('DOMContentLoaded',getData())