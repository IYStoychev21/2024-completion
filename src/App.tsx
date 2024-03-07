import { useState, useEffect } from "react"
import moment from "moment"
import { Progress } from "@/components/ui/progress"

function App() {
  let endTime = moment("2024-12-31T23:59:59")
  let [currentTime, setCurrentTime] = useState(moment())

  let [days, setDays] = useState(0)
  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [sec, setSec] = useState(0)

  let [progress, setProgress] = useState(0)

  useEffect(() => {
    let duration = moment.duration(endTime.diff((currentTime)))

    setDays(Math.floor(duration.asDays()))
    setHours(Math.floor(duration.asHours() % 24))
    setMinutes(Math.floor(duration.asMinutes() % 60))
    setSec(Math.floor(duration.asSeconds() % 60))

    setProgress(Math.floor((100 - (duration.asDays() / 366) * 100)))

    setCurrentTime(moment())
  }, [currentTime])

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-2/3 min-h-2/3 p-14 gap-5 bg-slate-800 rounded-lg flex justify-center items-center flex-col">
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
      </div>
    </>
  )
}

export default App
