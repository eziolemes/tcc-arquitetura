import { useState } from "react";
import Card from "../Card";

export default function CardList() {
  const [publicacoes, setPublicacoes] = useState([
    {id: 1, titulo: "Vida de quatro patas", autor: "Maria", orientador: "José"},
    {id: 2, titulo: "4 Estações", autor: "Mariana", orientador: "Áurea"},
    {id: 3, titulo: "Habitação", autor: "Renata", orientador: "Regina"}
  ])

  return(
    <>
      {publicacoes.map(p => {
        <Card key={p.id}
        titulo={p.titulo}
        autor={p.autor}
        orientador={p.orientador}
      />
      })}
      
    </>
  );
}