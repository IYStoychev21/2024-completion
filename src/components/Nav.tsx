import { Progress } from "./ui/progress"
import upIcon from "/icons/upload.png"

export default function Nav({className, days, hours, minutes, sec, progress} : any) {
    return (
        <>
            <div className={`${className} z-10 w-full gap-8 h-16 bg-[#33333370] backdrop-blur-lg flex items-center fixed top-0 left-0 pl-5`}>
                <div className="w-fit h-1/5 flex gap-5 text-white font-black items-center text-sm">
                    <h1>{days + " Days".toUpperCase()}</h1>
                    <h1>{hours + " Hours".toUpperCase()}</h1>
                    <h1>{minutes + " Minutes".toUpperCase()}</h1>
                    <h1>{sec + " Seconds".toUpperCase()}</h1>
                </div>

                <div className="w-1/6 h-1/5 flex gap-5 text-white font-black items-center text-sm">
                    <Progress value={progress} />
                </div>

                <img onClick={() => {window.scroll(0, 0)}} className="active:scale-95 hover:bg-[#333] h-full p-2 w-16 right-0 absolute cursor-pointer duration-150" src={upIcon} alt="" />
            </div>
        </>
    )
}