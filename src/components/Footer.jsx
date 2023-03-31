import React from "react";
import Link from "./Link";
import { MailFilled, PhoneFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="w-screen py-8 flex flex-col items-center text-white bg-marine" id="contact">
      <div className="flex flex-col justify-start p-8">
        <address className="flex flex-col">
          <b>
            <a href="mailto:zhengjoe.ding@remax-quebec.com" className="cursor-pointer text-2xl"><b>Zheng Joe Ding</b></a>
          </b>
          <a href="https://goo.gl/maps/95ewWum1Yuqz9m8r6" target="_blank">10310 Boul. Saint-Laurent bureau 15, Montréal, QC H3L 2P2</a>
        </address>
        <div className="flex items-center gap-1"><MailFilled className='text-md' /><a href="mailto:zhengjoe.ding@remax-quebec.com">zhengjoe.ding@remax-quebec.com</a></div>
        <div className="flex items-center gap-1"><PhoneFilled /><p className='text-md'><a href="tel:+15149755155">+1 (514)-975-5155</a></p></div>

        <Link />
      </div>

      <p className="mt-6">Copyright@2023</p>

    </footer>
  );
};

export default Footer;
