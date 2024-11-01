import Link from 'next/link';

const AppDevelopment = () => {
    return (
        <div>
            <h1>App Development Services</h1>
            <p>This page describes our app development services.</p>
            <Link href="/service">Back to Services</Link>
        </div>
    );
};

export default AppDevelopment;
