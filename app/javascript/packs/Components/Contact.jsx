import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div className="pt-10">
      <div
        className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"
      >
        <h3 className="text-lg font-medium text-warm-gray-900">
          Envoyer moi un message
        </h3>
        <form
          action="#"
          method="POST"
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Prenom
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-500 focus:border-green-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Nom
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-500 focus:border-green-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-500 focus:border-green-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Téléphone
              </label>
              <span id="phone-optional" className="text-sm text-warm-gray-500">
                Optionnel
              </span>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-500 focus:border-green-500 border-warm-gray-300 rounded-md"
                aria-describedby="phone-optional"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Sujet
            </label>
            <div className="mt-0.5">
              <input
                type="text"
                name="subject"
                id="subject"
                className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-500 focus:border-green-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Message
              </label>
              <span id="message-max" className="text-sm text-warm-gray-500">
                Max. 500 mots
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-500 focus:border-green-500 border border-warm-gray-300 rounded-md"
                aria-describedby="message-max"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Envoyer
              <PaperAirplaneIcon
                className="ml-3 -mr-1 h-5 w-5 transform rotate-45"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
