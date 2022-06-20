

// enum roles {
//     user= "user",
//     admin = "admin"

// }


// type arrayEmail = {
//     name:string,
//     email:string
//     role:roles
// }

// const arrayPessoas:arrayEmail[] =
//     [
//         { name: "Rogério", email: "roger@email.com", role: roles.user },
//         { name: "Ademir", email: "ademir@email.com", role: roles.admin },
//         { name: "Aline", email: "aline@email.com", role: roles.user },
//         { name: "Jéssica", email: "jessica@email.com", role: roles.user },
//         { name: "Adilson", email: "adilson@email.com", role: roles.user },
//         { name: "Carina", email: "carina@email.com", role: roles.admin }
//     ]


// const array = (pessoasEmail:Array<arrayEmail>):any => {
//     const novaPessoas:arrayEmail[] = pessoasEmail.filter((pessoas)=>{
//         if (pessoas.role === roles.admin){
//             console.log(pessoas.email)
//         }
        
//     })
//     return novaPessoas
// }

// console.log(array(arrayPessoas))