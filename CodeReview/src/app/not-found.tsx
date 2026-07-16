import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="rounded-full bg-blue-700 px-6 py-3 text-white font-semibold">Back to Home</Link>
    </main>
  );
}







