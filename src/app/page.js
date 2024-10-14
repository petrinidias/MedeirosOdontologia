import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import Styles from "./page.module.css"
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <>
    <div className={Styles.gradiente}>
      <header className="w-full h-[93px] flex items-center justify-between px-[90px]">
        <Image
          src="/imgs/logo.png" 
          alt="Descrição da imagem"
          width={136} 
          height={32}  
        />
        <div className="flex flex-row items-center gap-[67px]">
          <p className="font-Inter font-medium text-azul text-[14px] hover:text-butaohover cursor-pointer duration-150">Home</p>
          <p className="font-Inter font-medium text-cinza text-[14px] hover:text-butaohover cursor-pointer duration-150">Sobre</p>
          <p className="font-Inter font-medium text-cinza text-[14px] hover:text-butaohover cursor-pointer duration-150">Serviços</p>
          <button className="font-Inter font-medium text-white text-[16px] flex justify-center items-center w-[217px] h-[43px] bg-azul hover:bg-butaohover duration-150 rounded-[27px]">Agende sua consulta</button>
        </div>
      </header>

      <section className="flex flex-row justify-between items-center">
        <div className="w-[512px] h-[522px] ml-[90px] mt-[10px]">
          <p className="text-azulEscuro text-[65px] font-semibold leading-tight mb-[30px]">
            Consulte Sua Saúde Dental Agora
          </p>
          <p className="text-[16px] font-normal text-cinza  mb-[30px] leading-tight">
            Oferecemos atendimento personalizado, focado na prevenção, para que você sorria com confiança.
          </p>
          <button className="w-[364px] h-[66px] bg-azul hover:bg-butaohover text-white text-[24px] font-medium rounded-[20px] duration-150 mb-[30px]">
             Agende sua consulta
          </button>

          <div className="w-[515px] h-fit flex flex-row items-center">
            <span className="bg-azul text-[16px] text-white w-[26px] h-[26px] rounded-full flex justify-center items-center">
              <FaLocationDot/>
            </span>
            <p className="text-cinza text-[17px] pl-[15px]">
              Estamos localizados em <a className="text-azul cursor-pointer"> Vila da Penha - Rio de Janeiro</a>
            </p>
          </div>
        </div>
        <div className="mr-[90px]">
          <Image
            src="/imgs/dri.png" 
            alt="Descrição da imagem"
            width={615} 
            height={497}  
          />
        </div>
      </section>
    </div>
    <div className="h-[1000px] w-full flex flex-row justify-center items-center gap-[200px] bg-slate-300">
      <div>
        <Image
          src="/imgs/containeradriana.png" 
          alt="Adriana"
          width={464} 
          height={619}
          className="rounded-[45px]"
        />

        <div className="flex flex-row justify-center items-center w-[265px] h-[80px] rounded-[20px] bg-white mb-[15px] ">
          <div className="flex justify-center items-center h-[50px] w-[50px] rounded-[10px] text-[40px] text-white bg-azul mr-[15px]">
            <CgProfile/>
          </div>
          <div>
            <p className="font-bold text-azulEscuro text-[20px]">Dra. Adriana Dias</p>
            <p className="font-medium text-cinza text-[16px]">Cirurgiã-dentista</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-[265px] h-[130px] rounded-[20px] text-azul bg-white">
          <p>
            <span className="text-azulEscuro font-semibold ">Especializações em:</span><br/>
            Ortodontia<br/>
            Prótese dentária<br/>
            Procedimentos emergênciais
          </p>
        </div>
      </div>

      <div>
        <Image
          src="/imgs/containerraquel.png" 
          alt="Adriana"
          width={464} 
          height={619}  
          className="rounded-[45px]"
        />
        <div className="flex flex-row justify-center items-center w-[265px] h-[80px] rounded-[20px] bg-white mb-[15px]">
          <div className="flex justify-center items-center h-[50px] w-[50px] rounded-[10px] text-[40px] text-white bg-azul mr-[15px]">
            <CgProfile/>
          </div>
          <div>
            <p className="font-bold text-azulEscuro text-[20px]">Dra. Raquel Dias</p>
            <p className="font-medium text-cinza text-[16px]">Cirurgiã-dentista</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-[265px] h-[130px] rounded-[20px] text-azul bg-white">
          <p>
            <span className="text-azulEscuro font-semibold ">Especializações em:</span><br/>
            Saúde pública com ênfase<br/> em família<br/>
            Laserterapia<br/>
          </p>
        </div>
      </div>


    </div>
    </>
  );
}
