import React, { useState } from "react";
import {ButtonStyled, DivPassword, InputMaterial, Main} from "../signUp/styled"
import useForm from "../../Hooks/useForm"
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import axios from "axios"
import { BASE_URL } from "../../Constants/url";
import { goToSignUpAdress } from "../../Routes/coordinator";
import { useNavigate } from "react-router";

const SignUp = ()=>{

    const {form, onChange, clean} = useForm({
        name:"",
        email:"",
        cpf:"",
        password:""
})

const navigate = useNavigate()

const [confirmPass, setConfirmPass] = useState("")
const [showPass, setShowpass] = useState(false)
const [showCheckPass, setShowCheckPass] = useState(false)
const [checkErrorPass, setcheckErrorPass] = useState(false)


  function mask(cpf)
  {
    cpf = cpf.replace(/\D/g, "");    
    cpf = cpf.replace(/^(\d{3})/g, "$1.");
    cpf = cpf.replace(/(\d{3})(\d{3})/g, "$1.$2-");        
    return cpf;
  }

  const handleClickShowPassword = () => {
    setShowpass(!showPass);
  };

  const handleClickShowCheckPassword = () => {
    setShowCheckPass(!showCheckPass);
  };
  

const onSubmitForm = (event)=>{
    event.preventDefault()
    if(form.password !== confirmPass){
        setcheckErrorPass(true)
    }else{
        setcheckErrorPass(false)
        signUpPerson()
    }
}

const signUpPerson = async()=>{
    try {
        await axios.post(`${BASE_URL}/signup`,form)
        .then((res)=>{
                console.log(res.data)
                localStorage.setItem("token",res.data.token)
                alert(`boas vindas,${res.data.user.name}`)
                goToSignUpAdress(navigate)
            })
        
    } catch (err) {
        console.log(err.response.data.message)
        alert("email ou cpf já cadastrados")
    }
}
// const signUpPerson = async()=>{
// await axios.post(`${BASE_URL}/signup`,form)
// .then((res)=>{
//     console.log(res.data)
//     localStorage.setItem("token",res.data.token)
//     alert(`boas vindas,${res.data.user.name}`)
//     goToSignUpAdress(navigate)
// })
// .catch((err)=>{
//     console.log(err.data)

// })    
// }

    return <Main>
        
       <p>Cadastrar</p>
       <form onSubmit={onSubmitForm}>
        <InputMaterial
        id="outlined-basic"
        label={"Nome"}
        name='name'
        type={"text"}
        placeholder={"Digite seu nome"}
        variant="outlined"
        value={form.name}
        onChange={onChange}
        />
        <InputMaterial
        id="outlined-basic"
        label={"Email"}
        name='email'
        type={"text"}
        placeholder={"Digite seu email"}
        variant="outlined"
        value={form.email}
        onChange={onChange}
        />
        <InputMaterial
        id="outlined-basic"
        label={"Cpf"}
        name='cpf'
        type={"text"}
        placeholder={"Digite seu cpf"}
        variant="outlined"
        value={mask(form.cpf)}
        onChange={onChange}
        />

         <DivPassword>
          <InputMaterial
            // error={checkerrorPassword}
            // helperText={checkerrorPassword ? errCheckPassword : ""}
            id="outlined-basic"
            label="Password"
            name='password'
            type={showPass ? "text" : "password"}
            variant="outlined"
            placeholder="Min 6 caracteres"
            value={form.password}
            onChange={onChange}
            inputProps={{
              minlength: "6",
              title: "A senha deve ter no mínimo 6 caracteres",
            }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPass ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>
        <DivPassword>
          <InputMaterial
            error={checkErrorPass}
            helperText={checkErrorPass ? "Deve ser a mesma que a anterior" : ""}
            id="outlined-basic"
            label="Confirmar"
            type={showCheckPass ? "text" : "password"}
            variant="outlined"
            placeholder="Min 6 caracteres"
            value={confirmPass}
            onChange={(e)=>{setConfirmPass(e.target.value)}}
            inputProps={{
              minlength: "6",
              title: "A senha deve ter no mínimo 6 caracteres",
            }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPassword}
            edge="end"
          >
            {showCheckPass ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>
        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
       </form>
    </Main>

}



export default SignUp