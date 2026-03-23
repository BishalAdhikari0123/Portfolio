import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <section className="py-20 min-h-[65vh] bg-black text-white flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-gray-400 mb-8">This page does not exist yet. Let’s get you back to useful content.</p>
        <Link to="/" className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors">
          Go to homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
