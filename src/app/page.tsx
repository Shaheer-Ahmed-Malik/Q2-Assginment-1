import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Our Website!</h1>
            <p>Select a page to navigate:</p>
            <ul>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link href="/services">Our Services</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;