import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen h-[80px] flex flex-col justify-center items-center bg-marine text-white">
      <address>
        Written by{" "}
        <b>
          <a href="mailto:webmaster@example.com">Jon Doe</a>
        </b>
        . Visit us at:Example.com Box 564, Disneyland USA
      </address>
      <p>Copyright@2023</p>
    </footer>
  );
};

export default Footer;
