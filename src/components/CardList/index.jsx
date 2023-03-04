import { useState } from "react";
import Card from "../Card";

export default function CardList() {
  const [publicacoes, setPublicacoes] = useState([
    {id: 1, titulo: "Vida de quatro patas", autor: "Maria", orientador: "José", capa:"/image_1.png"},
    {id: 2, titulo: "4 Estações", autor: "Mariana", orientador: "Áurea", capa:"/image_10.png"},
    {id: 3, titulo: "Habitação", autor: "Renata", orientador: "Regina", capa:"/image_14.png"}
  ])

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