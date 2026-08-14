import React from "react";
import "../index.css";

const Exhibits = () => {
  const exhibits = [
    {
      years: "1909–1934",
      title: "Early Years in Germany",
      description:
        "Wolfgang's childhood and formative years in Alsace-Lorraine, as well as his time in University.",
      image: "1920-1935.png",
    },
    {
      years: "1934–1948",
      title: "Fleeing Nazi Germany and Escape to Tahiti",
      description: "Wolfgang and Max leave Germany, escaping to Tahiti where Wolfgang ends up in two French prisoner camps.",
      image: "tahiti.png",
    },
    {
      years: "1948–1994",
      title: "A New Beginning",
      description: "Wolfgang, Max, and their son Goetz, leave Tahiti for the United States, moving to Los Angeles.",
      image: "losangeles.png",
    },
  ];

  return (
    <main className="exhibits-page">
      <div className="exhibits-header">
        <h1>
          Explore Wolfgang Wolff's life through artwork, photographs,
          journal entries, and personal history organized by year.
        </h1>
      </div>

      <section className="card-grid">
        {exhibits.map((era) => (
          <div className="exhibit-card" key={era.years}>
            <img src={era.image} alt={era.title} />

            <div className="card-content">
              <span>{era.years}</span>

              <h2>{era.title}</h2>

              <p>{era.description}</p>

              <button>Explore →</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Exhibits;