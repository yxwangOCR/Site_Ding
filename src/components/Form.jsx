import { useForm } from "react-hook-form";


const Form = ({ formTitle, formText, formListOne, formListTwo, formListThree, formDescription, formTextSmall, placeholderOne, buttonText, message }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  return (
    <section className="flex flex-col w-full justify-center items-center text-marine" id="form">
      <h2 className="text-center font-bold py-6 text-2xl">{formTitle}</h2>
      <p className="w-full p-6 text-md text-justify md:w-[50%]">{formText}</p>
      <ul className="w-full p-6 text-md text-justify md:w-[50%]">
        <li>🏠 {formListOne}</li>
        <li>🚀 {formListTwo}</li>
        <li>💫 {formListThree}</li>
      </ul>
      <fieldset className="w-full bg-form bg-cover md:bg-center">
        <div className="bg-black m-8 p-4 rounded-lg flex flex-col items-center justify-center">
          <h3 className="text-white text-center mb-2">{formDescription}</h3>
          <small className="text-white flex items-center justify-center text-center mb-2">{formTextSmall}</small>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap w-full h-[11rem] justify-start items-center rounded-lg p-2 gap-4 xs:h-[10rem] md:h-[6rem]">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex justify-between items-center gap-4">
                <input type="text" placeholder={placeholderOne} className="w-[70%] p-2 rounded-sm placeholder:text-xs" {...register("example")} />
                <input type="text" placeholder="Apt #" className="w-[30%] p-2 rounded-sm placeholder:text-xs" {...register("messageRequired", { required: true })} />
              </div>
              <button type="sumbit" className="bg-bordeau text-white p-2 rounded-md cursor-pointer w-[100%] md:w-[30%]">{buttonText}</button>
            </div>
            {errors.messageRequired && <span className="text-center text-bordeau">{message}</span>}
          </form>
        </div>
      </fieldset>
    </section>
  );
};

export default Form;
