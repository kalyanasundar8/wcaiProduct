import { useState } from "react";
import { BlogForm } from "./BlogForm";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../Common/Loader";

export const BlogHome = () => {
  // Outline State
  const [outelines, setOutlines] = useState([
    { id: 1, outline: "Facebook is worst." },
    { id: 2, outline: "Insta is worst." },
    { id: 3, outline: "Twitter is worst." },
    { id: 4, outline: "Whatsapp is destroyer." },
  ]);

  // Storing the selected outlines from this state
  const [selectedOutlines, setSelectedOutlines] = useState([]);
  console.log(selectedOutlines);

  const outlineList = (outlineId, outlineName) => {
    // Checking the selected itemId and the outlineId
    const isSelected = selectedOutlines.some((item) => item.id === outlineId);

    // Then check the seleceted id is already selected then remove it
    if (isSelected) {
      setSelectedOutlines(
        selectedOutlines.filter((item) => item.id !== outlineId)
      );
    } else {
      const selected = { id: outlineId, outline: outlineName };
      setSelectedOutlines([...selectedOutlines, selected]);
    }
  };

  // Generate form button switching
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  // Send the selected outlines when the user click the next button
  const navigate = useNavigate();
  const clickNext = () => {
    navigate("/generate-blog", { state: selectedOutlines });
  };

  return (
    <main className="container mx-auto py-4">
      <div className="flex flex-col lg:flex-row my-[50px] gap-10">
        {/* Form for outline generating */}
        <div className="lg:w-[800px] p-4">
          <main className="px-4 lg:px-0">
            <div className="text-center lg:text-left">
              <h1 className="mb-3 text-2xl lg:text-3xl font-bold">
                Blog Generator
              </h1>
              <p className="mb-6 text-gray-400 text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, suscipit nemo libero impedit quasi iusto quod
                incidunt.
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
                <label
                  htmlFor="description"
                  className="block font-semibold mb-3"
                >
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
                { loading ? (<Loader />) : ""}
                <button onClick={handleLoading} className="px-4 py-2 font-semibold bg-blue-500 text-white rounded-[3px] hover:bg-blue-700 focus:outline-none focus:ring">
                  Generate
                </button>

                <button
                  onClick={() => clickNext()}
                  className="ml-3 px-4 py-2 font-semibold bg-blue-500 text-white rounded-[3px] hover:bg-blue-700 focus:outline-none focus:ring"
                >
                  Next
                </button>
              </div>
            </form>
          </main>
        </div>
        {/* Outlines */}
        <div
          className="lg:w-1/3 p-4 overflow-y-auto"
          style={{ maxHeight: "750px" }}
        >
          <main className="px-4 lg:px-0 relative">
            <div className="text-center lg:text-left">
              <h1 className="text-xl lg:text-xl mb-3">Generated Outlines</h1>
              <p className="text-gray-400 text-sm lg:text-base mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            {Array.isArray(outelines) ? (
              outelines.map((out) => (
                <div
                  key={out.id}
                  className={`cursor-pointer scrollable-content mb-4 max-w-screen-md mx-auto border-2 border-gray-300 p-3 rounded-[3px] ${
                    selectedOutlines.some((item) => item.id === out.id)
                      ? "border-blue-400 text-blue-500"
                      : "text-gray-400 hover:border-blue-400 hover:text-blue-500"
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => outlineList(out.id, out.outline)}
                >
                  <p>{out.outline}</p>
                </div>
              ))
            ) : (
              <p>
                Fill the details in that form and generate outlines for your
                blog
              </p>
            )}
          </main>
        </div>
      </div>
    </main>
  );
};
