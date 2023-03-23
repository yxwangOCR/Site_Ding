import React from "react";

const Form = () => {
  return (
    <section className="bg-blue" id="form">
      <h2 className="text-center font-bold py-6">Review</h2>
      <form className="flex flex-col w-full justify-center px-10 gap-1 bg-gray">
        <label htmlFor="">Contact name</label>
        <input type="text" className="w-[50%]" />
        <label htmlFor="">Email</label>
        <input type="text" className="w-[50%]" />
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button className="bg-red w-[30%] my-2">Send</button>
      </form>
    </section>
  );
};

export default Form;
