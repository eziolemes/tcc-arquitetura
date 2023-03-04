import Image from "next/image"
import style from "./style.module.css";
import LogoIfro from "../../images/logo-ifro.png";
import LogoFSLab from "../../../public/fslab.png";

export default function Footer() {

  return(
    <div className={style.footer}>
      <div className="logo-fslab">
        <Image
          src={LogoFSLab}
          alt="Logotipo do FSLab"
        />
      </div>
      <div className="endereco">
        <div>
          <p>IFRO - Instituto Federal de Rondônia</p>
          <p>Endereço: Rodovia BR-174, Km 3 S/n Zona urbana, Vilhena - RO, 76980-000</p>
          <p>Fone: (69) 2101-0700</p>
        </div>
        <div>
          <Image
            src={LogoIfro}
            alt="Logo do Ifro"
            width={79}
            height={112}
          />
        </div>
      </div>
    </div>
  )
}