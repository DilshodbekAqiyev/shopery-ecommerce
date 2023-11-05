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
      <div
        className="time"
        style={{
          borderRadius: '20px',
          background: 'rgba(59, 59, 59, 0.50)',
          backdropFilter: 'blur(5px)',
          width: '295px',
          padding: '30px',

          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1 className="time" style={{ fontSize: '38px', fontWeight: '700' }}>
          {count1}
        </h1>
        <h1 className="time" style={{ fontSize: '38px', fontWeight: '700' }}>
          :
        </h1>
        <h1 className="time" style={{ fontSize: '38px', fontWeight: '700' }}>
          {count2}
        </h1>
        <h1 className="time" style={{ fontSize: '38px', fontWeight: '700' }}>
          :
        </h1>
        <h1 className="time" style={{ fontSize: '38px', fontWeight: '700' }}>
          {count3 == 'NaN' ? '' : count3}
        </h1>
      </div>
    </div>
  )
}

export default Timer
