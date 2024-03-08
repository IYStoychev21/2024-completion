

export default function OneTileCard({ className, textTop, icon, number, textBottom}) {
    return (
        <>
            <div className={`${className} w-full gap-4 p-8 rounded-lg h-full bg-slate-800 text-white flex justify-center items-center flex-col font-thin text-2xl italic`}> 
                <img src={icon} alt="" />
                <div className="flex justify-center items-center flex-col">
                    <h1>{textTop}</h1>
                    <h1 className="text-primary text-3xl font-bold not-italic">{number}</h1>
                    <h1>{textBottom}</h1>
                </div>
            </div> 
        </>
    )
}