import Link from 'next/link';

const WebsiteDevelopment = () => {
    return (
        <div>
            <h1>Website Development Services</h1>
            <p>Web development services we offer are as follows:</p>
            <ul>
                <li>Single page</li>
                <li>2-3 pages</li>
                <li>5 or more pages</li>
            </ul>
            <br />
            <Link href="/service">Back to Service page</Link>
        </div>
    );
};

export default WebsiteDevelopment;
