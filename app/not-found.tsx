import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
