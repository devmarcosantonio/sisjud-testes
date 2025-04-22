

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="flex items-center justify-center mt-4 gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-200 disabled:opacity-50"
        >
          ‹
        </button>
        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm 
              ${currentPage === page ? 'bg-indigo-500 text-white' : 'border text-gray-600 hover:bg-gray-100'}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-200 disabled:opacity-50"
        >
          ›
        </button>
      </div>
    );
  };
  