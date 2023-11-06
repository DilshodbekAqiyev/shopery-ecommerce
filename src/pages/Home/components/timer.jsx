import { useEffect, useState } from 'react'

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
    <div className="box   w-1/3 p-10">
      <div className="flex item-center justify-between w-[447px]">
        <div className=" px-2 py-5 bg-white">
          <h1 className=' text-center'>00</h1>
          <p>days</p>
        </div>
        <h1>:</h1>
        <div className=" px-2 py-5 bg-white">
          <h1>{count1}</h1>
          <p>hours</p>
        </div>
        <h1>:</h1>
        <div className=" px-2 py-5 bg-white">
          <h1>{count2}</h1>
          <p>mins</p>
        </div>
        <h1>:</h1>
        <div className=" px-2 py-5 bg-white">
          <h1>{count3 == 'NaN' ? '' : count3}</h1>
          <p>secs</p>
        </div>
      </div>
    </div>
  )
}

export default Timer
