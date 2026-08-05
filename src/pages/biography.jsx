import React from "react";
import "../index.css";

const Biography = () => {
    return (
        <main className="biography-page">
            <div className="bio-intro">
                <h1>The Life of Wolfgang Wolff</h1>
                <p className="bio-subtitle">
                    As told by his son, Goetz Wolff.
                </p>
            </div>
            <div className="bio-image">
                <img
                    src="/public/portrait2.jpg"
                    alt="Portrait of Wolfgang Wolff"
                />
            </div>

            <section className="bio-content">
                <div className="bio-section">
                    <p>
                        "My father was born in St. Louis, Alsace-Lorraine in 1909, which at the time was apart of the German Empire and is now apart of France.
                        The son of a local judge, Wolfgang wanted to follow in his father's footsteps. However, he had a passion for art--oil painting, watercolor,
                        woodcut--anything he could study the intricate nature of. He would replicate the animals he saw in his hometown, as well as the landscapes surrounding his childhood home."
                    </p>
                </div>
            </section>

        </main>
    );
};

export default Biography;