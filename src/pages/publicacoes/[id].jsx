import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ListarPublicacoes() {
  const router = useRouter();

  const [publicacao, setPublicacao] = useState([]);

  const { id } = router.query;

  const url = 'http://localhost:3010';

  function carregarDados() {
    axios.get(`${url}/publicacoes/${id}`)
      .then(response => setPublicacao(response.data));
      console.log('dir arquivo')
      console.log(publicacao)
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return(
    <>
      <Header />

      {/* {publicacoes.map(p => (
        <div key={p.id}>
          <div>Titulo: {p.titulo}</div>
          <div>Autor (a): {p.autor}</div>
          <div>Orientador (a): {p.orientador}</div>
        </div>
      ))} */}
      {publicacao && <iframe src={publicacao.arquivo}>Teste</iframe>}

      <Footer />
    </>
  )
}