import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineChevronRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <div className="gradiente xl:h-[750px] lg:h-[600px] w-[full] ">
        <div className="flex justify-center">
          {/*<header className="w-[1237px] h-[110px] flex items-center justify-between">
            <Image
              src="/imgs/logo.png" 
              alt="Descrição da imagem"
              width={136} 
              height={32}  
            />
            <div className="flex flex-row items-center gap-[67px] scroll-smooth">
              <p className="font-Inter font-medium text-azulEscuro text-[14px] hover:text-butaohover cursor-pointer duration-150">Home</p>
              <a href="#sobre" className="font-Inter font-medium text-azul text-[14px] hover:text-butaohover cursor-pointer duration-150">Sobre</a>
              <a href="#servicos" className="font-Inter font-medium text-azul text-[14px] hover:text-butaohover cursor-pointer duration-150">Serviços</a>
              <a href="/consulta" className="font-Inter font-medium text-white text-[16px] flex justify-center items-center w-[217px] h-[43px] bg-azul hover:bg-butaohover duration-150 rounded-[27px]">Agende sua consulta</a>
            </div>
          </header>*/}
        </div>
      
        <section className="flex justify-center">
          <div className="flex justify-between xl:w-[1237px] lg:w-[900px] mt-[30px]">
            <div className="xl:w-[512px] xl:h-[522px] lg:w-[381px] lg:h-[386px] mt-[10px] ">
              <p className="text-azulEscuro xl:text-[65px] lg:text-[45px] font-semibold leading-tight mb-[30px] ">
                Consulte sua <span className="text-azul">saúde dental</span> agora
              </p>
              <p className="xl:text-[16px] lg:text-[14px] font-normal text-cinza  mb-[30px] leading-tight">
                Oferecemos atendimento personalizado, focado na prevenção, para que você sorria com confiança.
              </p>
              <a href="/consulta" className="font-Inter font-medium text-white xl:text-[23px] flex justify-center items-center lg:text-[20px] xl:w-[364px] xl:h-[66px] lg:w-[320px] lg:h-[55px] bg-azul hover:bg-butaohover duration-150 rounded-[18px]">Agende sua consulta</a>
              <div className="w-[515px] h-fit flex flex-row items-center">
                <span className="bg-azul text-white xl:text-[16px] lg:text-[12px] xl:w-[26px] xl:h-[26px] lg:w-[20px] lg:h-[20px] rounded-full flex justify-center items-center mt-[34px] ">
                  <FaLocationDot/>
                </span>
                <p className="text-cinza xl:text-[17px] lg:text-[13px] xl:pl-[15px] lg:pl-[10px] mt-[35px] ">
                  Estamos localizados em <a target="_blank" href="https://www.google.com/maps/place/Estrada+Padre+Roser,+42+-+Vila+da+Penha,+Rio+de+Janeiro+-+RJ,+21220-560/@-22.83993,-43.3140047,20z/data=!4m6!3m5!1s0x997b5f3e063f6f:0x8e7996ff02cd80d9!8m2!3d-22.8399578!4d-43.3138464!16s%2Fg%2F11bw43hd4n?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" className="text-azul cursor-pointer"> Vila da Penha - Rio de Janeiro</a>
                </p>
              </div>
            </div>
            <div>
              <img
                src="/imgs/dri2.png" 
                alt="Descrição da imagem" 
                className="sombra xl:w-[615px] xl:h-[523px] lg:w-[455px] lg:h-[379px]"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="h-[750px] flex justify-center items-center " id="sobre">
        <div className="xl:w-[1186px] lg:w-[900px] h-fit flex flex-row items-center justify-between ">
          <div className="relative w-fit xl:h-[520px] lg:h-[490px]">
            <img
              src="/imgs/containeradriana.png" 
              alt="Adriana"
              className="rounded-[45px] shadow-lg xl:w-[309px] xl:h-[425px] lg:w-[240px] lg:h-[330px] "
            />
            <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 rounded-[20px]">
              <div className="flex flex-row justify-center items-center xl:w-[230px] xl:h-[70px] lg:w-[180px] lg:h-[60px] xl:rounded-[20px] lg:rounded-2xl bg-white mb-[15px] shadow-lg">
                <div className="flex justify-center items-center xl:h-[40px] xl:w-[40px] lg:h-[30px] lg:w-[30px] xl:rounded-[10px] xl:text-[30px] lg:text-[24px] lg:rounded-lg text-white bg-azul xl:mr-[15px] lg:mr-[7px]">
                  <CgProfile/>
                </div>
                <div>
                  <p className="font-bold text-azulEscuro xl:text-[17px] xl:h-[22px] lg:h-[18px] lg:text-[14px]">Dra. Adriana Dias</p>
                  <p className="font-medium text-cinza xl:text-[15px] lg:text-[12px]">Cirurgiã-dentista</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center xl:w-[230px] xl:h-[120px] lg:w-[180px] lg:h-[120px] xl:rounded-[20px] lg:rounded-2xl text-azul bg-white text-[15px] shadow-lg">
                <p>
                  <span className="text-azulEscuro font-semibold xl:text-[15px] lg:text-[12px]">Especializações em:</span><span className="xl:text-[15px] lg:text-[13px]"><br/>
                  Ortodontia<br/>
                  Prótese dentária<br/>
                  <span className="xl:text-[14px] lg:text-[11px]">Procedimentos emergênciais</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-fit xl:h-[520px] lg:h-[490px]">
            <img
              src="/imgs/containerraquel.png" 
              alt="Raquel"
              className="rounded-[45px] shadow-lg xl:w-[309px] xl:h-[425px] lg:w-[240px] lg:h-[330px] "
            />
            <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 rounded-[20px]">
              <div className="flex flex-row justify-center items-center xl:w-[230px] xl:h-[70px] lg:w-[180px] lg:h-[60px] xl:rounded-[20px] lg:rounded-2xl bg-white mb-[15px] shadow-lg">
              <div className="flex justify-center items-center xl:h-[40px] xl:w-[40px] lg:h-[30px] lg:w-[30px] xl:rounded-[10px] xl:text-[30px] lg:text-[24px] lg:rounded-lg text-white bg-azul xl:mr-[15px] lg:mr-[7px]">
                  <CgProfile/>
                </div>
                <div>
                  <p className="font-bold text-azulEscuro xl:text-[17px] xl:h-[22px] lg:h-[18px] lg:text-[14px]">Dra. Raquel Dias</p>
                  <p className="font-medium text-cinza xl:text-[15px] lg:text-[12px]">Cirurgiã-dentista</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center xl:w-[230px] xl:h-[120px] lg:w-[180px] lg:h-[120px] xl:rounded-[20px] lg:rounded-2xl text-azul bg-white text-[15px] shadow-lg">
                <p>
                  <span className="text-azulEscuro font-semibold xl:text-[15px] lg:text-[12px]">Especializações em:</span><span className="xl:text-[15px] lg:text-[12px]"><br/>
                  Saúde pública com ênfase<br/> em família<br/>
                  Laserterapia<br/></span>
                </p>
              </div>
            </div>
          </div>

          <div className="ml-6">
            <div className="flex flex-row items-center  mb-[7px]">
              <div className="w-[4px] h-[17px] bg-azul mr-[6px]"></div>
              <p className="font-semibold xl:text-[20px] lg:text-[16px] text-azulEscuro">SOBRE NÓS</p>
            </div>
            <p className="xl:text-[36px] lg:text-[30px] font-semibold text-azulEscuro xl:leading-[45px] lg:leading-[35px]">Somos Especialistas<br/> em <span className="text-azul">Prótese Dentária</span>.</p>
            <p className="xl:w-[370px] lg:w-[340px] text-cinza xl:text-[18px] lg:text-[16px] mt-4">
              Oferecemos <span className="font-medium">soluções personalizadas</span> para recuperar a estética e a funcionalidade do seu sorriso. 
              Com <span className="font-medium">técnicas modernas</span> e materiais de <span className="font-medium">alta qualidade</span>, garantimos resultados <span className="font-medium">naturais</span> e <span className="font-medium">duradouros</span>.
            </p>
            <div className="mt-[20px]">
              <div className="flex flex-row xl:text-[20px] lg:text-[18px] font-medium text-azulEscuro mb-3"><MdOutlineChevronRight className="xl:text-[30px] lg:text-[25px] text-azul"/><p>Sorrisos Naturais e Duradouros</p></div>
              <div className="flex flex-row xl:text-[20px] lg:text-[18px] font-medium text-azulEscuro mb-3"><MdOutlineChevronRight className="xl:text-[30px] lg:text-[25px] text-azul"/><p>Técnicas Modernas em Prótese</p></div>
              <div className="flex flex-row xl:text-[20px] lg:text-[18px] font-medium text-azulEscuro mb-3"><MdOutlineChevronRight className="xl:text-[30px] lg:text-[25px] text-azul"/><p>Material de Alta Qualidade</p></div>
            </div>
            <a href="/consulta" className="font-Inter font-medium text-white xl:text-[23px] lg:text-[21px] flex justify-center items-center xl:w-[364px] xl:h-[66px] lg:w-[340px] lg:h-[56px] bg-azul hover:bg-butaohover duration-150 rounded-[18px] mt-[25px]">Agende sua consulta</a>        </div>
        </div>
      </div>

      <section className={Styles.gradiente2} id="servicos">
        <div className="flex justify-center">
          <div className="w-[1237px] h-fit mb-[40px]">
            <p className="text-azulEscuro font-semibold text-[40px]">Nossos principais serviços</p>
            <p className="text-cinza text-[18px]">Oferecemos atendimento personalizado, focado na <br/>prevenção, para que você sorria com confiança.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-fit w-[1237px] grid grid-cols-3 mt-[30px] gap-[35px] ">
            <div className="h-fit w-fit shadow-lg rounded-[20px]">
              <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                  src="/imgs/cadeira.png"
                  width="118" 
                  height="118"
                  alt="a"
                />
              </div>
              <div className="w-[390px] h-[170px] p-[20px] flex flex-col bg-white rounded-b-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">Limpeza Geral</p>
                <p className="text-[17px] text-cinza pb-[7px]">Remoção de placa bacteriana e tártaro 
                para manter a saúde bucal.</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
              </div>
            </div>
              
            <div className="h-fit w-fit shadow-lg rounded-[20px]">
              <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                  src="/imgs/dentebrilhando.png"
                  width="118" 
                  height="118"
                  alt="a"
                />
              </div>
              <div className="w-[390px] h-[170px] p-[20px] flex flex-col bg-white rounded-b-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">Clareamento Dental</p>
                <p className="text-[17px] text-cinza pb-[7px]">Tratamentos para melhorar a cor dos dentes, tornando-os mais brancos.</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
              </div>
            </div>
              
            <div className="h-fit w-fit shadow-lg rounded-[20px]">
              <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                  src="/imgs/protese.png"
                  width="118" 
                  height="118"
                  alt="a"
                />
              </div>
              <div className="w-[390px] h-[170px] p-[20px] flex flex-col bg-white rounded-b-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">Prótese Dentária</p>
                <p className="text-[17px] text-cinza pb-[7px]">Substituição de dentes perdidos com próteses fixas ou removíveis.</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
              </div>
            </div>
              
            <div className="h-fit w-fit shadow-lg rounded-[20px]">
              <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                  src="/imgs/canal.png"
                  width="118" 
                  height="118"
                  alt="a"
                />
              </div>
              <div className="w-[390px] h-[170px] p-[20px] flex flex-col bg-white rounded-b-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">Tratamento de Canal</p>
                <p className="text-[17px] text-cinza pb-[7px]">Procedimento para tratar infecções na polpa dentária, salvando o dente.</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
              </div>
            </div>
              
            <div className="h-fit w-fit shadow-lg rounded-[20px]">
              <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                  src="/imgs/aparelho.png"
                  width="118" 
                  height="118"
                  alt="a"
                />
              </div>
              <div className="w-[390px] h-[170px] p-[20px] flex flex-col bg-white rounded-b-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">Ortodontia</p>
                <p className="text-[17px] text-cinza pb-[7px]">Correção de dentes desalinhados e problemas de mordida.</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
              </div>
            </div>
              
            <div className="h-fit w-fit shadow-lg rounded-[20px]">
              <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                  src="/imgs/agulhinha.png"
                  width="118" 
                  height="118"
                  alt="a"
                />
              </div>
              <div className="w-[390px] h-[170px] p-[20px] flex flex-col bg-white rounded-b-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">Restaurações Dentárias</p>
                <p className="text-[17px] text-cinza pb-[7px]">Colocação de obturações para reparar dentes cariados ou danificados.</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[600px] w-full flex justify-center items-center">
        <div className="relative w-[1060px] h-[385px] bg-azul rounded-[25px] flex justify-center p-[30px] text-[20px] flex-col">
          <div>
            <img src="imgs/laser.png" className="w-[340px] absolute right-0 top-1/2 transform -translate-y-[260px] rounded-br-[25px]"/>
          </div>
          <p className="text-[34px] font-semibold text-white mb-[20px]">Laserterapia</p>
          <p className="w-[620px] text-white text-[18px] font-light mb-[30px]">
          A <span className="font-semibold">Dra. Raquel Dias</span> oferece tratamentos com laserterapia que <span className="font-semibold">aliviam a dor</span> e <span className="font-semibold">aceleram a cicatrização</span>. A tecnologia trata <span className="font-semibold">inflamações</span> e <span className="font-semibold">sensibilidade</span> de forma precisa e confortável, trazendo <span className="font-semibold">alívio imediato</span>. Você sofre com dores bucais? Agende uma consulta e experimente um tratamento eficaz que vai transformar seu sorriso e bem-estar.
          </p>
          <a href="/consulta" className="h-[60px] w-[300px] bg-white flex items-center justify-center text-azul font-semibold text-[23px] rounded-[17px] hover:bg-slate-100 duration-300">Tenho interesse!</a>
        </div>
      </section>
      <section className="h-[300px] w-full flex  items-center flex-col">
        <p className="mb-[70px] text-[25px] text-azulEscuro font-semibold">Usamos as melhores marcas!</p>
        <div className="flex flex-row items-center gap-[57px]">
          <img src="/imgs/colgatelogo.png" className="w-[170px] h-[35px]"/>
          <img src="/imgs/sensodynelogo.png" className="w-[170px] h-[40px]"/>
          <img src="/imgs/dmclogo.png" className="w-[170px] h-[55px]"/>
          <img src="/imgs/listerine.png" className="w-[172px] h-[32px]"/>
          <img src="/imgs/fgmlogo.png" className="w-[170px] h-[55px]"/>
        </div>
      </section>

      <footer className="h-[400px] w-full bg-azulEscuro">

      </footer>
    </>
  );
}

