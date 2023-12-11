import React from 'react'
import { useNavigate } from 'react-router-dom';
const DoctorInfo = () => {
    const navigate = useNavigate();
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">
                        <div
                            className="card"
                            style={{ borderRadius: 15, backgroundColor: "#93e2bb" }}
                        >
                            <div className="card-body p-4 text-black">
                                <div>
                                <button className='goBack' onClick={()=>navigate('../doctors')}>X</button>
                                    <h6 className="mb-4"><strong>Doctor Info</strong></h6>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <p className="small mb-0">
                                            <i className="far fa-clock me-2" />Doctor ID: 12345
                                        </p>
                                        <p className="fw-bold mb-0">Consulting Charge: Rs 2000</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                                            alt="Generic placeholder"
                                            className="img-fluid rounded-circle border border-dark border-3"
                                            style={{ width: 70 }}
                                        />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            <p className="mb-0 me-2">@renee004</p>
                                        </div>
                                        <div>
                                            <p className="mb-0 me-2">Email: xyz@abc.com</p>
                                            <p className="mb-0 me-2">Speciality: Neurology</p>
                                            <p className="mb-0 me-2">Education: MBBS(AIIMS Jodhpur), Masters(University of Toronto)</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <p className="my-4 pb-1">20 Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorInfo;
