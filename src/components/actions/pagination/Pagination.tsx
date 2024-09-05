interface IPagination {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onChange }: IPagination) {
  const getPageNumbers = () => {
    const pages = []
    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages)
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <div className="join">
      <button
        className="btn join-item text-base"
        onClick={() => onChange(1)}
        disabled={isFirstPage}>
        &lt;&lt;
      </button>
      <button
        className="btn join-item text-base"
        onClick={() => onChange(currentPage - 1)}
        disabled={isFirstPage}>
        &lt;
      </button>
      {getPageNumbers().map((page) => {
        return (
          <button
            key={page}
            className={`join-item btn text-base ${page === currentPage ? 'btn-active' : ''}`}
            onClick={() => onChange(page)}>
            {page}
          </button>
        )
      })}
      <button
        className="btn join-item text-base"
        onClick={() => onChange(currentPage + 1)}
        disabled={isLastPage}>
        &gt;
      </button>
      <button
        className="btn join-item text-base"
        onClick={() => onChange(totalPages)}
        disabled={isLastPage}>
        &gt;&gt;
      </button>
    </div>
  )
}
