'use client';

import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useState } from 'react';

export default function Consulta() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [servico, setServico] = useState("")
    const [data, setData] = useState("")
    const [hora, setHora] = useState("")

    let mes = data.substring(5,7)
    let dia = data.substring(8,10)

    let dataformatada = dia + "/" + mes

    console.log(mes + " " + dia)

    const isFormComplete = nome && sobrenome && servico && data && hora;

    let link = "https://wa.me/5521964144071?text=Olá,%20meu%20nome%20é%20" + nome.trim() + "%20" + sobrenome.trim() +",%20gostaria%20de%20agendar%20um%20serviço%20de%20" + servico + "%20para%20o%20dia%20" + dataformatada + "%20às%20" + hora + ",%20teriam%20disponibilidade?"

    return (
      <>
        <div className="bg-azul h-screen w-full flex justify-center items-center">
            <div className="w-[775px] h-[527px] bg-white rounded-[30px] p-[40px]">

                <div className="flex justify-between">
                    <input type="text" placeholder="Nome" maxLength="10" onChange={(e) => setNome(e.target.value)} className="bg-input w-[340px] h-[63px] rounded-[20px] p-7 focus:outline-none focus:border-none"></input>
                    <input type="text" placeholder="Sobrenome" maxLength="10" onChange={(e) => setSobrenome(e.target.value)} className="bg-input w-[320px] h-[63px] rounded-[20px] p-7 focus:outline-none focus:border-none"></input>
                </div>
                
                <div className="flex flex-col">
                    <div className="w-[695px] h-[63px] bg-input rounded-[20px] flex justify-center items-center mt-[25px]">
                        <select id="servicos" name="servicos" onChange={(e) => setServico(e.target.value)} className="bg-input w-[650px] h-[63px] rounded-[20px]  focus:outline-none focus:border-none">
                            <option selected disabled>Selecione um serviço</option>
                            <option value="Laserterapia">Laserterapia</option>
                            <option value="Limpeza geral">Limpeza Geral</option>
                            <option value="Clareamento dental">Clareamento Dental</option>
                            <option value="Prótese dentária">Prótese Dentária</option>
                            <option value="Tratamento de canal">Tratamento de Canal</option>
                            <option value="Ortodontia">Ortodontia</option>
                            <option value="Restaurações dentárias">Restaurações Dentárias</option>
                        </select>
                    </div>
                    <input type="date" id="date" name="date" min="2024-01-01" max="2024-12-31" onChange={(e) => setData(e.target.value)} className="bg-input w-[695px] h-[63px] rounded-[20px] p-7 mt-[25px] text-cinza focus:outline-none focus:border-none"></input>
                    <div className="w-[695px] h-[63px] bg-input rounded-[20px] flex justify-center items-center mt-[25px]">
                        <select id="horario" name="horario" onChange={(e) => setHora(e.target.value)} className="bg-input w-[650px] h-[63px] rounded-[20px] text-cinza focus:outline-none focus:border-none">
                            <option selected disabled>Selecione um horário</option>
                            <option value="08:00h">08:00h</option>
                            <option value="09:00h">09:00h</option>
                            <option value="10:00h">10:00h</option>
                            <option value="11:00h">11:00h</option>
                            <option value="13:00h">13:00h</option>
                            <option value="14:00h">14:00h</option>
                            <option value="15:00h">15:00h</option>
                            <option value="16:00h">16:00h</option>
                            <option value="17:00h">17:00h</option>
                        </select>
                    </div>
                </div>

                {isFormComplete ? (
                    <a
                        href={link}
                        target="_blank"
                        className="bg-azul flex justify-center items-center text-[40px] w-[695px] h-[63px] rounded-[20px] p-7 mt-[25px] text-white hover:bg-butaohover cursor-pointer duration-150"
                    >
                        <GoArrowRight />
                    </a>
                ) : (
                    <div className="bg-gray-400 flex justify-center items-center text-[40px] w-[695px] h-[63px] rounded-[20px] p-7 mt-[25px] text-white cursor-not-allowed">
                        <GoArrowRight />
                    </div>
                )}

                <a href="/" className="flex flex-row items-center mt-[25px]">
                    <GoArrowLeft className="text-[22px] text-azulEscuro mr-[3px] "/>
                    <p className="text-[17px] font-medium text-azulEscuro ">Voltar</p>
                </a>
            </div>
        </div>
      </>
      )}