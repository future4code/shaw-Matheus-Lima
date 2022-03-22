import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from "./imgs/foto.jpeg"
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto}
          nome="Matheus" 
          descricao="Olá, eu sou o Matheus. do matheusverso somos muitos e somos infinitos nós somos venon, afinal o universo ainda está sobre controle
          pela quantidade de matheuses que estão trabalhando duro nos dias de hoje na labenu para mater o controle de tudo."
        />
        
        <ImagemButton 
          imagem="https://app.recadinhosdahora.com/botao-ver-mais.jpg" 
          texto="Ver mais"
        />
      </div>


      <CardPequeno
      imagem = "https://www.pinclipart.com/picdir/middle/574-5746119_email-icon-email-logo-white-png-clipart.png"
      email = "joao123@gmail.com"
      imagemlocaliza = "https://img1.gratispng.com/20180328/xhq/kisspng-paper-google-map-maker-computer-icons-world-map-location-icon-5abbd6d8dee0b3.1544670315222596729129.jpg"
      endereco = "Rua Liberdade 321"/>

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png" 
          nome="Labenu" 
          descricao="Desenvolvendo Habilidades todos os dias na Labenu!" 
        />
        
        <CardGrande 
          imagem="https://logospng.org/download/nasa/logo-nasa-512.png" 
          nome="NASA" 
          descricao="Cuidando do Universo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
