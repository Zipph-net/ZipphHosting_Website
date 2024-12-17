import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
  	         <div className="container">
  	 	        <div className="row">
  	 		        <div className="footer-col">
  	 			        <h4>company</h4>
  	 			        <ul>
  	 				        <li><a href="#">about us</a></li>
  	 				        <li><a href="#">our services</a></li>
  	 				        <li><a href="#">privacy policy</a></li>
  	 				        <li><a href="#">affiliate program</a></li>
  	 			        </ul>
  	 		        </div>
  	 		        <div className="footer-col">
  	 			        <h4>get help</h4>
  	 			        <ul>
  	 				        <li><a href="#">FAQ</a></li>
  	 				        <li><a href="#">shipping</a></li>
  	 				        <li><a href="#">returns</a></li>
  	 				        <li><a href="#">order status</a></li>
  	 				        <li><a href="#">payment options</a></li>
  	 			        </ul>
  	 		        </div>
  	 		        <div className="footer-col">
  	 			        <h4>online shop</h4>
  	 			        <ul>
  	 				        <li><a href="#">watch</a></li>
  	 				        <li><a href="#">bag</a></li>
  	 				        <li><a href="#">shoes</a></li>
  	 				        <li><a href="#">dress</a></li>
  	 			        </ul>
  	 		        </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h2 className='titulo_footer'>
                        ZIPPH
                    </h2>
                    <p className='copyright_footer'>
                    © 2024 ZIPPH. All rights reserved.
                    </p>
  	 	        </div>
  	        </div>
        </footer>
        
    )
}

export default Footer
