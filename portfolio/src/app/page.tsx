import React from 'react';
import Navbar from '@/components/header';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600">
        Hi! I'm a developer passionate about creating amazing web applications.
        Check out some of my projects below.
      </p>

      {/* Add more sections for projects, skills, contact, etc. */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example project card */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
          <p className="text-gray-600">Description of the project.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}
