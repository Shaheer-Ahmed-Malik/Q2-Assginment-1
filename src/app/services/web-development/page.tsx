import Link from "next/link";

export default function sample2() {
    return(
        <div>
            <h1>Web development</h1>
            <p>back to 
                <Link href="/services"> services page</Link>
                <br />

            </p>

        </div>
    )
}