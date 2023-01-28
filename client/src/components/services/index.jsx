import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Services = () => {

    const [services, setServices] = useState([])
    const [input, setInput] = useState("")
    const [sort, setSort] = useState(true)

    const getData = () => {
        const apiUrl = "http://localhost:8081/services"
        axios.get(`${apiUrl}`).then((q) => setServices(q.data))
    }

    useEffect(() => {
        getData()
    }, [])
    
    const handleSort = () => {
        setSort(!sort)
        if(sort){
            setServices([...services.sort((a,b) => a.price - b.price)])
        }else{
            getData()
        }
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/services/${id}`).then(() => getData())
    }

  return (
    <div id='services'>
        <Helmet>
            <title>Services</title>
        </Helmet>
        <div className="container">
            <section className="top">
                    <div className="content">
                        <h1>WELCOME</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
                        <button>Get In Touch</button>
                    </div>
            </section>
            <section className="image">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="image-content">
                    <div className="left">
                        <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" />
                    </div>
                    <div className="right">
                        <h1>For the next great business</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
                        <ul>
                            <li><span>✓</span>Officia quaerat eaque neque</li>
                            <li><span>✓</span>Possimus aut consequuntur incidunt</li>
                            <li><span>✓</span>Lorem ipsum dolor sit amet</li>
                            <li><span>✓</span>Consectetur adipisicing elit</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='team'>
                <div className="title2">
                    <h1>Our Team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
                </div>
                <div className="users">
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg" alt="" />
                        <h3>Kaiara Spencer</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_6.jpg" alt="" />
                        <h3>Dave Simpson</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_7.jpg" alt="" />
                        <h3>Ben Thompson</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_8.jpg" alt="" />
                        <h3>Kyla Stewart</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_1.jpg" alt="" />
                        <h3>Kaiara Spencer</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_2.jpg" alt="" />
                        <h3>Dave Simpson</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_3.jpg" alt="" />
                        <h3>Ben Thompson</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                    <div className="user-card">
                        <img src="https://preview.colorlib.com/theme/nitro/images/person_4.jpg" alt="" />
                        <h3>Chris Stewart</h3>
                        <p>PRODUCT MANAGER</p>
                    </div>
                </div>
            </section>
            <section className="api">
                    <div className="title3">
                        <h1>Our Services</h1>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)}/>
                        <button onClick={handleSort}>Sort</button>
                    </div>
                    <div className="main-data">
                            {
                                services
                                .filter((service) => {
                                    return input.toLowerCase() === ''
                                    ? service
                                    : service.name.toLowerCase().includes(input)
                                })
                                .map((service,i) => {
                                    return(
                                        <div className="datas" key={i}>
                                            <div className="img">
                                                <i className={service.imgUrl}></i>
                                            </div>
                                            <Link to={`${service._id}`}>
                                                <div className="text-data">
                                                    <h3>{service.name}</h3>
                                                    <p>{service.description}</p>
                                                    <span>{service.price}$</span><br />
                                                </div>
                                            </Link>
                                            <div className="btn">
                                                <button onClick={() => handleDelete(service._id)}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
            </section>
            <section className="form-data">
                <div className="title4">
                        <h1>Contact Us</h1>
                        <div className="main-icons">
                            <div className="middle-icon">
                                <div className="left-icon">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className="left-icon">
                                    <i class="fa-solid fa-phone"></i>
                                    <p className='tel'>+1 232 3235 324</p>
                                </div>
                                <div className="left-icon">
                                    <i class="fa-regular fa-envelope"></i><br />
                                    <a href="#">youremail@domain.com</a>
                                </div>
                            </div>
                            
                        </div>
                </div>
                <div className="data-form">
                        <div className="contact-form">
                            <p className='t-form'>Contact Form</p>
                            <div className="form-inputs">
                                <div className="main-input">
                                    <div className="name-input">
                                        <label htmlFor="firstName">First Name</label><br />
                                        <input type="text" id='firstName'/>
                                    </div>
                                    <div className="name-input">
                                        <label htmlFor="lasttName">Last Name</label><br />
                                        <input type="text" id='lasttName'/>
                                    </div>
                                </div>
                                <div className="email-input">
                                    <label htmlFor="email">Email</label><br />
                                    <input type="text" id='email'/>
                                </div>
                                <div className="subject">
                                    <label htmlFor="subject">Subject</label><br />
                                    <input type="text" id='subject'/>
                                </div>
                                <div className="message">
                                    <label htmlFor="message">Message</label><br />
                                    <textarea name="message" id="message" cols="142" rows="10" placeholder='Write your notes or question here...'></textarea>
                                </div>
                                <button>Send Message</button>
                            </div>
                        </div>
                </div>
            </section>
            
        </div>
    </div>
  )
}

export default Services