import React from "react";
import Link from "./Link";
import { MailFilled, PhoneFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="w-screen py-8 flex flex-col items-center text-white bg-marine">
      <div className="flex flex-col justify-start p-8">
        <address>
          <b>
            <a href="mailto:zhengjoe.ding@remax-quebec.com" className="cursor-pointer">Zheng Joe Ding</a>
          </b>
          <p>10310 Boul. Saint-Laurent bureau 15, Montréal, QC H3L 2P2</p>
        </address>
        <div className="flex items-center gap-1"><MailFilled className='text-md' /><a href="mailto:zhengjoe.ding@remax-quebec.com"><small>zhengjoe.ding@remax-quebec.com</small></a></div>
        <div className="flex items-center gap-1"><MailFilled className='text-md' /><a href="mailto:zhemf@wimmo.ca"><small>zhemf@wimmo.ca</small></a></div>
        <div className="flex items-center gap-1"><MailFilled className='text-md' /><a href="mailto:zheng@qimmo.ca"><small>zheng@qimmo.ca</small></a></div>
        <div className="flex items-center gap-1"><PhoneFilled /><p className='text-md'><a href="tel:+15149755155">+1 (514)-975-5155</a></p></div>

        <Link />
      </div>

      <p className="mt-6">Copyright@2023</p>

    </footer>
  );
};

export default Footer;
