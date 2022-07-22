import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import { BoxInformTimePrice,   ContainerRestaurantCard, ImagemRestaurante, Inform, InformTimePrice, NameRestaurante } from "./styled";

const CardRestaurantsDetail = ({restaurant}) => {
  const navigate = useNavigate()

  return <>
  <ContainerRestaurantCard onClick={() => goToRestaurant(navigate,restaurant.id)}>
    <ImagemRestaurante src={restaurant.logoUrl}/>
    <NameRestaurante>{restaurant.name}</NameRestaurante>
    <Inform>{restaurant.category}</Inform>
    <BoxInformTimePrice>
      <Inform>{restaurant.deliveryTime}</Inform>
      <Inform>{restaurant.shipping}</Inform>
    </BoxInformTimePrice>
    <Inform>{restaurant.address}</Inform>
      </ContainerRestaurantCard> 
 </>
};

export default CardRestaurantsDetail;
