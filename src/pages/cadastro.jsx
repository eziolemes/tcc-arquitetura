import Link from "next/link";
import { useState } from "react";

export default function Cadastro() {

  const [nome, setNome] = useState('Maria');


  return(
    <>
      <Link href="/">Inicio</Link>
      <h2>Cadastro de TCC</h2>
      <p>Nome: {nome}</p>
      <form action="">
        <input 
          type="text" 
          onChange={event => setNome(e.target.value)}
          value={nome}
          />
      </form>
    </>
  )
}