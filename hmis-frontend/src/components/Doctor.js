import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import doc1 from '../pics/pics/doc1.jpg'
import doc2 from '../pics/pics/doc2.jpg'
import doc3 from '../pics/pics/doc3.jpg'
import doc4 from '../pics/pics/doc4.jpg'
import doc5 from '../pics/pics/doc5.jpg'
import doc6 from '../pics/pics/doc6.webp'

const Doctor = () => {
  const cards = [
    {
      logo: doc1,
      title: "Adrian Carter",
      availibility: "Available Slot: 9AM - 11AM"
    },
    {
      logo: doc3,
      title: "Gary Mario",
      availibility: "Available Slot: 11AM - 1PM"
    },
    {
      logo: doc5,
      title: "Lisa Webb",
      availibility: "Available Slot: 1PM - 5PM"
    },
    {
      logo: doc2,
      title: "Mack Winston",
      availibility: "Available Slot: 5PM - 8PM"
    },
    {
      logo: doc4,
      title: "Lily Cox",
      availibility: "Available Slot: 8PM - 11PM"
    },
    {
      logo: doc6,
      title: "Marie Grace",
      availibility: "Available Slot: 3PM - 5PM"
    }
  ]
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-4 g-4 px-5 py-2">
        {cards.map((doc, index) => (
          <div className="col" key={index}>
            <div className="card2 card h-100">
              <img src={doc.logo} className="card-img-top" alt="specialist_logo" />
              <div className="card-body">
                <h5 className="card-title">{doc.title}</h5>
                <p className="card-text">{doc.desc}</p>
                <p>{doc.availibility}</p>
                <button type="button" class="btn btn-success mt-2 ">Book an Appointment</button>
                <button type="button" class="btn btn-danger mt-2">Cancel Appointment</button>
                <span className='moreInfo' onClick={()=>navigate('/doc-info')}>Know More</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Doctor
