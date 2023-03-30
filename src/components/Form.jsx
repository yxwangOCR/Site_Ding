import React from "react";

const Form = ({ formTitle, formText, formListOne, formListTwo, formListThree, formListFour, customerName, phone, message }) => {
  return (
    <section className="flex flex-col w-full justify-center items-center text-marine" id="form">
      <h2 className="text-center font-bold py-6 text-2xl">{formTitle}</h2>
      <p className="w-full p-6 text-md text-justify md:w-[50%]">{formText}</p>
      <ul className="w-full p-6 text-md text-justify md:w-[50%]">
        <li>🏠 {formListOne}</li>
        <li>🚀 {formListTwo}</li>
        <li>💫 {formListThree}</li>
        <li>👍 {formListFour}</li>
      </ul>
      <form className="flex flex-col w-full justify-center px-6 gap-1 md:w-[50%]">
        <label htmlFor="">{customerName}</label>
        <input type="text" className="w-[50%] border-2 border-marine" />
        <label htmlFor="">{phone}</label>
        <input type="text" className="w-[50%] border-2 border-marine" />
        <label htmlFor="">Email</label>
        <input type="text" className="w-[50%] border-2 border-marine" />
        <label htmlFor="">{message}</label>
        <textarea name="" id="" cols="30" rows="6" className="border-2 border-marine"></textarea>
        <button className="bg-marine text-white w-[30%] my-2 p-2 rounded-md">Send</button>
      </form>
    </section>
  );
};

export default Form;
