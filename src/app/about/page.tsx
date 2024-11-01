import Link from 'next/link';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is the About page.</p>
            <Link href="/">Go back to Home</Link>
        </div>
    );
};

export default About;