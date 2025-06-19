import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="text-center space-y-4 h-150 md:h-170 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-400">404</h1>
      <p className="text-gray-600">Bruh... Page not found 😬</p>
      <Link href="/" className="text-yellow-400 hover:scale-105 hover:text-yellow-500 transition-transform">
        Take me home
      </Link>
    </div>
  );
}
