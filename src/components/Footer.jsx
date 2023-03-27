import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen p-8 flex flex-col justify-center items-center bg-marine text-white text-center">
      <address>
        <b>
          <a href="mailto:webmaster@example.com">Jon Doe </a>
        </b>
        <p>Visit us at Box 564, Montreal, Quebec, Canada</p>
      </address>
      <p>Copyright@2023</p>
    </footer>
  );
};

export default Footer;
