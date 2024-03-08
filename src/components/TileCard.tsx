

export default function OneTileCard({ className, textTop, icon, number, textBottom, tileNumber} : any) {
    return (
        <>
            <div className={`${className} w-full p-8 rounded-lg h-full bg-slate-800 text-white gap-4 flex justify-center items-center ${tileNumber < 2? 'flex-col': 'flex-row col-span-2'} font-thin text-2xl italic`}> 
                <img src={icon} alt="" />
                <div className={`flex justify-center items-center flex-col gap-1`}>
                    <h1>{textTop}</h1>
                    <h1 className="text-primary text-3xl font-bold not-italic">{number}</h1>
                    <h1>{textBottom}</h1>
                </div>
            </div> 
        </>
    )
}