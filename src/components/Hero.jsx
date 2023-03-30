import Profile1 from "../assets/profile1.jpeg";

const Hero = ({ sloganText }) => {
    return (
        <main className="flex flex-col justify-center items-center gap-4 md:flex-row">
            <div className="flex justify-center items-center my-4">
                <img src={Profile1} alt="" className="w-[15rem] rounded-lg" />
            </div>
            <div className="w-[70%] flex flex-col gap-4 justify-center items-center my-4 text-center px-4">
                <strong className="text-lg text-marine md:text-3xl">
                    {sloganText}
                </strong>
            </div>
        </main>
    );
};

export default Hero;
