import { ContainerOrder, ContainerInfo, ContainerIcon } from "./styled";
import { AccessTime } from "@mui/icons-material";

const Order = ({activeOrder}) => {
  return (
    <ContainerOrder>
      <ContainerIcon>
        <AccessTime fontSize="large" />
      </ContainerIcon>
      <ContainerInfo>
      <h4>Pedido em andamento</h4>
      <p>{activeOrder.restaurantName}</p>
      <p>SUBTOTAL R${activeOrder.totalPrice.toFixed(2)}</p>
      </ContainerInfo>
    </ContainerOrder>
  );
};