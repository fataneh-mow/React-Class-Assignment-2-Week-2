export default function FilterMovies () {
    return (
        <div className="">
            <form className="bg-red-100 rounded-md py-[0.1rem]">
                <select name="filter" defaultValue="All" 
                    className="bg-red-100 rounded-md custom-select outline-none appearance-none"
                >
                    <option value="All">All</option>
                    <option value="watched">Watched</option>
                    <option value="unwatched">Unwatched</option>
                </select>
            </form>
        </div>
    )
}