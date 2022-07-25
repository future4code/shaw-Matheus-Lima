import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import useProtectedPage from "../../Hooks/useProtectedPage";
import  useRequestData  from "../../Hooks/useRequestData";
import {BASE_URL} from "../../Constants/url";
import {
  ContainerProfile,
  InfosProfile,
  ProfileAdrees,
  purchasesHistoric,
  AddressTitle,
  EditButton,
  Address,
  Historic,
} from "./styled";
import { Create } from "@mui/icons-material";

const Profile = () => {
    useProtectedPage();
  
    const profile = useRequestData({}, `${BASE_URL}/profile`);
  
    console.log(profile[0].user);
    return (
      <div>
        <Header title={"Perfil"} back={true} />
        <ContainerProfile>
          <InfosProfile>
            <div>
              <p>{profile[0].user && profile[0].user.name}</p>
              <p>{profile[0].user && profile[0].user.email}</p>
              <p>{profile[0].user && profile[0].user.cpf}</p>
            </div>
            <EditButton>
              <Create />
            </EditButton>
          </InfosProfile>
          <ProfileAdrees>
            <div>
              <AddressTitle>Endereço cadastrado</AddressTitle>
              <Address>{profile[0].user && profile[0].user.address}</Address>
            </div>
            <EditButton>
              <Create />
            </EditButton>
          </ProfileAdrees>
          <Historic>
            <p>Historico de compras</p>
            <hr />
          </Historic>
        </ContainerProfile>
  
        <Footer page="profile" />
      </div>
    );
  };
  
  export default Profile;