import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginTop: "120px",
            }}
          >
            <a
              href="https://www.facebook.com"
              style={{ margin: "0 10px" }}
              aria-label="Facebook"
            >
              <FaSquareFacebook size={30} /> 
            </a>
            <a
              href="https://www.instagram.com"
              style={{ margin: "0 10px" }}
              aria-label="Instagram"
            >
              <IoLogoInstagram size={30} />
            </a>
            <a
              href="https://www.twitter.com"
              style={{ margin: "0 10px" }}
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              style={{ margin: "0 10px" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          
          <div
            style={{
              color: "gray",
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
              fontFamily: "Heebo",
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "32.31px",
            }}
          >
            Copyright ©2020 All rights reserved
          </div>
    </div>
  )
}

export default Footer