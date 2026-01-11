export default function Header ({title, subTitle}) {
    return (
        <div className=" mx-auto w-1/2 rounded-md shadow-lg py-4 text-center text-red-800 my-8">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <p>{subTitle}</p>
        </div>
    )
}