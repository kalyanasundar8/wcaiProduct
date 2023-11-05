import React from "react";

export const BlogForm = () => {
  return (
    <main className="px-4 lg:px-0">
      <div className="text-center lg:text-left">
        <h1 className="mb-3 text-2xl lg:text-3xl font-bold">Blog Generator</h1>
        <p className="mb-6 text-gray-400 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          suscipit nemo libero impedit quasi iusto quod incidunt.
        </p>
      </div>
      <form className="mt-4 lg:mt-0">
        <div className="mb-6">
          <label htmlFor="product" className="block font-semibold mb-3">
            Product (or) Service
          </label>
          <input
            type="text"
            id="product"
            className="w-full px-3 py-3 border rounded-[3px] outline-blue-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-3">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-6 border rounded-[3px] outline-blue-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="keywords" className="block font-semibold mb-3">
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            className="w-full px-3 py-3 border rounded-[3px] outline-blue-400"
          />
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tone" className="block font-semibold mb-3">
                Tone
              </label>
              <input
                type="text"
                id="tone"
                className="w-full px-3 py-3 border rounded-[3px] outline-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="outputLanguage"
                className="block font-semibold mb-3"
              >
                Output Language
              </label>
              <input
                type="text"
                id="outputLanguage"
                className="w-full px-3 py-3 border rounded-[3px] outline-blue-400"
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left flex items-center justify-end">
          <button className="px-4 py-2 font-semibold bg-blue-500 text-white rounded-[3px] hover:bg-blue-700 focus:outline-none focus:ring">
            Generate
          </button>

          <button className="ml-3 px-4 py-2 font-semibold bg-blue-500 text-white rounded-[3px] hover:bg-blue-700 focus:outline-none focus:ring">
            Next
          </button>
        </div>
      </form>
    </main>
  );
};
