

import React from "react";

import { useForm } from 'react-hook-form';

type ModalReadingProps = {
    handleOpenModal: () => void;
    handleCloseModal: () => void;
};

const ModalNewProcess = ({ handleCloseModal }: ModalReadingProps) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false); // Estado para o carregamento
    


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Arquivo selecionado:', file.name);
            setSelectedFile(file); // Armazena o arquivo selecionado no estado
        }
    };
  

    const handleFileUpload = async () => {
        if (!selectedFile) {
            console.error('Nenhum arquivo selecionado!');
            return;
        }
        
        setIsLoading(true); // Ativa o estado de carregamento

        // Criar um objeto FormData
        const formData = new FormData();
        formData.append('file', selectedFile); // Adicionar o arquivo ao FormData

        try {
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Arquivo enviado com sucesso!", responseData);

                // Preencher o formulário com os valores retornados
                Object.keys(responseData).forEach((key) => {
                                    if (responseData[key] !== undefined) {
                                        setValue(key as keyof FormData, responseData[key]);
                                    }
                                });
            } else {
                console.error("Erro ao enviar o arquivo:", response.statusText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const { register, handleSubmit, setValue } = useForm<FormData>();

    interface FormData {
        codigoPasta: string;
        numeroProcesso: string;
        parteContraria: string;
        dataAtivacao: string;
        dataCitacao: string;
        dataOcorrencia: string;
        areaJuridica: string;
        centroCusto: string;
        valorCausa: number;
        valorEstimado: number;
        advogadoPrincipal: string;
        orgao: string;
        escritorio: string;
        status: string;
        dataEncerramento: string;
        modoEncerramento: string;
        municipio: string;
        cidade: string;
        uf: string;
        regional: string;
        advogadoContrario: string;
        ufContrario: string;
        cpfContrato: string;
        cnpjContrato: string;
        equipe: string;
        concluido: boolean;
    }

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div
            className="bg-[#5c5c5cb7] w-full h-screen absolute top-0 left-0 flex items-center justify-center"
            onClick={handleCloseModal}
        >
            <section
                className="bg-white rounded-lg shadow-lg flex flex-col items-start p-5 justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <h1 className="text-lg font-bold mb-4">Dados do Processo</h1>
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="border border-gray-300 rounded-l-[20px] rounded-r-[0px]  px-4 py-2"
                    />
                    <button
                        onClick={handleFileUpload}
                        className=" bg-blue-600 text-white  px-4 py-2 rounded-l-[0px] rounded-r-[20px] hover:bg-gray-600"
                        disabled={isLoading} // Desativa o botão enquanto carrega
                    >
                        {isLoading ? 'Lendo...' : 'Leitura Automática'}
                </button>

                </div>
                

                <form onSubmit={handleSubmit(onSubmit)} className="p-4 mx-auto space-y-4">
                    <div className="grid grid-cols-5 gap-4 w-full overflow-hidden">
                        <label className="flex flex-col">
                            Código / Pasta
                            <input id="codigoPasta" {...register("codigoPasta")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Nº do Processo
                            <input id="numeroProcesso" {...register("numeroProcesso")} className="border p-2" />
                        </label>

                        <label className="flex flex-col col-span-2">
                            Parte Contrária
                            <input id="parteContraria" {...register("parteContraria")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Data de Ativação
                            <input id="dataAtivacao" type="date" {...register("dataAtivacao")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Data de Citação
                            <input id="dataCitacao" type="date" {...register("dataCitacao")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Data de Ocorrência
                            <input id="dataOcorrencia" type="date" {...register("dataOcorrencia")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Área Jurídica
                            <input id="areaJuridica" {...register("areaJuridica")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Centro de Custo
                            <input id="centroCusto" {...register("centroCusto")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Valor da Causa
                            <input id="valorCausa" type="number" {...register("valorCausa")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Valor Estimado
                            <input id="valorEstimado" type="number" {...register("valorEstimado")} className="border p-2" />
                        </label>

                        <label className="flex flex-col col-span-2">
                            Advogado Principal
                            <input id="advogadoPrincipal" {...register("advogadoPrincipal")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Órgão
                            <input id="orgao" {...register("orgao")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Escritório
                            <input id="escritorio" {...register("escritorio")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Status
                            <input id="status" {...register("status")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Data de Encerramento
                            <input id="dataEncerramento" type="date" {...register("dataEncerramento")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Modo de Encerramento
                            <input id="modoEncerramento" {...register("modoEncerramento")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Município
                            <input id="municipio" {...register("municipio")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Cidade
                            <input id="cidade" {...register("cidade")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            UF
                            <select id="uf" {...register("uf")} className="border p-2">
                                <option value="">UF</option>
                                <option value="SP">SP</option>
                                <option value="RJ">RJ</option>
                                {/* Adicione os demais estados */}
                            </select>
                        </label>

                        <label className="flex flex-col">
                            Regional
                            <input id="regional" {...register("regional")} className="border p-2" />
                        </label>

                        <label className="flex flex-col col-span-2">
                            Advogado Contrário
                            <input id="advogadoContrario" {...register("advogadoContrario")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            UF Contrário
                            <select id="ufContrario" {...register("ufContrario")} className="border p-2">
                                <option value="">UF Contrário</option>
                                <option value="SP">SP</option>
                                <option value="RJ">RJ</option>
                            </select>
                        </label>

                        <label className="flex flex-col">
                            CPF Contrato
                            <input id="cpfContrato" {...register("cpfContrato")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            CNPJ Contrato
                            <input id="cnpjContrato" {...register("cnpjContrato")} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Equipe
                            <input id="equipe" {...register("equipe")} className="border p-2" />
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="flex items-center gap-2">
                            <span>Marcar Processo como concluído no sistema?</span>
                            <input type="checkbox" {...register("concluido")} id="concluido" />
                        </label>
                    </div>

                    <p className="text-orange-500 text-sm">
                        Ao marcar essa opção como "Sim", você enviará este processo para validação. Caso o cadastro esteja incompleto, marque para concluí-lo posteriormente.
                    </p>

                    <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white px-19 py-2 rounded">Salvar</button>
                </form>

                {/* <button
                    onClick={handleCloseModal}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    disabled={isLoading} // Desativa o botão enquanto carrega
                >
                    Fechar
                </button> */}
            </section>
        </div>
    );
};

export default ModalNewProcess;