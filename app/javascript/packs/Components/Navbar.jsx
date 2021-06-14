import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import React from 'react';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 fixed z-10 bg-white md:w-full">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex md:items-center sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="border-indigo-500 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Dihya
                  </NavLink>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="border-indigo-500 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Accueil
                  </NavLink>
                  <NavLink
                    exact
                    to="/blog"
                    activeClassName="border-indigo-500 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    exact
                    to="/video"
                    activeClassName="border-indigo-500 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Mes vidéo
                  </NavLink>
                  <NavLink
                    exact
                    to="/contact"
                    activeClassName="border-indigo-500 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="pt-2 pb-4 space-y-1 ">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                exact
                to="/about"
                activeClassName="bg-indigo-50 border-indigo-500 text-indigo-700"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Dihya
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="border-indigo-500 text-gray-900"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Accueil
              </NavLink>
              <NavLink
                exact
                to="/blog"
                activeClassName="bg-indigo-50 border-indigo-500 text-indigo-700"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Blog
              </NavLink>

              <NavLink
                exact
                to="/video"
                activeClassName="bg-indigo-50 border-indigo-500 text-indigo-700"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Mes vidéo
              </NavLink>
              <NavLink
                exact
                to="/contact"
                activeClassName="bg-indigo-50 border-indigo-500 text-indigo-700"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Contact
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
