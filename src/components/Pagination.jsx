export function Pagination({ meta, changeMeta }) {
  const nextPage = () => {
    if (meta.page < meta.pages) changeMeta(++meta.page);
  };

  const previousPage = () => {
    if (meta.page > 1) changeMeta(--meta.page);
  };
  return (
    <div className="px-2 py-5 flex justify-between items-center border-t border-grey">
      <div>
        Showing page {meta.page} of {meta.pages} pages
      </div>

      <div className="flex gap-x-2">
        <button
          className="py-1 px-3 border border-grey rounded-xl disabled:cursor-not-allowed"
          disabled={meta.page <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          className="py-1 px-3 border border-grey rounded-xl disabled:cursor-not-allowed"
          disabled={meta.page >= meta.pages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
