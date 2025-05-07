import React from 'react'
import Deliv from '../assets/delivery.jpg'
import Serv from '../assets/services.jpg'
import Medicine from '../assets/meds.jpg'
import '../styles/About.css'


function About() {
  return (
    <div className='about'>
      <div>
      <h1 className='about-heading'>About SpeedyShaq</h1>
      <img src={Deliv} alt="" className='img' />
      <p className='par'>At ShaqSpeedy, we specialize in fast, reliable delivery of food, groceries, and medicine—bringing essential items to your doorstep when you need them most. Whether you're craving a hot meal, restocking your pantry, or urgently needing prescription medication, our dedicated team works around the clock to ensure safe, timely, and hygienic deliveries. With real-time tracking, trained delivery personnel, and a customer-first approach, we make convenience, care, and quality our top priorities. Your well-being is our mission, and we're here to help you save time and stay safe—every day.</p><br /><hr />
      </div>

      <div>
      <h1 className='about-heading'>Services</h1>
      <img src={Serv} alt="" className='img' />
      <p className='par'>At ShaqSpeedy, we offer a wide range of delivery solutions tailored to meet your everyday needs. Our food delivery service brings your favorite meals from local restaurants straight to your door, hot and fresh. With our grocery delivery, you can skip the supermarket lines and have fresh produce, pantry staples, and household essentials delivered quickly and conveniently. For health and wellness, our medicine delivery ensures that prescriptions and over-the-counter medications arrive safely and discreetly—right when you need them. Whether it’s a last-minute dinner, a weekly grocery haul, or an urgent medical need, we’re here to deliver with care, speed, and reliability.</p><br /><hr />

      <div>
      <h1 className='about-heading'>Deliveries</h1>
      <img src={Medicine} alt="" className='img' />
      <p className='par'>At ShaqSpeedy, we take pride in offering prompt and dependable delivery services that cater to your busy lifestyle. Our delivery network is designed for speed, accuracy, and safety—ensuring your orders reach you exactly when and where you need them. From quick-turnaround food deliveries to carefully handled grocery and medicine drop-offs, we prioritize hygiene, temperature control, and real-time tracking every step of the way. Whether it's a single meal or a full shopping list, you can count on us for a seamless delivery experience that puts your needs first.</p><br /><hr />
      </div>

      </div>
    </div>
    
    
  )
}

export default About
