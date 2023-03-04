import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cadastro() {

  const [nome, setNome] = useState('José');

  const url = 'http://localhost:3010';
  function carregarDados() {
    axios.get(`${url}/publicacoes`)
      .then(response => setPublicacoes(response.data));
  }


  return(
    <>
      <Link href="/">Inicio</Link>
      <h2>Cadastro de TCC</h2>
      <p>Nome: {nome}</p>
      <form action="">
        <input 
          type="text" 
          onChange={event => setNome(event.target.value)}
          value={nome}
          />
      </form>
    </>
  )
}