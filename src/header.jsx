import './Header.css';

export default function Header() {
    return (
        <header>
        <label class="logo">HOMEDECOR</label>
        <label id="icon">
            <i class="fa-solid fa-bars"></i>
        </label>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Design Online</a></li>
                <li><a href="#">Learn More</a></li>
            </ul>
        </nav>
    </header>
    );
}