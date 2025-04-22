export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 bg-white p-4 rounded-lg shadow-md h-1/2"> 
      <h1 className="text-4xl font-bold text-gray-800">Ops, página não encontrada.</h1>
      <p className="mt-4 text-lg text-gray-600">Desculpe, a página que você está tentando acessar não existe ou em manuntenção.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Voltar para página inicial</a>
    </div>
  )
}
