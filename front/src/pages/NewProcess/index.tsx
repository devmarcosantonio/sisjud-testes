import { useState } from "react";
import { Pagination } from "../../components/ui/Pagination";
import EditableTable from "../../components/ui/EditableTable";
import ModalNewProcess from "./ModalNewProcess";


const allData = [
    { codPasta: '12345', parteContraria: 'Parte A', numProcesso: '12345/2023', dataAtivacao: '01/01/2023', subGrupoAbertura: 'Grupo A', status: 'Ativo' },
    { codPasta: '12346', parteContraria: 'Parte B', numProcesso: '12346/2023', dataAtivacao: '02/01/2023', subGrupoAbertura: 'Grupo B', status: 'Inativo' },
    { codPasta: '12347', parteContraria: 'Parte C', numProcesso: '12347/2023', dataAtivacao: '03/01/2023', subGrupoAbertura: 'Grupo C', status: 'Ativo' },
    { codPasta: '12348', parteContraria: 'Parte D', numProcesso: '12348/2023', dataAtivacao: '04/01/2023', subGrupoAbertura: 'Grupo D', status: 'Inativo' },
    { codPasta: '12349', parteContraria: 'Parte E', numProcesso: '12349/2023', dataAtivacao: '05/01/2023', subGrupoAbertura: 'Grupo E', status: 'Ativo' },
    { codPasta: '12350', parteContraria: 'Parte F', numProcesso: '12350/2023', dataAtivacao: '06/01/2023', subGrupoAbertura: 'Grupo F', status: 'Inativo' },
    { codPasta: '12351', parteContraria: 'Parte G', numProcesso: '12351/2023', dataAtivacao: '07/01/2023', subGrupoAbertura: 'Grupo G', status: 'Ativo' },
    { codPasta: '12352', parteContraria: 'Parte H', numProcesso: '12352/2023', dataAtivacao: '08/01/2023', subGrupoAbertura: 'Grupo H', status: 'Inativo' },
    { codPasta: '12353', parteContraria: 'Parte I', numProcesso: '12353/2023', dataAtivacao: '09/01/2023', subGrupoAbertura: 'Grupo I', status: 'Ativo' },
]

const NewProcess: React.FC = () => {

  const [search, setSearch] = useState<string>(''); // Estado para o campo de pesquisa
  const [page, setPage] = useState<number>(1); // Estado para a página atual
    const pageSize = 8; // Número de itens por página
  
    // Filtrar os dados com base no valor do campo de pesquisa
    const filteredData = allData.filter(item =>
      item.parteContraria.toLowerCase().includes(search.toLowerCase())
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
    <div className="p-4 mt-6 w-full flex flex-col gap-10 justify-space-between ">
         {/* Modal de carregamento de arquivo */}
         {isModalOpen && <ModalNewProcess handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal}/> }
        
        <section className="flex justify-between items-center w-full h-30 bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-row gap-10">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Selecione a Empresa
                    </label>
                    <select
                        id="company"
                        name="company"
                        className="mt-1 h-10 block rounded-md border-gray-400 border w-80 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Selecione</option>
                        <option value="empresa1">Empresa 1</option>
                        <option value="empresa2">Empresa 2</option>
                        <option value="empresa3">Empresa 3</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                        Selecione o Ano
                    </label>
                    <select
                        id="year"
                        name="year"
                        className="mt-1 h-10 block w-80 rounded-md border-gray-400 border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Selecione</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                        Selecione o Mês
                    </label>
                    <select
                        id="month"
                        name="month"
                        className="mt-1 h-10 block w-80 rounded-md border-gray-400 border focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Selecione</option>
                        <option value="january">Janeiro</option>
                        <option value="february">Fevereiro</option>
                        <option value="march">Março</option>
                        <option value="april">Abril</option>
                        <option value="may">Maio</option>
                        <option value="june">Junho</option>
                        <option value="july">Julho</option>
                        <option value="august">Agosto</option>
                        <option value="september">Setembro</option>
                        <option value="october">Outubro</option>
                        <option value="november">Novembro</option>
                        <option value="december">Dezembro</option>
                    </select>
                </div>
            </div>
            <button className='bg-transparent border-blue-800 border font-medium duration-100 text-blue-800 rounded-lg h-10 px-10 hover:bg-blue-800 hover:text-white'>Filtrar</button>
        </section>

        <section className="flex flex-col w-full bg-white p-4 rounded-lg shadow-lg">
            
            <div className="flex flex-row w-full justify-between items-center">
                <h1 className="text-2xl font-medium text-blue-950">Adicionar novo Processo</h1>
                <button onClick={handleOpenModal} className='bg-transparent border-blue-800 border font-medium duration-100 text-blue-800 rounded-lg h-10 px-10 hover:bg-blue-800 hover:text-white'>+ Novo Processo</button>
            </div>

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

            {/* Tabela de dados */}
      <div>
        <EditableTable
          data={currentData}
          columns={[
            { accessorKey: 'codPasta', header: 'Cod. Pasta', cell: info => info.getValue() },
            { accessorKey: 'parteContraria', header: 'Parte Contrária', cell: info => info.getValue() },
            { accessorKey: 'numProcesso', header: 'Num. Processo', cell: info => info.getValue() },
            { accessorKey: 'dataAtivacao', header: 'Data Ativação', cell: info => info.getValue() },
            { accessorKey: 'subGrupoAbertura', header: 'Sub Grupo Abertura', cell: info => info.getValue() },
            { accessorKey: 'status', header: 'Status', cell: info => info.getValue() },
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



        




        </section>
      


    </div>
  );
};

export default NewProcess;