import Link from 'next/link';

export default function services() {
    return(
        <div>
            <h1>Services we offer</h1>
            <p>our services</p>
            <ul>
                <li>
                    <Link href="/services/app-development">App Development</Link>
                </li>
                <li>
                    <Link href="/services/web-development">Website Development</Link>
                </li>
                <li>
                    <Link href="/">Back to home</Link>
                </li>
            </ul>
        </div>
    )
}