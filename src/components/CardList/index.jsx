import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import style from "./style.module.css";

export default function CardList() {
  const [publicacoes, setPublicacoes] = useState([]);

  const url = 'http://localhost:3010';

  function carregarDados() {
    axios.get(`${url}/publicacoes`)
      .then(response => setPublicacoes(response.data));
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return(
    <div className={style.grid}>
      {publicacoes.map(p => (
        <Card key={p.id}
        titulo={p.titulo}
        autor={p.autor}
        orientador={p.orientador}
        imagem={p.capa}
        url={`/publicacoes/${p.id}`}
      />
      ))}
      
    </div>
  );
}