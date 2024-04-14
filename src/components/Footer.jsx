"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const { user } = useUser();

  return (
    user && (
      <footer className="mt-32 bg-gray-100" id="footer">
        <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <Image src="/logo.svg" alt="logo" width={120} height={70} />
          </div>

          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
            Checkout our other sites and contribute to Them!
          </p>

          <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://animator-agency-v2.vercel.app/"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://mapboxtravelapp.netlify.app/"
              >
                Locations
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  );
};

export default Footer;
