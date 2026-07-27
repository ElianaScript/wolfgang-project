import "./banner.css";
import background from '/public/logo-option-1.png'

export default function Banner() {
    return (
        <header className="banner">
            <nav className="banner-nav">
                <a href="/">Home</a>
                <a href="/exhibits">Exhibits</a>
                <a href="/biography">Biography</a>
                <a href="/timeline">Timeline</a>
                <a href="/german">German</a>
                <a href="/diaries">Diaries</a>
            </nav>
        </header>
    )
}