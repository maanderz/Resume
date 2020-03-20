import React, { Component } from 'react'

class About extends Component {
  render(){
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Mandy
            <span className="text-primary">Arens</span>
          </h1>
          <div className="subheading mb-5">Calgary, AB · (604) 728-8182 ·
            <a href="mailto:name@email.com">arens.mandyk@gmail.com</a>
          </div>
          <p className="lead mb-5">I am a web developer who learns quickly.  I've worked on chatbots, React websites, and WordPress websites.  I am keen to gain more experience in the world of technology, therefore I'm looking for a company willing to offer me a placement amongst them.  I would offer my full commitment and be a pleasant and friendly addition to your team in return!</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/arensmandyk/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/maanderz/">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default About;