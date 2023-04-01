import React from "react";
import {
    RocketOutlined,
    ReconciliationOutlined,
    MacCommandOutlined,
    BulbOutlined,
    ApartmentOutlined,
} from "@ant-design/icons";

const Presentation = ({ sectionTitle, titleOne, titleTwo, titleThree, titleFour, titleFive, titleSix, presentationText, expertiseText, approachText, networkText, communicationText, managementText, endText }) => {
    return (
        <section className="bg-marine flex flex-col justify-center items-center px-6" id="about">
            <h2 className="text-center font-bold py-6 text-white text-2xl">
                {sectionTitle}
            </h2>
            <div className="flex flex-col justify-center items-center text-center lg:w-[50%]">
                <div className="text-white">
                    <article className="p-6 rounded-lg">
                        <h3>
                            <b>{titleOne}</b>
                        </h3>
                        <p><em>{presentationText}</em></p>
                    </article>
                </div>

                <div className="flex flex-col justify-center items-center md:w-[60%]">
                    <div className="">
                        <h4 className="flex text-white justify-center items-center gap-2 py-4">
                            <RocketOutlined /> <b>{titleTwo}</b>
                        </h4>
                        <article className="bg-white p-6 flex justify-center items-center rounded-lg">
                            <p className="">
                                {expertiseText}
                            </p>
                        </article>
                    </div>
                    <div className="">
                        <h4 className="flex text-white justify-center items-center gap-2 py-4">
                            <ReconciliationOutlined /> <b>{titleThree}</b>
                        </h4>
                        <article className="bg-white p-6 flex justify-center items-center rounded-lg">
                            <p>
                                {approachText}
                            </p>
                        </article>
                    </div>
                    <div className="">
                        <h4 className="flex text-white justify-center items-center gap-2 py-4">
                            <MacCommandOutlined /> <b>{titleFour}</b>
                        </h4>
                        <article className="bg-white p-6 flex justify-center items-center rounded-lg">
                            <p>
                                {networkText}
                            </p>
                        </article>
                    </div>
                    <div className="">
                        <h4 className="flex text-white justify-center items-center gap-2 py-4">
                            <BulbOutlined /> <b>{titleFive}</b>
                        </h4>
                        <article className="bg-white p-6 flex justify-center items-center rounded-lg">
                            <p>
                                {communicationText}
                            </p>
                        </article>
                    </div>
                    <div className="">
                        <h4 className="flex text-white justify-center items-center gap-2 py-4">
                            <ApartmentOutlined /> <b>{titleSix}</b>
                        </h4>
                        <article className="bg-white p-6 flex justify-center items-center rounded-lg">
                            <p>
                                {managementText}
                            </p>
                        </article>
                    </div>
                </div>

                <div>
                    <article>
                        <p className="text-white p-8">
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
