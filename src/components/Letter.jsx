const Letter = ({ letterTitle, letter }) => {
    return (
        <section className="bg-marine flex flex-col justify-center px-12">
            <h5 className="text-justify font-bold py-6 text-white text-lg">
                {letterTitle}
            </h5>
            <article className="flex flex-col justify-center text-justify text-white">
                <p><em>{letter}</em></p>
            </article>

        </section>
    )
}

export default Letter