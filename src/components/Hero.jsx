import HeroImg from "../assets/Hero.png";

const Hero = ({ sloganText }) => {
    return (
        <main className="flex flex-col justify-center items-center gap-4 md:flex-row">
            <div className="w-[70%] my-4 flex justify-center px-4">
                <img src={HeroImg} alt="" className="w-[50%]" />
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
