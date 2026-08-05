import React from "react";
import "../index.css";

function Home() {
  return (
    <main className="home">

      <section className="hero">
        <img
          className="portrait"
          src="wolff-portrait.png"
          alt="Wolfgang Wolff"
        />

        <div className="hero-text">
          <h1>Discover the Art and Life of Wolfgang Wolff</h1>

          <p>
            Explore the remarkable journey of artist Wolfgang Wolff,
            from his escape from Nazi Germany to his life in Tahiti.
          </p>

          <a href="/exhibits">
            <button type="button">Explore Collection</button>
          </a>
        </div>
      </section>

      <section className="featured-art">
        <h2>Featured Artwork</h2>

        <img
          src="featured-art.jpg"
          alt="Featured artwork"
        />

        <h3>Artwork Title</h3>

        <p>
          A short description of the work, its history,
          and why it represents Wolfgang's artistic vision.
        </p>
      </section>

      <section className="diary">
        <h2>From the Diary</h2>

        <img
          src="diary-page.png"
          alt="Wolfgang diary page/drawing"
        />

        <blockquote>
          "Sample diary quote goes here..."
        </blockquote>

        <p>— Wolfgang Wolff, year</p>
      </section>

      <footer>
        <p>Wolfgang Wolff Foundation</p>
        <p>Wikipedia • Instagram • Contact</p>
      </footer>

    </main>
  );
}

export default Home;