import Image from "next/image";
import Link from "next/link";

export default function Card({ titulo, autor, orientador, imagem, url, ...props }) {

  return(
    <div {...props}>
      <Link href={url}>
        <Image
          src={imagem}
          alt={titulo}
          width="387"
          height="272"
        />
        <h2>{titulo}</h2>
        <div>Autor(a): {autor}</div>
        <div>Orientador(a): {orientador}</div>
      </Link>
    </div>
  );
}