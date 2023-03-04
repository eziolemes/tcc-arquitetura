export default function Card({ titulo, autor, orientador, ...props }) {

  return(
    <div {...props}>
      imagem
      <h2>{titulo}</h2>
      <div>Autor(a): {autor}</div>
      <div>Orientador(a): {orientador}</div>
    </div>
  );
}