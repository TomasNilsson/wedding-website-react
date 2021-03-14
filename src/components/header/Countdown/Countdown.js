import React, { useState, useEffect } from 'react'
import styles from './Countdown.module.scss'

const Countdown = ({
  className,
  date: targetDate = new Date(),
  countdownText = {
    days: ['day', 'days'],
    hours: ['hour', 'hours'],
    minutes: ['minute', 'minutes'],
    seconds: ['second', 'seconds'],
  },
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      let diff =
        (Date.parse(new Date(targetDate)) - Date.parse(new Date())) / 1000

      // No updates needed when date is reached
      if (diff < 0) return

      const timeDiff = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }

      // Calculate time difference between now and target date
      const minuteInSec = 60
      const hourInSec = 60 * minuteInSec
      const dayInSec = 24 * hourInSec
      const yearInSec = 365.25 * dayInSec
      if (diff >= yearInSec) {
        timeDiff.years = Math.floor(diff / yearInSec)
        diff -= timeDiff.years * yearInSec
      }
      if (diff >= dayInSec) {
        timeDiff.days = Math.floor(diff / dayInSec)
        diff -= timeDiff.days * dayInSec
      }
      if (diff >= hourInSec) {
        timeDiff.hours = Math.floor(diff / hourInSec)
        diff -= timeDiff.hours * hourInSec
      }
      if (diff >= minuteInSec) {
        timeDiff.minutes = Math.floor(diff / minuteInSec)
        diff -= timeDiff.minutes * minuteInSec
      }
      timeDiff.seconds = diff

      setTimeLeft(timeDiff)
    }

    updateCountdown()
    // Update every second
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const addLeadingZeros = (value) => {
    value = String(value)
    return value.length < 2 ? '0' + value : value
  }

  return (
    <div className={className}>
      {['days', 'hours', 'minutes', 'seconds'].map((timePart) => (
        <div key={timePart} className={styles.column}>
          <div className={styles.columnElement}>
            <div className={styles.columnElementNumber}>
              {addLeadingZeros(timeLeft[timePart])}
            </div>
            <div>
              {countdownText[timePart][timeLeft[timePart] === 1 ? 0 : 1]}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
