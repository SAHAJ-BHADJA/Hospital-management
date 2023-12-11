import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App1.css'
import Neurologist from '../pics/pics/neurologist.jpg'
import Surgeon from '../pics/pics/Surgeon.jpg'
import Anesthesiologist from '../pics/pics/Anesthesiologist.jpg'
import Pediatrics from '../pics/pics/Pediatrics.avif'
import Practitioner from '../pics/pics/Practitioner.jpg'
import Endocrinologist from '../pics/pics/Endocrinologist.png'
import Radiologist from '../pics/pics/Radiologist.jfif'
import Cardiologist from '../pics/pics/Cardiologist.avif'

const Specialist = () => {
  const doctors = [
    {
      logo: Neurologist,
      title: "Neurologists",
      desc: "Consult a Neurologist"
    },
    {
      logo: Surgeon,
      title: "Surgeons",
      desc: "Consult a Surgeon"
    },
    {
      logo: Anesthesiologist,
      title: "Anesthesiologists",
      desc: "Consult an Anesthesiologist"
    },
    {
      logo: Pediatrics,
      title: "Pediatrics",
      desc: "Consult a Pediatric"
    },
    {
      logo: Practitioner,
      title: "General practitioners",
      desc: "Consult a General Practitioner"
    },
    {
      logo: Endocrinologist,
      title: "Endocrinologists",
      desc: "Consult an Endocrinologist"
    },
    {
      logo: Radiologist,
      title: "Radiologists",
      desc: "Consult a Radiologist"
    },
    {
      logo: Cardiologist,
      title: "Cardiologists",
      desc: "Consult a Cardiologist"
    }
  ]
  const navigate = useNavigate();
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 px-5 py-2">
        {doctors.map((doc, index) => (
          <div className="col" key={index} onClick={()=>navigate('/doctors')}>
            <div className="card h-100">
              <img src={doc.logo} className="card-img-top" alt="specialist_logo" />
              <div className="card-body">
                <h5 className="card-title">{doc.title}</h5>
                <p className="card-text">{doc.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Specialist;