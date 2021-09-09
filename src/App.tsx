import React from 'react';
import './styles/global.css';
import './styles/pages/landing-menu.css';
import './styles/pages/login-page.css';
import { VscChevronDown } from 'react-icons/vsc';
import {IoPersonCircleOutline } from 'react-icons/io5';
import {FaFacebook } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {CgCloseO} from 'react-icons/cg';
import logoImg from './images/logo.png'
import pizzasvg from './images/pizzavec.svg'

function Abrir() {
  
  document.getElementById('aba')!.style.display = 'block';


}




function App() {
  

  return (

    <div className="page-landing">
      <div className="header-menu">
        <nav className="nav-menu">
         <div className="content">
          <div className="logoMenu"><h1><img src={logoImg} alt="" /></h1></div>
           <ul className="links">  
             <li className="proml"><a href="/">PROMOÇÕES<VscChevronDown/></a>
                  <ul className="prom">
                    <a href="/"><strong>Promoções</strong></a>
                    <li><a href="/" id='cprom'>Calendario de promoções</a></li>
                    <li><a href="/">Promoções do dia</a></li>
                    <li><a href="/">Promoções de ponto</a></li>
                    <li><a href="/">Regulamento</a></li>
                  </ul>
              </li> 
              <li className="cardl"><a href="/">CARDÁPIO<VscChevronDown/></a>
                  <ul className="card">
                    <li><a href="/"><strong>Cardápio</strong></a></li>
                    <li><a href="/" id='ccard'>Pizzas tradicionais</a></li>
                    <li><a href="/">Pizzas doces</a></li>
                    <li><a href="/">Esfiras</a></li>
                    <li><a href="/">Bebidas</a></li>
                    <li><a href="/">Outros</a></li>
                  </ul>
                </li>
              <li><a href="/">LOCAIS</a></li>
           </ul> 
         </div>
         <div className="login">
        <button  id="btnOp" className="btnOp" onClick={Abrir}>
              <span className="buttonimg"><IoPersonCircleOutline size="19px"/></span>
              <span className="buttontext">LOGIN</span>
        </button>
            <>
           <ul className="art" id="aba">
              <a href="/" className="btnExit"><CgCloseO/></a>
              <h1 ><img src={pizzasvg} alt="pizzalog" className="pizzaLog"/></h1>
              
              <h1 className="logo-login">Login LosCuatro</h1>
                <li>
                  <p className="fundo"></p>
                  <form action="" className="logn-form">
                    <label htmlFor="userImput" className="labimp" >Email ou Username</label>
                    <input type="text" name="userImput" id="userImput" className="imputLogin"/>
                    <label htmlFor="userPassword" className="labimp1" >Senha</label>
                    <label htmlFor="userPassword"  className="labimp2" ><a href="@" >Esqueceu a senha ?</a></label>
                    <input type="password" id="userPassword" name="userPassword" className="userPassword"/>
                    <input type="checkbox" id="userRemember" name="userRemenber"className="userRemember"/>
                    <label htmlFor="userRebember"className="p1">Lembrar de mim</label>
                    <button type="submit" id="btnLog" className="btnLog">LOGIN</button>
                    <hr className="hr1" /><p className="pou">ou</p><hr className="hr2" />
                    <button type="submit" id="btnFac" className="btnFac">
                      <span className="buttonimg"><FaFacebook size="17px"/></span>
                      <span className="buttontext">CONTINUAR COM FACEBOOK</span>
                    </button>
                    <button type="submit" id="btnGoo" className="btnGoo">
                      <span className="buttonimg">< FcGoogle size="17px"/></span>
                      <span className="buttontext">CONTINUAR COM GOOGLE</span>
                    </button>
                    <button type="submit" id="btnNum" className="btnNum">
                      <span className="buttontext">CONTINUAR COM UM NUMERO DE TELEFONE</span>
                    </button>
                    <hr className="hr3" />
                    <p className="pna">Não tem conta ?</p>
                    <button type="submit" id="btnInc" className="btnInc">
                      <span className="buttontext">INSCREVER-SE NO LOSCUATRO</span>
                    </button>
                    <p className="fundo"></p>
                    
                  </form>
                </li>
           </ul>
           </>
         </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
