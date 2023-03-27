import "./App.css";
import { useEffect, useState } from 'react';
import Hero from "./components/Hero";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
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
      <div className="flex">
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
      <Footer />
    </div>
  );
}

export default App;
