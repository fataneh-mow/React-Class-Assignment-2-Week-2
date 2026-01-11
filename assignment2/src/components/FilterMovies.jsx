export default function FilterMovies () {
    return (
        <div className="w-1/2 mx-auto">
            <form className="">
                <select name="filter" defaultValue="All" 
                    className="bg-red-100 px-3 rounded-md custom-select outline-none appearance-none"
                >
                    <option value="All">All</option>
                    <option value="watched">Watched</option>
                    <option value="unwatched">Unwatched</option>
                </select>
            </form>
        </div>
    )
}