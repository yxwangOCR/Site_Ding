import React from "react";
import {
    RocketOutlined,
    ReconciliationOutlined,
    MacCommandOutlined,
    BulbOutlined,
    ApartmentOutlined,
} from "@ant-design/icons";

const Presentation = ({ titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix, presentationText, expertiseText, approachText, networkText, communicationText, managementText, endText }) => {
    return (
        <section className="bg-marine " id="presentation">
            <h2 className="text-center font-bold py-6 text-white text-2xl">
                Presentation
            </h2>
            <div className="flex flex-col w-full justify-center items-center text-center">
                <article className="bg-white w-full p-6">
                    <h3>
                        <b>{titleOne}</b>
                    </h3>
                    <p >
                        {presentationText}
                    </p>
                </article>
                <div className="flex flex-col lg:large-style">
                    <div className="flex flex-col justify-center items-center w-[30%]">
                        <h4 className="flex text-white justify-center items-center gap-2 py-2">
                            <RocketOutlined /> <b>{titleTwo}</b>
                        </h4>
                        <article className="bg-white p-6 article-style flex justify-center items-center">
                            <p className="">
                                {expertiseText}
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[30%]">
                        <h4 className="flex text-white justify-center items-center gap-2 py-2">
                            <ReconciliationOutlined /> <b>{titleThree}</b>
                        </h4>
                        <article className="bg-white p-6 article-style flex justify-center items-center">
                            <p>
                                {approachText}
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[30%]">
                        <h4 className="flex text-white justify-center items-center gap-2 py-2">
                            <MacCommandOutlined /> <b>{titleFour}</b>
                        </h4>
                        <article className="bg-white p-6 article-style flex justify-center items-center">
                            <p>
                                {networkText}
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[30%]">
                        <h4 className="flex text-white justify-center items-center gap-2 py-2">
                            <BulbOutlined /> <b>{titleFive}</b>
                        </h4>
                        <article className="bg-white p-6 article-style flex justify-center items-center">
                            <p>
                                {communicationText}
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[30%]">
                        <h4 className="flex text-white justify-center items-center gap-2 py-2">
                            <ApartmentOutlined /> <b>{titleSix}</b>
                        </h4>
                        <article className="bg-white p-6 article-style flex justify-center items-center">
                            <p>
                                {managementText}
                            </p>
                        </article>
                    </div>
                </div>

                <div>
                    <article>
                        <p className="text-white p-2">
                            <b>
                                <em>
                                    {endText}
                                </em>
                            </b>
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
