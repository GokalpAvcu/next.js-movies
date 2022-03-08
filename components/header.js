import Link from "next/link"

export default function Header(){
    return <div className="header">
        <nav>
            <ul>
                <li>
                    <Link  href="/">
                        Anasayfa
                        </Link>
                </li>
                <li>
                    <Link  href="/about" >
                        Hakkında
                        </Link>
                </li>
                <li>
                    <Link href="/blog">
                    Blog
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}
