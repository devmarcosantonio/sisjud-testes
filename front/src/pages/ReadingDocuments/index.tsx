import React, { useState } from 'react';
import EditableTable from '../../components/ui/EditableTable';
import { allData } from './allDate';
import { Pagination } from '../../components/ui/Pagination';
import ModalReading from './ModalReading';

const ReadingDocuments: React.FC = () => {
  const [search, setSearch] = useState<string>(''); // Estado para o campo de pesquisa
  const [page, setPage] = useState<number>(1); // Estado para a página atual
  const pageSize = 8; // Número de itens por página

  // Filtrar os dados com base no valor do campo de pesquisa
  const filteredData = allData.filter(item =>
    item.nomeCliente.toLowerCase().includes(search.toLowerCase())
  );

  // Calcular os dados para a página atual
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const currentData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  // Função para lidar com a mudança de página
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className=" p-4 rounded-lg shadow-md w-full h-200 bg-white mt-6 flex flex-col ">

      {isModalOpen ? <ModalReading handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/> : null}
      
      <h1 className="text-2xl font-medium text-blue-950">Leitura de Documentos</h1>

      {/* Campo de pesquisa */}

      <div className='flex justify-between items-center'>
        <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // Resetar para a primeira página ao pesquisar
            }}
            className="border border-gray-300 rounded-md max-w-80 p-2 mt-5 "
        />

        <button className='bg-transparent border-blue-800 border font-medium duration-100 text-blue-800 rounded-lg h-10 px-10 hover:bg-blue-800 hover:text-white' onClick={handleOpenModal}>Ler Documento</button>

      </div>
      

      {/* Tabela de dados */}
      <div>
        <EditableTable
          data={currentData}
          columns={[
            { accessorKey: 'nomeCliente', header: 'Nome do cliente', cell: info => info.getValue() },
            { accessorKey: 'numeroProcesso', header: 'N Processo', cell: info => info.getValue() },
            { accessorKey: 'empresa', header: 'Empresa', cell: info => info.getValue() },
            { accessorKey: 'valorSentenca', header: 'Valor da Sentença', cell: info => info.getValue() },
            { accessorKey: 'uc', header: 'UC', cell: info => info.getValue() },
          ]}
        />
      </div>

      {/* Paginação */}
      <div className="flex justify-end mt-4">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      
    </div>
  );
};

export default ReadingDocuments;