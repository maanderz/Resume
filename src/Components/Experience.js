import React, { Component } from 'react'

class Experience extends Component {
  render(){
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">FrontEnd Web Developer</h3>
              <div className="subheading mb-3">Loomo Marketing</div>
              <ul>
                <li> 
                  Worked alongside a small team delivering multiple projects to clients
                  simultaneously 
                </li>
                <li>
                  Building WordPress pages with WooCommerce, Elementor and CSS
                  according to design flats
                </li>  
                <li>
                  Participate in weekly scrums to plan sprints according to customer
                  timelines and expectations
                </li>
                <li>
                  Using PHP, updated backend themes for WordPress
                </li>
                <li>
                  Completed three large client roll-outs
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">HomerBot</div>
                <ul>
                  <li> 
                    Startup comprised of up to ten people 
                  </li>
                  <li>
                    Designed and build chatbots integrated with Slack and Facebook Messenger using javascript and Azure function apps
                  </li>  
                  <li>
                    Developed analytics platform for rental statistics using React
                  </li>
                  <li>
                    Researched, proposed, and implemented database solution using Postgres and Airtable
                  </li>
                  <li>
                    Implemented map search feature using Google maps and TomTom APIs with GeoJSON and PostGIS
                  </li>
                  <li>
                    Mentored four BCIT computer systems and two computer design students for six months
                  </li>
                  <li>
                    Helped host launch events for products and interfaced with multiple parties including investors to promote products
                  </li>
                </ul>            
              </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2018 - January 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Intro to FrontEnd Development Mentor</h3>
              <div className="subheading mb-3">Lighthouse Labs</div>
              <ul>
                <li>
                  Assisted in teaching 14 students
                </li>
                <li>
                  Worked through HTML, CSS, javascript, AJAX, and jquery with group
                </li>
                <li>
                  Taught javascript intro lecture to class
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2019 - January 2020</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Medical Transcriptionist</h3>
              <div className="subheading mb-3">Brooke Radiology</div>
              <ul>
                <li>
                  Transcribed x-ray and ultrasound doctor reports
                </li>
                <li>
                  Increased productivity of team by producing twice as many reports as average transcriptionist with minimal errors
                </li>
                <li>
                  Typed reports at approximately 90 WPM
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2016 - August 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Shift Supervisor</h3>
              <div className="subheading mb-3">Starbucks Coffee Company</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2010 - February 2016</span>
            </div>
          </div>
   
        </div>
      </section>
    )
  }
}

export default Experience;