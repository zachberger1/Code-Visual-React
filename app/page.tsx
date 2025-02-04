import React from "react";
import Head from "next/head";
// import Image from "next/image";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Software Solutions</title>
        <meta name="description" content="Innovative Software Solutions for Your Business" />
      </Head>

      <Header />


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Innovative Software Solutions for Your Business</h2>
        <p className="mt-4 text-lg">Helping businesses thrive with cutting-edge technology.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition">Get a Free Quote</button>
      </section>

      {/* Services Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="p-6 border rounded-lg">
            <FaLaptopCode className="text-blue-600 text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
            <p className="mt-2 text-gray-600">Custom websites and web apps tailored to your needs.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <FaMobileAlt className="text-blue-600 text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Mobile Apps</h3>
            <p className="mt-2 text-gray-600">Innovative and user-friendly mobile applications.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <FaServer className="text-blue-600 text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">IT Consulting</h3>
            <p className="mt-2 text-gray-600">Expert guidance to optimize your IT strategy.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 text-center px-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600">We are a team of passionate developers committed to delivering top-notch software solutions.</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>Contact us: bergersinisrael@gmail.com | Follow us on social media</p>
        <p className="mt-2">Powered by Company Name</p>
      </footer>
    </div>
  );
}
