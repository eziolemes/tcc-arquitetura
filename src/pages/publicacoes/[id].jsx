import { useRouter } from "next/router";

export default function ListarPublicacoes() {
  const router = useRouter();
  const { id, titulo, ano } = router.query;

  return(
    <>
      <div>Página: {id}</div>
      <div>Filtro: {titulo}</div>
      <div>Ano: {ano}</div>
    </>
  )
}