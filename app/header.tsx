

export default function Header() {
    return (
        <div>
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </header>

        </div>)
}