import { useState } from "react"

export default function AddMovie ({onAddMovie}) {
    const [isFormOpen, setFormOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [info, setInfo] = useState('')

    function createId() {
        if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
        return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }

    function HandleSubmit (e) {
        e.preventDefault();

        onAddMovie({
            id: createId(),
            title,
            genre,
            info
        });

        setTitle("");
        setGenre("");
        setInfo("")
        setFormOpen(false);
    }

    return (
        <div className="">
            <button 
                className="px-4 py-1 bg-red-100 rounded-md text-red-800 hover:bg-red-100 transition-all ease-in duration-200"
                onClick={() => setFormOpen(!isFormOpen)}
            >
                <p>
                    <span className="text-lg mr-2 pt-1">+</span>
                    Add Movie
                </p>
            </button>
            <div>
                {
                    isFormOpen && (
                        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                            <div className="bg-red-100 rounded-md m-12 w-[90%] max-w-md shadow-xl relative">
                                <form className="px-8 py-4" onSubmit={HandleSubmit}>
                                    <span className="grid grid-cols-2 justify-between">
                                        <h1 className="text-2xl text-red-800 mb-2">New Movie</h1>
                                        <button 
                                            onClick={() => setFormOpen(!isFormOpen)}
                                            className="text-sm ml-auto mb-1"
                                        >
                                            ❌
                                        </button>
                                    </span>
                                    <hr />
                                    <div className="my-4 grid gap-4">
                                        <div className="grid grid-rows-2">
                                            <label htmlFor="movie" className="text-red-500 text-lg">Movie Title</label>
                                            <input 
                                                type="text" placeholder="Movie..."
                                                onChange={e => setTitle(e.target.value)} 
                                                required
                                                className="bg-red-50 rounded-md shadow-md p-1 outline-none text-gray-400" 
                                            />
                                        </div>
                                        
                                        <div className="grid grid-rows-2">
                                            <label htmlFor="info" className="text-red-500 text-lg">Information</label>
                                            <input 
                                                type="text" placeholder="Info..."
                                                onChange={e => setInfo(e.target.value)} 
                                                required
                                                className="bg-red-50 rounded-md shadow-md p-1 outline-none text-gray-400" 
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="genre" className="text-red-500 text-lg">Genre</label>
                                            <div className="grid grid-rows-2">
                                                    <select 
                                                        name="genre" id="genre"
                                                        className="w-full bg-red-50 rounded-md custom-select-gray text-gray-400 outline-none appearance-none shadow-md"
                                                        onChange={e => setGenre(e.target.value)} 
                                                        required
                                                    >
                                                        <option>Drama</option>
                                                        <option>Comedy</option>
                                                        <option>Romance</option>
                                                        <option>Action</option>
                                                        <option>Thriller</option>
                                                    </select>
                                            </div>
                                        </div>

                                        <button 
                                            className="bg-red-800 text-red-50 rounded-md shadow-md py-1 hover:bg-red-900 transition ease-in "
                                            type="submit"
                                        >
                                            Add Movie
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}