import React from "react";

const Testimony = ({ temoTitle, temo }) => {
  return (
    <section className="bg-white" id="review">
      <h2 className="text-center font-bold py-6 text-marine text-2xl">{temoTitle}</h2>
      <div className="flex flex-col gap-6 w-full justify-center items-center md:flex-row">
        <article className="text-marine w-full p-6 text-md text-justify md:w-[50%] ">
          <p><em>{temo}</em></p>
        </article>
      </div>
    </section>
  );
};

export default Testimony;
