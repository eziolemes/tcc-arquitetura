import Image from "next/image";
import style from "./style.module.css";
import LogoIfro from "../../images/logo-ifro.png";

export default function Header() {

  return (
    <header className={style.cabecalho}>
      <div>
         <Image
          src="/logo-ifro.png"
          alt="Logotipo de IFRO"
          width={79}
          height={112}
        />
        {/* <Image
          src={LogoIfro}
          alt="Logotipo de IFRO"
          width={79}
          height={112}
        /> */}
      </div>
      <div>
        Repositório de TCC do Bacharelado em Arquitetura e Urbanismo
      </div>
    </header>
  )
}