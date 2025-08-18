import Link from 'next/link';

export default function Header() {
	return <header className="bg-white shadow-sm border-b text-3xl">
		<div className="max-w-6xl mx-auto px-1 py-2">
			<nav className="flex items-center justify-between">
				<Link href="/" className="text-gray-600 hover:text-gray-900">
				Felipe Dessoy Caraballo
				</Link>
			<div className="space-x-15">
				<Link href="/" className="text-gray-600 hover:text-gray-900">
				Home
				</Link>
				<Link href="/projects" className="text-gray-600 hover:text-gray-900">
				Projects
				</Link>
				<Link href="/experience" className="text-gray-600 hover:text-gray-900">
				Experience
				</Link>
				<Link href="/contact" className="text-gray-600 hover:text-gray-900">
				Contact
				</Link>
			</div>
			</nav>
		</div>
	</header>
}