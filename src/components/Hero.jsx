import React from "react";
import HeroImg from "../assets/Hero.png";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-[80%] my-4">
                <img src={HeroImg} alt="" className="" />
            </div>
            <div className="w-[80%] flex flex-col gap-4 justify-center items-center my-4 text-center">
                <strong>
                    Expertise, expérience, excellence - notre devise, votre confiance est
                    notre priorité
                </strong>
                <p>
                    "为家地产"可以理解为"以家为中心的地产公司"或"致力于为客户提供家的感觉的地产公司"。
                    <br />
                    这个名称的含义是，公司以家为核心，注重客户的舒适和感受，努力为客户提供满足家庭需求的房地产产品和服务。
                </p>
            </div>
        </div>
    );
};

export default Hero;
