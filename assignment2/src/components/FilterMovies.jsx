export default function FilterMovies ({filter, setFilter}) {
    return (
        <div>
            <form className="bg-red-100 rounded-md py-[0.1rem]">
                <select 
                    name="filter" 
                    value={filter} 
                    className="bg-red-100 rounded-md custom-select outline-none appearance-none"
                    onChange={(e) => {setFilter(e.target.value)}}
                >
                    <option value="All">All</option>
                    <option value="watched">Watched</option>
                    <option value="unwatched">Unwatched</option>
                </select>
            </form>
        </div>
    )
}