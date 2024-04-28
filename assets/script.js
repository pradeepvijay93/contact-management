const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const number = document.getElementById('mobnum')
const email = document.getElementById('mail')
const submit = document.getElementById('submit')
const view = document.getElementById('viewdata')
const jsontable = document.get


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

