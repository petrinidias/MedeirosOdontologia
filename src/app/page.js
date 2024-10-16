import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import Styles from "./page.module.css"
import { CgProfile } from "react-icons/cg";
import Servicos from "./servicosProps";

export default function Home() {
  return (
    <>
    <div className={Styles.gradiente}>
      <header className="w-full h-[110px] flex items-center justify-between px-[90px]">
        <Image
          src="/imgs/logo.png" 
          alt="Descrição da imagem"
          width={136} 
          height={32}  
        />
        <div className="flex flex-row items-center gap-[67px]">
          <p className="font-Inter font-medium text-azulEscuro text-[14px] hover:text-butaohover cursor-pointer duration-150">Home</p>
          <p className="font-Inter font-medium text-azul text-[14px] hover:text-butaohover cursor-pointer duration-150">Sobre</p>
          <p className="font-Inter font-medium text-azul text-[14px] hover:text-butaohover cursor-pointer duration-150">Serviços</p>
          <button className="font-Inter font-medium text-white text-[16px] flex justify-center items-center w-[217px] h-[43px] bg-azul hover:bg-butaohover duration-150 rounded-[27px]">Agende sua consulta</button>
        </div>
      </header>

      <section className="flex flex-row justify-between items-center mt-[30px]">
        <div className="w-[512px] h-[522px] ml-[90px] mt-[10px]">
          <p className="text-azulEscuro text-[65px] font-semibold leading-tight mb-[30px]">
            Consulte sua <span className="text-azul">saúde dental</span> agora
          </p>
          <p className="text-[16px] font-normal text-cinza  mb-[30px] leading-tight">
            Oferecemos atendimento personalizado, focado na prevenção, para que você sorria com confiança.
          </p>
          <button className="w-[364px] h-[66px] bg-azul hover:bg-butaohover text-white text-[24px] font-medium rounded-[20px] duration-150 mb-[30px]">
             Agende sua consulta
          </button>

          <div className="w-[515px] h-fit flex flex-row items-center">
            <span className="bg-azul text-[16px] text-white w-[26px] h-[26px] rounded-full flex justify-center items-center mt-[34px] ">
              <FaLocationDot/>
            </span>
            <p className="text-cinza text-[17px] pl-[15px] mt-[35px] ">
              Estamos localizados em <a className="text-azul cursor-pointer"> Vila da Penha - Rio de Janeiro</a>
            </p>
          </div>
        </div>
        <div className="mr-[90px]">
          <Image
            src="/imgs/dri2.png" 
            alt="Descrição da imagem"
            width={615} 
            height={523}  
            className={Styles.sombra}
          />
        </div>
      </section>
    </div>

    <div className="h-[800px] w-full flex flex-row justify-center items-center gap-[200px]">
      <div className="relative w-fit h-[620px]">
        <Image
          src="/imgs/containeradriana.png" 
          alt="Adriana"
          width={390} 
          height={520}
          className="rounded-[45px] shadow-lg "
        />
        <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 rounded-[20px]">
          <div className="flex flex-row justify-center items-center w-[230px] h-[70px] rounded-[20px] bg-white mb-[15px] shadow-lg">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-[10px] text-[30px] text-white bg-azul mr-[15px]">
              <CgProfile/>
            </div>
            <div>
              <p className="font-bold text-azulEscuro text-[17px] h-[22px] ">Dra. Adriana Dias</p>
              <p className="font-medium text-cinza text-[15px]">Cirurgiã-dentista</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-[230px] h-[120px] rounded-[20px] text-azul bg-white text-[15px] shadow-lg">
            <p>
              <span className="text-azulEscuro font-semibold ">Especializações em:</span><br/>
              Ortodontia<br/>
              Prótese dentária<br/>
              <span className="text-[14px]">Procedimentos emergênciais</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-fit h-[620px]">
        <Image
          src="/imgs/containerraquel.png" 
          alt="Raquel"
          width={390} 
          height={520}  
          className="rounded-[45px] shadow-lg "
        />
        <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 rounded-[20px]">
          <div className="flex flex-row justify-center items-center w-[230px] h-[70px] rounded-[20px] bg-white mb-[15px]">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-[10px] text-[30px] text-white bg-azul mr-[15px] shadow-lg">
              <CgProfile/>
            </div>
            <div>
              <p className="font-bold text-azulEscuro text-[17px] h-[22px] ">Dra. Raquel Dias</p>
              <p className="font-medium text-cinza text-[15px]">Cirurgiã-dentista</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-[230px] h-[120px] rounded-[20px] text-azul bg-white text-[15px] shadow-lg">
            <p>
              <span className="text-azulEscuro font-semibold ">Especializações em:</span><br/>
              Saúde pública com ênfase<br/> em família<br/>
              Laserterapia<br/>
            </p>
          </div>
        </div>
      </div>
    </div>

    <section className={Styles.gradiente2}>
      <div className="pl-[90px] pt-[50px]">
        <p className="text-azulEscuro font-semibold text-[40px]">Nossos principais serviços</p>
        <p className="text-cinza text-[18px]">Oferecemos atendimento personalizado, focado na <br/>prevenção, para que você sorria com confiança.</p>
      </div>

      <div className="flex justify-center">
        <div className="h-fit w-[1237px] grid grid-cols-3 mt-[30px] gap-[35px] ">
          <Servicos
            imagem="/imgs/cadeira.png"
            w="118"
            h="118"
            titulo="Limpeza Geral"
            descricao="Remoção de placa bacteriana e tártaro 
            para manter a saúde bucal."
          />

          <Servicos
            imagem="/imgs/dentebrilhando.png"
            w="118"
            h="118"
            titulo="Clareamento Dental"
            descricao="Tratamentos para melhorar a cor dos dentes, tornando-os mais brancos."
          />

          <Servicos
            imagem="/imgs/protese.png"
            w="118"
            h="118"
            titulo="Próteses Dentárias"
            descricao="Substituição de dentes perdidos com próteses fixas ou removíveis."
          />
          
          <Servicos
            imagem="/imgs/canal.png"
            w="118"
            h="118"
            titulo="Tratamento de Canal"
            descricao="Procedimento para tratar infecções na polpa dentária, salvando o dente."
          />

          <Servicos
            imagem="/imgs/agulhinha.png"
            w="125"
            h="125"
            titulo="Restaurações Dentárias"
            descricao="Colocação de obturações para reparar dentes cariados ou danificados."
          /> 

          <Servicos
            imagem="/imgs/aparelho.png"
            w="104"
            h="104"
            titulo="Ortodontia"
            descricao="Correção de dentes desalinhados e problemas de mordida."
          /> 

        </div>
      </div>


    </section>
    </>
  );
}
