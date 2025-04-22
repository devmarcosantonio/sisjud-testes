import React from "react";

import { DocumentData } from "./DocumentData";

type ModalReadingProps = {
    handleOpenModal: () => void;
    handleCloseModal: () => void;
};

const ModalReading = ({ handleCloseModal }: ModalReadingProps) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false); // Estado para o carregamento
    const [data, setData] = React.useState<DocumentData |null>(null); // Estado para armazenar os dados lidos do arquivo   
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
            // Fazer a requisição HTTP
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Arquivo enviado com sucesso!');
                setData(await response.json()); // Armazena os dados recebidos no estado
            } else {
           
                console.error('Erro ao enviar o arquivo:', response.statusText);
            }
        } catch (error) {
        
            console.error('Erro na requisição:', error);
        } finally {
            setIsLoading(false); // Desativa o estado de carregamento
        }
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
                <h1 className="text-lg font-bold mb-4">Carregar Arquivo</h1>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="border border-gray-300 rounded-md p-2"
                />
                <button
                    onClick={handleFileUpload}
                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    disabled={isLoading} // Desativa o botão enquanto carrega
                >
                    {isLoading ? 'Carregando...' : 'Ler'}
                </button>


                {data && 
                    <div className="mt-4 p-2 border border-gray-300 rounded-md  text-start">
                        <span className="font-bold">Informações lidas</span>
                        <p>Número do processo: {data.codeFolder}</p>
                        <p>Nome do cliente: {data.opposingParty}</p>
                        <p>Número do processo: {data.processNumber}</p>
                        <p>Empresa: {data.office}</p>
                        <p>Valor da sentença: {data.caseValue}</p>
                        <span className="flex w-full justify-end gap-4">
                            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Salvar</button>
                            <button onClick={() => setData(null)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancelar</button>
                        </span>
                       
                    </div>
  
                }
                
                <button
                    onClick={handleCloseModal}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    disabled={isLoading} // Desativa o botão enquanto carrega
                >
                    Fechar
                </button>
            </section>
        </div>
    );
};

export default ModalReading;