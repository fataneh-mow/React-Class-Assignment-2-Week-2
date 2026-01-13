import { useState } from "react";

import { TbSquareRounded } from "react-icons/tb";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";



export default function MovieCard ({title, info}) {
    const [watched, setWatched] = useState(false)
    const [deleted, setDeleted] = useState(false)

   function HandleWatchMovie () {
    setWatched(prev => !prev)
   }

   function HandleDelete () {
    setDeleted(!deleted)
   }

    return (
        <div className="bg-red-100 mx-auto w-1/2 py-2 rounded-md shadow-lg flex justify-between">
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
                    <h1 className="text-red-800 text-xl">{title}</h1>
                    <p className="text-red-800 text-md">{info}</p>
                </div>
            </div>
            <div className="mt-3 px-5">
                <button
                    onClick={HandleDelete}
                >
                    <MdOutlineDelete className="text-red-800" size={20} />
                </button>
            </div>
           
        </div>
    )
}