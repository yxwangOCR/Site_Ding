import HeroImg from "../assets/Hero.png";

const Hero = ({ sloganText }) => {
    return (
        <main className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-[80%] my-4">
                <img src={HeroImg} alt="" className="" />
            </div>
            <div className="w-[80%] flex flex-col gap-4 justify-center items-center my-4 text-center">
                <strong>
                    {sloganText}
                </strong>
            </div>
        </main>
    );
};

export default Hero;
