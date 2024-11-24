import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <h1 className="text-2xl font-bold">Robin blog</h1>

            <nav className="space-x-4">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/posts" className="hover:text-gray-300">Posts</Link>
            </nav>
        </header>
    );
}

export default Header;