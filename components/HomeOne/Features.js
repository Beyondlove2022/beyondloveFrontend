import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react';

const Features = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMintues, setTimerMintues] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const starTimer = () =>{
      const countDownDate = new Date('11/04/2022').getTime();

      interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000));

        const hours = Math.floor((
          distance % (24 * 60 * 60 * 1000)) /(1000 * 60 * 60)) + 10;

        const minutes = Math.floor((
          distance % (60 * 60 * 1000)) /(1000 * 60));

        const seconds = Math.floor((
          distance % (60 * 1000)) /(1000));

          if(distance < 0){
            clearInterval(interval.current);
          }else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMintues(minutes);
            setTimerSeconds(seconds);
          }
      })
    }

    useEffect (() =>{
      starTimer();
    });
  
  return (
    <>
      <section className='features-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Your Small Business Start With <span>Indice</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className="col-lg-12 col-md-12">
              <div className='days-hours'>               
                  <table>
                  <tr>
                    <th>Days</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                    <th>Seconds</th>
                  </tr>
                  <tr>
                    <td>{timerDays}</td>
                    <td>{timerHours}</td>
                    <td>{timerMintues}</td>
                    <td>{timerSeconds}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='divider divi-cov-up'></div>
      </section>
    </>
  );
};

export default Features;