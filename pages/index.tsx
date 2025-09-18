import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set your target date here - example: 30 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Chump Fun - Launch Countdown!</title>
        <meta name="description" content="Chump Fun Launch Countdown Timer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <div className="header">
          <div className="logo-container">
            <img 
              src="/images/longlogo.PNG" 
              alt="ChumpFun Logo" 
              className="chumpfun-logo"
              onError={(e) => {
                // Fallback if logo not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="logo-placeholder" style={{display: 'none'}}>
              <div className="logo-text">CHUMPFUN</div>
              <div className="logo-subtitle">LOGO HERE</div>
            </div>
          </div>
        </div>

        <h2 className="launch-countdown">
          <span className="word launch">
            <span className="letter l">L</span>
            <span className="letter a">A</span>
            <span className="letter u">U</span>
            <span className="letter n">N</span>
            <span className="letter c">C</span>
            <span className="letter h">H</span>
          </span>
          <span className="word countdown">
            <span className="letter c">C</span>
            <span className="letter o">O</span>
            <span className="letter u">U</span>
            <span className="letter n">N</span>
            <span className="letter t">T</span>
            <span className="letter d">D</span>
            <span className="letter o">O</span>
            <span className="letter w">W</span>
            <span className="letter n">N</span>
            <span className="letter exclamation">!</span>
          </span>
        </h2>

        <div className="countdown-display">
          <div className="time-unit">
            <div className="time-number">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="time-label">DAYS</div>
          </div>
          <div className="time-unit">
            <div className="time-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="time-label">HOURS</div>
          </div>
          <div className="time-unit">
            <div className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="time-label">MINUTES</div>
          </div>
        </div>
      </div>
    </>
  )
}
