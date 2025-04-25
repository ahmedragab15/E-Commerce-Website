interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center items-center my-10 gap-1 flex-wrap">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="py-2 px-3 border border-neutral-300 text-sm rounded disabled:opacity-40">
        Prev
      </button>

      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={`py-2 px-4 border text-sm rounded ${page === currentPage ? "bg-orange-400 text-white border-orange-400" : "text-neutral-600 hover:bg-neutral-100 border-neutral-300"}`}>
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="py-2 px-3 border border-neutral-300 text-sm rounded disabled:opacity-40">
        Next
      </button>
    </div>
  );
};

export default Pagination;
