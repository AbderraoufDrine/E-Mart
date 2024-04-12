"use client";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Menu from "./Menu";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../app/context/CartContext";
import cartEndpoint from "../utils/cartEndpoint";
import Cart from "../components/Cart";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);

  const getCartItems = () => {
    cartEndpoint
      .getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        res?.data?.data.forEach((item) => {
          setCart((prevCart) => [
            ...prevCart,
            {
              id: item.id,
              product: item?.attributes?.products?.data[0],
            },
          ]);
        });
      });
  };

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
    user && getCartItems();
    if (showMenu) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [showMenu, user]);
  return (
    !isLoggedIn && (
      <header className="bg-white">
        <div className="mx-auto flex h-16 w-screen items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
          <Image src={logo} alt="lgog" width={100} height={100} />
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Explore{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-500 transition hover:text-teal-600/75 sm:block"
                    href="/sign-up"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="hidden items-center justify-center gap-5 md:flex">
                  <h2 className="flex gap-1 cursor-pointer">
                    <ShoppingCart onClick={() => setShowCart(!showCart)} />(
                    {cart?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {showCart && <Cart />}
                </div>
              )}

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {showMenu && <Menu user={user} />}
      </header>
    )
  );
};

export default Header;
