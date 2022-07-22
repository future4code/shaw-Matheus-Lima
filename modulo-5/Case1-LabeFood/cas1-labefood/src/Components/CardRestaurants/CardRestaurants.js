import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import { BoxInformTimePrice, ContainerCardRestaurants, ImagemRestaurante, InformTimePrice, NameRestaurante } from "./styled";

const CardRestaurants = ({restaurant}) => {
  const navigate = useNavigate()

  return <>
  <ContainerCardRestaurants onClick={() => goToRestaurant(navigate,restaurant.id)}>
    <ImagemRestaurante src={restaurant.logoUrl}/>
    <NameRestaurante>{restaurant.name}</NameRestaurante>
    <BoxInformTimePrice>
      <InformTimePrice>{restaurant.deliveryTime}</InformTimePrice>
      <InformTimePrice>{restaurant.shipping}</InformTimePrice>
    </BoxInformTimePrice>
      </ContainerCardRestaurants> 
 </>
};

export default CardRestaurants;
