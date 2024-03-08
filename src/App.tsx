import { useState, useEffect } from "react"
import moment from "moment"
import { Progress } from "@/components/ui/progress"
import TileCard from "./components/TileCard"
import Nav from "./components/Nav"

import hamburgerIcon from "/icons/hamburger.png"
import bottleOfWaterIcon from "/icons/bottle-of-water.png"
import walkingIcon from "/icons/walking.png"
import chessIcon from "/icons/chess.png"
import pushupIcon from "/icons/push-up.png"
import planeAroundEarthIcon from "/icons/around-the-world.png"

function App() {
  let endTime = moment("2024-12-31T23:59:59")
  let [currentTime, setCurrentTime] = useState(moment())

  let [days, setDays] = useState(0)
  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [sec, setSec] = useState(0)

  let [progress, setProgress] = useState(0)

  let [duration, setDuration] = useState(moment.duration(0)) 
  
  useEffect(() => {
    setDuration(moment.duration(endTime.diff((currentTime))))

    setDays(Math.floor(duration.asDays()))
    setHours(Math.floor(duration.asHours() % 24))
    setMinutes(Math.floor(duration.asMinutes() % 60))
    setSec(Math.floor(duration.asSeconds() % 60))

    setProgress(Math.floor((100 - (duration.asDays() / 366) * 100)))

    setCurrentTime(moment())
  }, [currentTime])

  let [shouldHideNav, setShouldHideNav] = useState(true)
  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setShouldHideNav(false)
    } else {
      setShouldHideNav(true)
    }
  })

  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center flex-col">
        <Nav className={`${shouldHideNav? 'hidden': 'fixed'}`} days={days} minutes={minutes} hours={hours} sec={sec} progress={progress}/>
        <div className="w-2/3 h-full flex flex-col mt-16 justify-center items-center gap-8">
          <div className="w-full min-h-2/3 p-14 gap-5 bg-slate-800 rounded-lg flex justify-center items-center flex-col">
            <div className="w-full h-1/5 flex gap-12 text-white font-black justify-center items-center text-3xl max-lg:flex-col">
              <h1>{days + " Days".toUpperCase()}</h1>
              <h1>{hours + " Hours".toUpperCase()}</h1>
              <h1>{minutes + " Minutes".toUpperCase()}</h1>
              <h1>{sec + " Seconds".toUpperCase()}</h1>
            </div>

            <div className="flex flex-col justify-center items-center text-white font-bold text-4xl gap-4">
              <h1 className="text-6xl font-black text-primary">2024</h1>
              <h1 className="text-4xl">IS</h1>
              <h1 className="text-primary text-6xl">{progress}%</h1>
              <h1>{"complete".toUpperCase()}</h1>
            </div>

            <div className="w-3/4 h-1/5 flex justify-center items-center gap-4 text-white font-bold">
              <h1>0%</h1>
              <Progress value={progress} />
              <h1>100%</h1>
            </div>
          </div>

          <div className="bg-slate-800 w-full min-h-1/6 rounded-lg flex justify-center items-center flex-col text-white font-bold text-2xl p-8">
            <h1>{"For that time on average".toUpperCase()}</h1> 
            <h1 className="font-thin italic text-3xl text-primary">{"you can".toUpperCase()}</h1>
          </div>

          <div className="w-full rounded-lg gap-8 grid flex-col text-white font-bold text-2xl mb-16 grid-cols-2">
            <TileCard className="" tileNumber="1" textTop={"eat".toUpperCase()} number={Math.floor(duration.asSeconds() / (15 * 60))} textBottom={"hamburgers".toUpperCase()} icon={hamburgerIcon}/>
            <TileCard className="" tileNumber="1" textTop={"drink".toUpperCase()} number={Math.floor(duration.asSeconds() / (5 * 60))} textBottom={"1.5 litre water bottles".toUpperCase()} icon={bottleOfWaterIcon}/>
            <TileCard className="" tileNumber="2" textTop={"walk".toUpperCase()} number={Math.floor(duration.asSeconds() / (20 * 60))} textBottom={"kilometres".toUpperCase()} icon={walkingIcon}/>
            <TileCard className="" tileNumber="1" textTop={"play".toUpperCase()} number={Math.floor(duration.asSeconds() / (45 * 60))} textBottom={"games of chess".toUpperCase()} icon={chessIcon}/>
            <TileCard className="" tileNumber="1" textTop={"do".toUpperCase()} number={Math.floor(duration.asSeconds() / (3 * 60))} textBottom={"push ups".toUpperCase()} icon={pushupIcon}/>
            <TileCard className="" tileNumber="2" textTop={"circle the earth".toUpperCase()} number={Math.floor(duration.asSeconds() / (50* 60 * 60))} textBottom={"in a commercial plane".toUpperCase()} icon={planeAroundEarthIcon}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
