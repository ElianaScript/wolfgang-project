import "./banner.css";
import background from '/public/logo-option-1.png'

export default function Banner() {
    return (
        <header className="banner">
            <h1> Wolfgang Wolff</h1>
            <p>Preserving the life, artwork, and writings of Wolfgang...</p>

            <nav className="banner-nav">
                <a href="/">Home</a>
                <a href="/2exhibits">Exhibits</a>
                <a href="/3biography">Biography</a>
                <a href="/4timeline">Timeline</a>
                <a href="/5german">German</a>
                <a href="/6diaries">Diaries</a>
            </nav>
        </header>
    )
}