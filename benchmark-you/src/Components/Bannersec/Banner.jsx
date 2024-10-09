import React from "react";
import "../Bannersec/Banner.css"

import { MDBBtn } from "mdb-react-ui-kit";


export default function BannerComponent() {
  return (
    <div>
      <div style={{ paddingTop: '60px', backgroundColor: '#ffcc34' }}>
        <div className='p-5 text-center'>
          <i className="bi bi-lightning-fill" style={{ fontSize: '80px' }}></i>
          <h1 className='mb-3'>BenchmarkYourself</h1>
          <h5 className='mb-3'>Evaluate your cognitive abilities through brain games and tests</h5>
          <MDBBtn color='warning' size="lg" className="custom-btn" href="/reactiontime">Get Started</MDBBtn>
        </div>
      </div>
    </div>

  );
}
