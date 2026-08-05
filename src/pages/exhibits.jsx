import React from "react";
import "../index.css";

const Exhibits = () => {
  const exhibits = [
    {
      years: "1920–1935",
      title: "Early Years in Germany",
      description:
        "Wolfgang's childhood and formative years in Alsace-Lorraine, as well as his time in University.",
      image: "1920-1935.png",
    },
    {
      years: "1936–1945",
      title: "1936-1945: Fleeing Nazi Germany and Escape to Tahiti",
      description:
        "",
      image: "wwii.jpg",
    },
    {
      years: "1946–1965",
      title: "A New Beginning",
      description:
        "",
      image: "new-beginning.jpg",
    },
    {
      years: "1966–1980",
      title: "Later Works",
      description:
        "",
      image: "mature-works.jpg",
    },
    {
      years: "1981–1994",
      title: "Legacy",
      description:
        "",
      image: "legacy.jpg",
    },
  ];

  return (
    <main className="exhibits-page">
      <div className="exhibits-header">
        <h1>
          Explore Wolfgang Wolff's life through artwork, photographs,
          journal entries, and personal history organized by era.
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