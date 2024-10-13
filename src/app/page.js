import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <header className="w-full h-[93px] flex items-center justify-between px-[90px]">
      <Image
        src="/imgs/logo.png" 
        alt="Descrição da imagem"
        width={136} 
        height={32}  
      />
      <div className="flex flex-row items-center gap-[67px]">
        <p className="font-Inter font-medium text-azul hover:text-butaohover cursor-pointer duration-150">Home</p>
        <p className="font-Inter font-medium text-cinza hover:text-butaohover cursor-pointer duration-150">Sobre</p>
        <p className="font-Inter font-medium text-cinza hover:text-butaohover cursor-pointer duration-150">Serviços</p>
        <button className="font-Inter font-medium text-white text-[16px] flex justify-center items-center w-[217px] h-[43px] bg-azul hover:bg-butaohover duration-150 rounded-[27px]">Agende sua consulta</button>
      </div>
    </header>

    <section>
      <div className="w-[512px] h-[522px] ">
        <p className="text-azulEscuro text-[72px] font-semibold leading-tight">
          Consulte Sua Saúde Dental Agora
        </p>
        <p className="text-[18px] font-normal text-cinza">
          Oferecemos atendimento personalizado, focado na prevenção, para que você sorria com confiança.
        </p>
        <button className="w-[364px] h-[66px] bg-azul hover:bg-butaohover text-white text-[24px] font-medium rounded-[20px] duration-150">
          Agende sua consulta
        </button>
        <p>
          <FaLocationDot/>
        </p>
      </div>
    </section>
    
    </>
  );
}
