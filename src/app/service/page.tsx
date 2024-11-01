import Link from 'next/link';

const Service = () => {
    return (
        <div>
            <h1>Our Services</h1>
            <p>We offer the following services:</p>
            <ul>
                <li>
                    <Link href="/service/app-development">App Development</Link>
                </li>
                <li>
                    <Link href="/service/website-development">Website Development</Link>
                </li>
            </ul>
        </div>
    );
};

export default Service;
