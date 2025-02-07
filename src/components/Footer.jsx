import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  background: var(--bs-primary);
  color: ${({ $mode }) =>
    $mode?.toLowerCase() === "light" ? "var(--bs-light)" : "var(--bs-gray-dark)"};
  padding: 2rem 1rem;

  a {
    color: ${({ $mode }) =>
      $mode?.toLowerCase() === "light" ? "var(--bs-light)" : "var(--bs-gray-dark)"};

    &:hover {
      color: ${({ $mode }) =>
        $mode?.toLowerCase() === "light" ? "var(--bs-gray-dark)" : "var(--bs-light)"};
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;
  max-width: 1200px;
  margin: auto;

  .footer-section {
    flex: 1;
    min-width: 250px;
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const Footer = ({ mode }) => {
  return (
    <StyledFooter $mode={mode}>
      <FooterContainer>
        <div className="footer-section">
          <h4>Address</h4>
          <p>Survey No. 25, Gajaraj Palace, 1, Gajanan Colony, Nimbalkar Nagar, Tathawade, Rood</p>
          <p>Pimpri-Chinchwad, Maharashtra 411032</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@rocketadvertisingagency.com</p>
          <p>Phone: +918432056560 / +918432575656</p>
        </div>
      </FooterContainer>
      {/* <div className="d-flex justify-content-center p-2">
        <SocialLinks />
      </div> */}
    </StyledFooter>
  );
};

Footer.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Footer;
