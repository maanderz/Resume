import React, { Component } from 'react'

class Education extends Component {
  render(){
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lighthouse Labs</h3>
              <div className="subheading mb-3">Web Development Bootcamp</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Graduated November 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Vancouver Community College</h3>
              <div className="subheading mb-3">Medical Transcriptionist Certificate</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Graduated November 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Simon Fraser University</h3>
              <div className="subheading mb-3">Health Sciences</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - </span>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Education;