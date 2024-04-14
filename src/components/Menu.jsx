"use client";
import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import cartEndpoint from "../utils/cartEndpoint";

const Menu = ({ user }) => {
  const [cartLength, setCartLength] = useState(0);
  const getUserCartItems = () => {
    cartEndpoint
      .getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        setCartLength(res?.data?.data?.length);
      });
  };
  useEffect(() => {
    user && getUserCartItems();
  }, [user]);
  return (
    <div className="flex h-[92vh] w-screen flex-col justify-between border-e bg-white md:hidden transition duration-300 ease-in-out">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 text-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#prod"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#footer"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        {user && (
          <div className="flex items-center justify-between p-3 gap-5">
            <UserButton afterSignOutUrl="/" />
            <h2 className="flex gap-1 cursor-pointer">
              <ShoppingCart />({cartLength})
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
