import React from 'react'
import "../Footer/footer.css"


const footer = () => {
  return (
    <div>
      <footer>

        <div className="footer-container">
          <div className='container-fluid'>
            <div className="firsthalf">
              <h3>BenchmarkYourself</h3>
            </div>

            <div className="secondhalf">
              <div name="About ParadiseXpress" className="footer-content">
                <h6 className="contentsort">About BenchmarkYou</h6>
                <a>
                  <p className="f2fs">Who We are</p>
                </a>
                <a >
                  <p className="f2fs">Contact Us</p>
                </a>
              </div>

              <div name="Social Links" className="social footer-content">
                <h6 className="contentsort">Social Links</h6>
                <div className="linksort">
                  <a className="ialign" role='button'>
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a className="ialign" role='button'>
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a className="ialign" role='button'>
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a className="ialign" role='button'>
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
              
            </div>

            <hr className="dash" />
            <p className="footer-end">
              By continuing past this page, you agree to our Terms of Service, Cookie
              Policy, Privacy Policy and Content Policies. All trademarks are properties
              of their respective owners.
              © BenchmarkYou™ Ltd. All rights reserved.
            </p>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default footer