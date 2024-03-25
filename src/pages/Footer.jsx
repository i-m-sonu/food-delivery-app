import React from "react";
import "../styles/foot.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <>
      {/* <section className="sections">Footer Example 4</section> */}
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Tasty<span>Treat</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            {/* <a href="#">Blog</a> */}

            <a href="#">Food</a>

            <a href="#">Cart</a>

            {/* <a href="#">Faq</a> */}

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">All Rights Reserved © 2024</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>President House</span> New Delhi, India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 1234567809</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
           we provide the best quality of food than any other in the market. It is the best in every end sense.

          </p>

          <div class="footer-icons">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <XIcon />
            </a>
            <a href="#">
              <LinkedInIcon/>
            </a>
            <a href="#">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
