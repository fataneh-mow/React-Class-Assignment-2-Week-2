import { TbSquareRounded } from "react-icons/tb";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";

export default function MovieCard ({id, title, info, genre ,watched ,onDelete, onWatch}) {
    function HandleWatchMovie () {
        if (!watched) onWatch(id);
    }

    return (
        <div className="bg-red-100 mx-auto w-1/2 py-4 rounded-md shadow-lg flex justify-between">
            <div className="flex items-center px-6">
                <button
                    onClick={HandleWatchMovie}
                >
                    {
                        watched ? (
                            <TbSquareRoundedCheckFilled className="text-red-800" size={24}/>
                        ) : (
                            <TbSquareRounded className="text-red-800" size={24}/>
                        )
                    }
                </button>
                <div className="px-4">
                    <h1 className="text-red-800 text-xl">{title || "No title"}</h1>
                    <div>
                        <span className="flex justify-between gap-4">
                            <p className="text-red-800 text-md">{info || "No information"}</p>
                            <span className="bg-red-200 text-red-800 px-4 rounded-lg">
                                {genre || "No genre"}
                            </span>
                            <span className="bg-red-200 text-red-800 px-4 rounded-lg">
                                {watched ? "Watched" : "Unwatched"}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-3 px-5">
                <button
                    onClick={() => onDelete(id)}
                >
                    <MdOutlineDelete className="text-red-800" size={20} />
                </button>
            </div>
        </div>
    )
}