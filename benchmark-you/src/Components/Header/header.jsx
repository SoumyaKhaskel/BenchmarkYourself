import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import { MDBNavbar, MDBContainer, MDBNavbarBrand,MDBBtn } from 'mdb-react-ui-kit';
import { useAuth0 } from "@auth0/auth0-react";



export default function App() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer fluid className="navbar-container">
          <div className="left-section">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <MDBNavbarBrand><i class="bi bi-lightning-fill" style={{paddingRight:'5px'}}></i>BenchmarkYourself</MDBNavbarBrand>
            </Link>
          </div>
          <div className="right-section">
            {isAuthenticated && (
              <div className="user-info">
                <img src={user.picture} alt={user.name} style={{ width: '30px', height: 'auto' }} />
                <span>{user.name}</span>
                {/* <p>{user.email}</p> */}
              </div>
            )}
            {isAuthenticated ? (
              <MDBBtn color='warning' size="sm" className="custom-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </MDBBtn>
            ) : (
              <MDBBtn color='warning' size="sm" className="custom-btn" onClick={() => loginWithRedirect()}>Log In</MDBBtn>
            )}
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}