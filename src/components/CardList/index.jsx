import { useState } from "react";
import Card from "../Card";

export default function CardList() {
  const [publicacoes, setPublicacoes] = useState([])

  return(
    <>
      {publicacoes.map(p => (
        <Card key={p.id}
        titulo={p.titulo}
        autor={p.autor}
        orientador={p.orientador}
        imagem={p.capa}
      />
      ))}
      
    </>
  );
}