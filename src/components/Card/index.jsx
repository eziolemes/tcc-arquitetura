import Image from "next/image";

export default function Card({ titulo, autor, orientador, imagem, ...props }) {

  return(
    <div {...props}>
      <Image
        src={imagem}
        alt={titulo}
        width="387"
        height="272"
      />
      <h2>{titulo}</h2>
      <div>Autor(a): {autor}</div>
      <div>Orientador(a): {orientador}</div>
    </div>
  );
}