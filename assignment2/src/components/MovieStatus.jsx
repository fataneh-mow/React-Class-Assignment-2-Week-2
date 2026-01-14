import { RiMovie2Fill } from "react-icons/ri";
import { CiNoWaitingSign } from "react-icons/ci";
import { BiSolidMoviePlay } from "react-icons/bi";


export default function MovieStatus ({watchedCount, unwathcedCount, totalCount}) {
    return (
        <div className="bg-red-100 w-1/2 text-red-800 mx-auto rounded-md shadow-lg p-4">
            <h1 className="text-center text-2xl font-bold my-2 mb-4">Latest Updates</h1>
            <div className="grid grid-cols-3 gap-3 justify-center">
                <div className="bg-red-200 rounded-md p-4">
                    <h2 className="text-xl font-semibold justify-center flex items-center">
                        <RiMovie2Fill size={20} className="mr-1 mb-[0.1rem]" />
                        Watched
                    </h2>
                    <p className="text-center mt-3">{watchedCount} Movies</p>
                </div>
                <div className="bg-red-50 rounded-md p-4">
                    <h2 className="text-xl font-semibold justify-center flex items-center">
                        <CiNoWaitingSign size={20} className="mr-1 mb-[0.1rem]" />
                        Unwatched
                    </h2>
                    <p className="text-center mt-3">{unwathcedCount} Movies</p>
                </div>
                <div className="bg-red-200 rounded-md p-4">
                    <h2 className="text-xl font-semibold justify-center flex items-center">
                        <BiSolidMoviePlay size={20} className="mr-1 mb-[0.1rem]" />
                        Total Movies
                    </h2>
                    <p className="text-center mt-3">{totalCount} Movies</p>
                </div>    
            </div>
        </div>
    )
}