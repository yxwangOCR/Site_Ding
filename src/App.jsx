import "./App.css";
import { useEffect, useState } from 'react';
import Hero from "./components/Hero";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Testimony from "./components/Testimony";
import Letter from "./components/Letter";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Data from "./Data.json"

function App() {
  const [language, setLanguage] = useState("English")
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === "EN") {
      setContent(Data.en)
    } else if (language == "FR") {
      setContent(Data.fr)
    } else if (language == "CN") {
      setContent(Data.ch)
    }
  })
  return (
    <div>
      <div className="w-screen bg-marine h-[80px] drop-shadow-lg flex ">
        <Header
          home={content.menuOne ? content.menuOne : "Home"}
          service={content.menuTwo ? content.menuTwo : "Service"}
          about={content.menuThree ? content.menuThree : "About"}
          contact={content.menuFour ? content.menuFour : "Contact"} />

        <select value={language} onChange={(e) => { setLanguage(e.target.value) }}>
          <option>EN</option>
          <option>FR</option>
          <option>CN</option>
        </select>
      </div>

      <Hero sloganText={content.slogan ? content.slogan : "Expertise, experience, excellence - our motto, your trust is our priority"} />
      <Presentation
        titleOne={content.titleOne ? content.titleOne : "Hello and welcome!"}
        titleTwo={content.titleTwo ? content.titleTwo : "Expertise"}
        titleThree={content.titleThree ? content.titleThree : "Personalized Approach"}
        titleFour={content.titleFour ? content.titleFour : "Extended Network"}
        titleFive={content.titleFive ? content.titleFive : "Transparent Communication"}
        titleSix={content.titleSix ? content.titleSix : "Project Management"}
        presentationText={content.presentation ? content.presentation : "I am an experienced real estate broker, specializing in the sale and purchase of properties for my clients. My main goal is to provide exceptional quality service and help you achieve your real estate dreams. Here are some of my professional strengths that you might be interested in:"}
        expertiseText={content.expertise ? content.expertise : "With several years of experience in the real estate industry, I am an expert in the real estate market. I am knowledgeable about market trends, the most sought-after neighborhoods, and current sale prices. I can help you get the best possible deal for your property, whether you're looking to sell or buy."}
        approachText={content.approach ? content.approach : "I believe that every client has different needs and goals. That's why I take a personalized approach for each client. I take the time to understand your needs and expectations, and work with you to find a solution that fits your unique situation."}
        networkText={content.network ? content.network : "I have an extensive network of real estate professionals, including notaries, mortgage brokers, construction contractors, building inspectors, and more. I can recommend the best people to help you achieve your real estate goals."}
        communicationText={content.communication ? content.communication : "I believe in honest and transparent communication with my clients. I will keep you informed at every step of your real estate transaction, and answer any questions you may have quickly and efficiently."}
        managementText={content.management ? content.management : "I have a great deal of experience in managing complex real estate projects. I can help you coordinate the different stages of your real estate transaction, ensuring that everything goes smoothly."}
        endText={content.end ? content.end : "I am confident that my professional strengths can help you achieve your real estate dreams. Feel free to contact me to discuss your real estate project. I look forward to working with you!"}
      />
      <Testimony
        temoTitle={content.temoTitle ? content.temoTitle : "Review"}
        temo={content.temo ? content.temo : "I am extremely pleased with the outstanding service provided by my real estate agent. His professionalism and attention to detail really impressed me throughout the entire process of buying my home. My agent took the time to carefully listen to my needs and preferences for a property, and worked diligently to provide me with options that fit my criteria. He was very patient and explained every step of the process in detail. He also provided excellent support in negotiations with the seller, ensuring that all contract clauses were properly negotiated and recorded. Throughout the process, my agent was very communicative, regularly keeping me informed of developments. He was also very responsive to my concerns and quickly answered all my questions. In the end, I purchased a home that perfectly met my needs, thanks to my agent's excellent service and attention to detail. I highly recommend his professional and detailed service to anyone looking to buy a property."} />
      <Letter letterTitle={content.letterTitle ? content.letterTitle : "Dear homeowners,"}
        letter={content.letter ? content.letter : "As an experienced real estate broker, I know how important it is for you to have an accurate estimate of the value of your property. If you are considering selling your home or apartment, a detailed appraisal can help you determine the optimal selling price. I invite you to contact me so that we can discuss your property. Leaving This evaluation will help you get a better idea of the value of your property and allow you to make informed decisions regarding the sale of your property. Please feel free to contact me by leaving your address below. I will be happy to provide you with a free and detailed evaluation of your property."} />
      <Form
        formTitle={content.formTitle ? content.formTitle : "Contact Us"}
        formText={content.formText ? content.formText : "In this table, your customers can fill in their first and last name, phone number, email address, type of request (e.g. selling a house, buying a property, renting an apartment, etc.), the address of the property to be sold (if it is a sale request), and additional comments. You can customize the column headers according to your needs."}
        formListOne={content.formListOne ? content.formListOne : "Don't miss this unique opportunity."}
        formListTwo={content.formListTwo ? content.formListTwo : "You're just one click away from finding the solution you've been looking for."}
        formListThree={content.formListThree ? content.formListThree : "Are you ready to discover the key to success?"}
        formListFour={content.formListFour ? content.formListFour : "Don't wait any longer to improve your life."}
        customerName={content.customerName ? content.customerName : "Your name"}
        phone={content.phone ? content.phone : "Your phone number"}
        message={content.message ? content.message : "Your message"} />
      <Footer />
    </div>
  );
}

export default App;
