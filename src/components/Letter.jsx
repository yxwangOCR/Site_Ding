const Letter = ({ letterTitle, letter }) => {
    return (
        <section className="bg-marine flex justify-center p-12 w-full">
            <div className="w-full text-md text-justify md:w-[50%]">
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