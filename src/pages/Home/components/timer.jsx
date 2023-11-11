import { useEffect, useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight } from 'lucide-react'
function Timer() {
  const [count1, setCount1] = useState(2)
  const [count2, setCount2] = useState(18)
  const [count3, setCount3] = useState(46)
  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 > 0 || count2 > 0 || count3 > 0) {
        setCount3(count3 - 1)
      }

      if (count3 === 0) {
        if (count2 !== 0) {
          setCount2(count2 - 1)
          setCount3(59)
        }
      }
      if (count2 === 0) {
        if (count1 !== 0) {
          setCount1(count1 - 1)
          setCount2(59)
          setCount3(59)
        }
      }
    }, 1000)

    //Clearing the interval
    return () => clearInterval(interval)
  }, [count3])

  return (
    <div className="box">
      <p className=" text-green-700 text-[16px] text-center">Best Deals</p>
      <h1 className=" text-[40px] px-4 text-center font-semibold">Our Special Products Deal of the Month</h1>
      <div className="flex justify-between w-[447px] items-center mx-auto">
        <div className=" px-4 py-2 bg-white rounded-[6px]">
          <h1 className=" text-center text-[32px] text-green-500">00</h1>
          <p className="text-[14px] text-slate-400">days</p>
        </div>
        <h1 className=" text-[20px]  text-slate-400">:</h1>
        <div className=" px-4 py-2 bg-white rounded-[6px]">
          <h1 className=" text-center text-[32px] text-green-500">{count1 < 10 ? '0' + count1 : count1}</h1>
          <p className="text-[14px] text-slate-400">hours</p>
        </div>
        <h1 className=" text-[20px]  text-slate-400">:</h1>
        <div className=" px-4 py-2 bg-white rounded-[6px]">
          <h1 className=" text-center text-[32px] text-green-500">{count2 < 10 ? '0' + count2 : count2}</h1>
          <p className="text-[14px] text-slate-400">mins</p>
        </div>
        <h1 className=" text-[20px]  text-slate-400">:</h1>
        <div className=" px-4 py-2 bg-white rounded-[6px]">
          <h1 className=" text-center text-[32px] text-green-500">{count3 < 10 ? '0' + count3 : count3}</h1>
          <p className="text-[14px] text-slate-400">secs</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className=" text-center my-6">
          shop now <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default Timer
