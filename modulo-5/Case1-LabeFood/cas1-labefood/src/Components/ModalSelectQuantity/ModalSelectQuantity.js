
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BoxModal, ButtonAddToCard, SelectQuantity, TitleModal } from './styled';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalSelectQuantity = ({ open, setOpen,choiceQuantity }) => {
  const [quantity, setQuantity] = useState(1)



  return (
    <>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BoxModal>
            <TitleModal>
              Selecione a Quantidade Desejada
            </TitleModal>
            <SelectQuantity onChange={(e)=> setQuantity(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </SelectQuantity>
            <ButtonAddToCard onClick={() => choiceQuantity(Number(quantity))}>
              Adicionar Ao Carrinho
            </ButtonAddToCard>


          </BoxModal>
        </Fade>
      </Modal>
    </>
  );
}

export default ModalSelectQuantity