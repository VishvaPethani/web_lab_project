import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaMoneyCheckAlt,
  FaUniversity,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-2 px-5">
      <div className="container">
        <div className="row text-center text-md-start border-bottom">
            <div className="row text-center mt-5 mb-3">
                <div className="col-md-3 mb-0">
                    <img src="/images/footerimages/secure-payments.png" alt="Secure Payments" className="mb-2" />
                    <h5 className="fw-semibold">100% Secure Payments</h5>
                    <p className="text-muted small mb-0">
                    Moving your card details to a much more secured place
                    </p>
                </div>
                <div className="col-md-3 mb-4">
                    <img src="/images/footerimages/trustpay.png" alt="TrustPay" className="mb-3" />
                    <h5 className="fw-semibold">TrustPay</h5>
                    <p className="text-muted small mb-0">
                    100% Payment Protection. Easy Return Policy
                    </p>
                </div>
                <div className="col-md-3 mb-4">
                    <img src="/images/footerimages/help-center.png" alt="Help Center" className="mb-2" />
                    <h5 className="fw-semibold">Help Center</h5>
                    <p className="text-muted small mb-0">
                    Got a question? Browse our FAQs or submit your query here.
                    </p>
                </div>
                <div className="col-md-3 mb-4">
                    <img src="/images/footerimages/mobile-app.png" alt="Shop on the Go" className="mb-1" />
                    <h5 className="fw-semibold">Shop on the Go</h5>
                    <p className="text-muted small mb-0">
                    Download the app and get exciting app only offers at your fingertips
                    </p>
                </div>
            </div>
        </div>

        <div className="row mt-5" >
          <div className="col-md-2">
            <h6 className="fw-bold">Policy Info</h6>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Report Abuse & Takedown Policy</li>
              <li>Know Your BIS Standard</li>
              <li>Products Under Compulsory BIS</li>
              <li>Certification</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Sitemap</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">WardrobeHUB Business</h6>
            <ul className="list-unstyled">
              <li>Shopping App</li>
              <li>Sell on WardrobeHUB</li>
              <li>Media Enquiries</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Popular Links</h6>
            <ul className="list-unstyled">
              <li>Lehenga</li>
              <li>Kid's Clothing</li>
              <li>Sarees</li>
              <li>Winter Wear</li>
              <li>Sweatshirts</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Subscribe</h6>
            <form className="d-flex mb-2">
              <input type="email" className="form-control me-2" placeholder="Your email address" />
              <button className="btn btn-dark">SUBSCRIBE</button>
            </form>
            <small>Register now to get updates on promotions and coupons. Or Download App</small>
          </div>
        </div>

        <div className="row mt-4 border-top pt-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <strong>PAYMENT:</strong>
            <FaCcVisa className="ms-3 fs-4" />
            <FaCcMastercard className="ms-3 fs-4" />
            <FaCcAmex className="ms-3 fs-4" />
            <FaMoneyCheckAlt className="ms-3 fs-4" title="Cash on Delivery" />
            <FaUniversity className="ms-3 fs-4" title="Net Banking" />
          </div>
          <div className="col-md-6 text-md-end" >
            <strong>CONNECT:</strong>
            <FaFacebookF className="ms-3" size={17}/>
            <FaTwitter className="ms-3" size={17}/>
            <FaInstagram className="ms-3" size={17}/>
            <FaLinkedinIn className="ms-3" size={17}/>
            <FaYoutube className="ms-3" size={17}/>
            <FaTelegramPlane className="ms-3" size={17}/>
            <FaWhatsapp className="ms-3" size={17}/>
          </div>
        </div>


       <div className="row mt-4 border-top pt-3">
          <div className="col-12 text-center">
            <small>&copy; {new Date().getFullYear()} WardrobeHUB. All rights reserved.      Developed by YourName.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;