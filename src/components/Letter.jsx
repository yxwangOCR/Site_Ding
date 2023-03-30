import Profile3 from "../assets/profile3.jpeg"

const Letter = ({ letterTitle, letter }) => {
    return (
        <section className="bg-marine flex flex-col gap-4 justify-center items-center p-6 w-full md:flex-row">
            <img src={Profile3} className="rounded-full w-[15rem] h-[15rem] object-cover" />
            <div className="w-full text-md text-justify flex flex-col gap-4 md:w-[50%]">
                <h5 className="flex font-bold text-white text-xl">
                    {letterTitle}
                </h5>
                <article className="text-white text-justify">
                    <p><em>{letter}</em></p>
                </article>
            </div>
        </section>
    )
}

export default Letter