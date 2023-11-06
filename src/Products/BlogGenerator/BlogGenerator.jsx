import BlogEditor from "./BlogEditor";
import { ConclusionField } from "./ConclusionField";
import { IntroField } from "./IntroField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const BlogGenerator = () => {
  const [openSection, setSection] = useState("");

  const openingFunctionality = (sectionName) => {
    if (openSection === sectionName) {
      setSection("");
    } else {
      setSection(sectionName);
    }
  };

  const location = useLocation();
  const outlines = location.state;
  const [outlinesList, setOutlinesList] = useState(outlines);
  console.log(outlinesList);

  return (
    <main className="flex flex-col lg:flex-row m-[50px]">
      <section className="lg:w-2/4 p-4">
        <nav className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="bg-blue-500 text-white px-1 py-1 flex items-center rounded-full">
                {openSection === "intro" ? (
                  <FontAwesomeIcon icon={faCircle} className="text-[5px]" />
                ) : (
                  <FontAwesomeIcon icon={faCircleDot} className="text-[5px]" />
                )}
              </span>
              <a
                className="ml-3 cursor-pointer"
                onClick={() => openingFunctionality("intro")}
              >
                Introduction
              </a>
            </div>
            {openSection === "intro" && <IntroField />}
          </div>

          {Array.isArray(outlinesList)
            ? outlinesList.map((out) => (
                <div key={out.id} className="space-y-2">
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white px-1 py-1 flex items-center rounded-full">
                      {openSection === out.outline ? (
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-[5px]"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCircleDot}
                          className="text-[5px]"
                        />
                      )}
                    </span>
                    <a
                      className="ml-3 cursor-pointer"
                      onClick={() => openingFunctionality(out.outline)}
                    >
                      {out.outline}
                    </a>
                  </div>
                  {openSection === out.outline && (
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
                  )}
                </div>
              ))
            : ""}
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="bg-blue-500 text-white px-1 py-1 flex items-center rounded-full">
                {openSection === "conclusion" ? (
                  <FontAwesomeIcon icon={faCircle} className="text-[5px]" />
                ) : (
                  <FontAwesomeIcon icon={faCircleDot} className="text-[5px]" />
                )}
              </span>
              <a
                className="ml-3 cursor-pointer"
                onClick={() => openingFunctionality("conclusion")}
              >
                Conclusion
              </a>
            </div>
            {openSection === "conclusion" && <ConclusionField />}
          </div>
        </nav>
      </section>
      <section className="lg:w-1/2 p-4">
        <BlogEditor />
      </section>
    </main>
  );
};
