// Needs a function submitData(usersname,useremail)

function submitData(username,useremail){
       const configurationObject = {
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            username: "Steve",
            useremail:"steve@steve.com"
        })
       }
}

fetch(`http://localhost:3000/users`,configurationObject);