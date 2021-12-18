import React from 'react';
// Components
import Hero from '../Hero';
import Contacts from './Contacts';
// Images
import image from '../../assets/Images/Contact/hero.jpg';
import tripadvisor from '../../assets/Images/Review-providers/tripadvisor-logo.svg';
import zomato from '../../assets/Images/Review-providers/zomato-logo.svg';
import agfg from '../../assets/Images/Review-providers/agfg-logo.png';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Contact() {

  const contactData = {
    header: "Connect with",
    subHeader: "us",
    paragraph: "Let us know your feedback about our service and food. We are really happy to hear from you, so that we can offer the best of The Village Cafe. ",
  }

  const review = {
    header: "Leave a review",
    providers: [
      {
        href: "https://www.tripadvisor.com.au/Restaurant_Review-g4358130-d4492715-Reviews-The_Village_Cafe-Balwyn_Boroondara_Greater_Melbourne_Victoria.html",
        logo: tripadvisor,
      },
      {
        href: "https://www.zomato.com/melbourne/the-village-cafe-balwyn-north",
        logo: zomato,
      },
      {
        href: "https://www.agfg.com.au/restaurant/the-village-cafe-46466",
        logo: agfg,
      },
    ]
  }

  const socials = {
    header: "Follow us",
    icons: [
      {
        href: "https://www.facebook.com/The-Village-Cafe-348418458561128" ,
        img: <FacebookIcon sx={{ fontSize: '6vw', color: '#4267B2'}}/>,
      },
      {
        href: "https://www.facebook.com/The-Village-Cafe-348418458561128" ,
        img: <InstagramIcon sx={{ fontSize: '6vw', color: '#3f729b'}}/>,
      },
    ]
  }

  const openingHours = [
    {
      day: "Monday",
      time: "7:00 am - 5:00 pm",
    },
    {
      day: "Tuesday",
      time: "7:00 am - 5:00 pm",
    },
    {
      day: "Wednesday",
      time: "7:00 am - 5:00 pm",
    },
    {
      day: "Thursday",
      time: "7:00 am - 5:00 pm",
    },
    {
      day: "Friday",
      time: "7:00 am - 5:00 pm",
    },
    {
      day: "Saturday",
      time: "7:00 am - 5:00 pm",
    },
    {
      day: "Sunday",
      time: "8:00 am - 4:00 pm",
    },
  ]

  return (
    <section className="main contact">
      <Hero 
        header={contactData.header} 
        subHeader={contactData.subHeader} 
        paragraph={contactData.paragraph} 
        firstImg={image} 
      />

      <section className="contact__main">
        <Contacts 
          title={review.header} 
          providers={review.providers}
        />

        <Contacts 
          title={socials.header} 
          icons={socials.icons} 
        />

        <div className="contact__main--opening-hours">
          <div className="header">
            <h2>Openings hours</h2>
          </div>
          <div className="wrapper">
            {openingHours?.map((hours, index) => {
              return (
                <div key={index} className="hours">
                  <h4 className="day">{hours.day}</h4>
                  <p className="time">{hours.time}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="contact__main--location">
          <div className="wrapper">
            <iframe 
              title="map" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.873647963012!2d145.06958941531815!3d-37.79300077975613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646caac5eada9%3A0x611cac8d3e5b48d3!2sThe%20Village%20Cafe!5e0!3m2!1sen!2sau!4v1639402241378!5m2!1sen!2sau" 
              style={{border: "0"}} 
              allowFullScreen="" 
              loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </section>
  )
}
