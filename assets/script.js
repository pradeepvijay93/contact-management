const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const number = document.getElementById('mobnum')
const email = document.getElementById('mail')
const submit = document.getElementById('submit')
const view = document.getElementById('viewdata')
const jsontable = document.getElementById('formtable')
const indexform = document.getElementById('forms')


const API_URL = "http://localhost:3000/employees"

submit.addEventListener('click', () => { 
    const user={
    firstname : fname.value,
    lastname : lname.value,
    mobilenum : mobnum.value,
    mailid : mail.value
}
handlepost(user)



})
view.addEventListener('click',() => {
    handleGet()
})
const handlepost = async (user) => {
    try{
        const response = await fetch(API_URL ,{
                                        method : 'POST',
                                        headers : {
                                            "Content-Type" : "application/json"
                                        },
                                        body : JSON.stringify(user)
                                     })
    }
    catch(err){
        console.log(err)

    }
}
const handleGet = async () => {
    try{
        const response = await fetch(API_URL ,{
            method : 'GET' ,
            headers :{
                Accept : 'application/json'
            }
        })
        const data = await response.json()
        data.forEach(e => {
            const tablerow = `<tr>
                          <td>${e.fname}</td>
                          <td>${e.lname}</td>
                          <td>${e.number}</td>
                          <td>${e.mail}</td>
                    </tr>`
            jsontable.innerHTML += tablerow      

            
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

