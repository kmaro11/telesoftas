export function Pagination() {
    return (
        <>
            <div className="px-2 py-5 flex justify-between items-center border-t border-grey">
                <div>
                    Showing page 1 of 20 pages
                </div>

                <div className="flex gap-x-2">
                    <button className="py-1 px-3 border border-grey rounded-xl">Previous</button>
                    <button className="py-1 px-3 border border-grey rounded-xl">Next</button>
                </div>
            </div>
        </>
    )
}