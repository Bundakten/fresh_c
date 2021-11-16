import React from 'react'
import Hamburger from 'hamburger-react'

const Navbar = () => {
    return (
        <div>
         {/* navbar */}
         <nav className="navbar navbar-expand-lg fixed navbar-light bg-light bg-white" >
                <h2>FRESH.</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <Hamburger size={32} rounded color="#2D3161"  />
                </button>
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="font-weight-bold nav-link px-md-5 pl-md-0">Home</a>
                        </li>
                        <li className="nav-item mx-md-2">
                            <a  className="nav-link px-md-2 pl-3 pl-md-0 font-weight-bold">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-md-4 pl-3 pl-md-0 font-weight-bold">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-md-4 pl-3 pl-md-0 font-weight-bold">Contact Us</a>
                        </li>
                        <li className="nav-item">
                        <button class="btn btn-outline-success my-2 px-md-4 nav my-sm-0" type="submit">CONTACT US</button>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* navbar ends */}
        </div>
    )
}

export default Navbar;
