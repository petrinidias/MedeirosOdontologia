import Image from "next/image";

export default function Servicos(props) {
    return (
        <div className="h-fit w-fit shadow-lg rounded-[20px]">
            <div className="w-[390px] h-[196px] flex justify-center items-center bg-servicos rounded-t-[20px] ">
                <Image
                    src={props.imagem}
                    width={props.w} 
                    height={props.h}
                />
            </div>
            <div className="w-[390px] h-[170px] flex flex-col bg-white rounded-b-[20px] p-[20px]">
                <p className="text-[24px] font-semibold text-azulEscuro pb-[7px]">{props.titulo}</p>
                <p className="text-[17px] text-cinza pb-[7px]">{props.descricao}</p>
                <p className="text-[16px] text-azul underline font-semibold">Saiba mais</p>
            </div>
        </div>   
    )
  }