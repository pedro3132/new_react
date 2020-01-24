import React from 'react';
import './menu.css';
import Pbar from './Pbar';


export default function Menu() {
  return (
 <>
<ul>
  <li><a className="active" href="#home">Inicio</a></li>
  <li><a href="#news">Noticias</a></li>
  <li><a href="#contact">Contatos</a></li>
  
  </ul>
<ul><Pbar/></ul>

 </>

  );
}
