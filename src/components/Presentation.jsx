import React from "react";
import { RocketOutlined, ReconciliationOutlined, MacCommandOutlined, BulbOutlined, ApartmentOutlined } from "@ant-design/icons";

const Presentation = () => {
    return (
        <section className="bg-marine " id="presentation">
            <h2 className="text-center font-bold py-6 text-white text-2xl">
                Presentation
            </h2>
            <div className="flex flex-col w-full justify-center items-center text-center md:flex-row">
                <article className="bg-white w-full md:w-[30%] p-6">
                    <h3>
                        <b>Bonjour et bienvenue !</b>
                    </h3>
                    <p>
                        Je suis un courtier immobilier expérimenté, spécialisé dans la vente
                        et l'achat de biens immobiliers pour mes clients. Mon objectif
                        principal est de fournir un service de qualité exceptionnelle et de
                        vous aider à réaliser vos rêves immobiliers. Voici quelques-uns de
                        mes atouts professionnels qui pourraient vous intéresser :
                    </p>
                </article>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="flex text-white justify-center items-center gap-2 py-2">
                        <RocketOutlined /> <b>Expertise</b>
                    </h4>
                    <article className="bg-white w-full md:w-[30%] p-6">
                        <p>
                            Fort de plusieurs années d'expérience dans le domaine immobilier,
                            je suis un expert dans le marché immobilier. Je connais bien les
                            tendances du marché, les quartiers les plus recherchés et les prix
                            de vente courants. Je suis en mesure de vous aider à obtenir la
                            meilleure offre possible pour votre propriété, que vous cherchiez
                            à vendre ou à acheter.
                        </p>
                    </article>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="flex text-white justify-center items-center gap-2 py-2">
                        <ReconciliationOutlined /> <b>Approche personnalisée</b>
                    </h4>
                    <article className="bg-white w-full md:w-[30%] p-6">
                        <p>
                            Je crois que chaque client a des besoins et des objectifs
                            différents. C'est pourquoi j'adopte une approche personnalisée
                            pour chaque client. Je prends le temps de comprendre vos besoins
                            et vos attentes, et je travaille avec vous pour trouver une
                            solution adaptée à vos besoins.
                        </p>
                    </article>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="flex text-white justify-center items-center gap-2 py-2">
                        <MacCommandOutlined /> <b>Réseau étendu</b>
                    </h4>
                    <article className="bg-white w-full md:w-[30%] p-6">
                        <p>
                            Je dispose d'un réseau étendu de professionnels de l'immobilier, y
                            compris des notaires, des courtiers hypothécaires, des
                            entrepreneurs en construction, des inspecteurs en bâtiment, et
                            bien plus encore. Je suis en mesure de vous recommander les
                            meilleures personnes pour vous aider à réaliser vos projets
                            immobiliers.
                        </p>
                    </article>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="flex text-white justify-center items-center gap-2 py-2">
                        <BulbOutlined /> <b>Communication transparente</b>
                    </h4>
                    <article className="bg-white w-full md:w-[30%] p-6">
                        <p>
                            Je crois en une communication honnête et transparente avec mes clients. Je vous tiendrai informé à chaque étape de votre transaction immobilière et je répondrai à toutes vos questions rapidement et efficacement.
                        </p>
                    </article>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="flex text-white justify-center items-center gap-2 py-2">
                        <ApartmentOutlined /> <b>Gestion de projet</b>
                    </h4>
                    <article className="bg-white w-full md:w-[30%] p-6">
                        <p>
                            J'ai une grande expérience dans la gestion de projets immobiliers complexes. Je peux vous aider à coordonner les différentes étapes de votre transaction immobilière, en veillant à ce que tout se déroule sans problème.
                        </p>
                    </article>
                </div>
                <div>
                    <article>
                        <p className="text-white p-2"><b><em>Je suis convaincu que mes atouts professionnels peuvent vous aider à réaliser vos rêves immobiliers. N'hésitez pas à me contacter pour discuter de votre projet immobilier. Je suis impatient de travailler avec vous !</em></b></p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
