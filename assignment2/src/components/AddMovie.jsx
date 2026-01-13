import { useState } from "react"

export default function AddMovie () {
    const [isFormOpen, setFormOpen] = useState(false)

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
                    !isFormOpen &&
                    <div className="flex justify-center mx-auto w-1/2  ">
                        <div className="bg-red-100 rounded-md m-12">
                            <form className="px-8 py-4">
                                <h1 className="text-2xl text-red-800 mb-2">New Movie</h1>
                                <hr />
                                <div className="my-4 grid gap-4">
                                    <div>
                                        <label htmlFor="movie" className="text-red-500 text-lg">Movie Title</label>
                                        <input type="text" placeholder="Movie..." 
                                            className="bg-red-50 rounded-md shadow-md p-1 outline-none text-gray-400" 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="genre" className="text-red-500 text-lg">Genre</label>
                                        <div className="grid grid-rows-2">
                                                <select name="genre" id="genre"
                                                    className="bg-red-50 rounded-md custom-select-gray text-gray-400 outline-none appearance-none shadow-md"
                                                >
                                                    <option value="daram">Daram</option>
                                                    <option value="comedy">Comedy</option>
                                                    <option value="romance">Romance</option>
                                                    <option value="frightening">Frightening</option>
                                                    <option value="daram">Daram</option>
                                                    <option value="daram">Daram</option>

                                                </select>
                                        </div>
                                    </div>

                                    <button 
                                        className="bg-red-800 text-red-50 rounded-md shadow-md py-1 hover:bg-red-900 transition ease-in "
                                    >
                                        Save
                                    </button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}