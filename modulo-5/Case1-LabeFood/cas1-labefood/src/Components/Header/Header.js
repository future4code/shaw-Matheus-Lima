import { ContainerHeader, Title } from "./styled";
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../Routes/coordinator";

const CardHeader = ({title}) => {
  const navigate = useNavigate()

  return <ContainerHeader>
     <ArrowBackIosNew onClick={()=> goToBack(navigate)}/>
    <Title>{title}</Title>

    
      </ContainerHeader> 
 
};

export default CardHeader;
