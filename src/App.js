import React, { useState, useEffect } from "react";
import AItoolsData from "./AITools/toolsData";
import contentData from "./AITools/popUp";
import Select from "react-select";
import "./App.css";

const toolsData = AItoolsData;

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Theme toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
  };

  // PopUp Data
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Functions to show and hide the popup
  const showPopup = (title, content) => {
    setPopupTitle(title);
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
    setPopupTitle("");
    setPopupContent("");
  };

  // Filter tools based on search and category
  const filteredTools = toolsData.filter(
    (tool) =>
      (category === "all" || tool.category === category) &&
      tool.name.toLowerCase().includes(search.toLowerCase())
  );

  // Reset currentPage if filters change
  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [search, category]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTools = filteredTools.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);

      // Smooth scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Get unique categories from toolsData
  const categories = ["all", ...new Set(toolsData.map((tool) => tool.category))];
  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat === "all" ? "All Categories" : cat,
  }));

  // Handle Select onChange to update the category state
  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption ? selectedOption.value : "all");
  };

  // Count total tools
  const totalToolsCount = toolsData.length;
  const categoryCount = category === "all" 
    ? totalToolsCount
    : filteredTools.length;

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="header">
        <h1>AI Tools Directory</h1>
        <div
          className="theme-toggle"
          onClick={toggleTheme}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            padding: "10px",
            borderRadius: "50%",
            background: isDarkMode ? "#333" : "#eee",
            color: isDarkMode ? "white" : "black",
          }}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </div>
      </header>

      <section className="hero">
        <div className="filters">
          <input
            type="text"
            placeholder="Search for a tool..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="category-filter">
            <Select
              options={categoryOptions}
              value={categoryOptions.find((option) => option.value === category) || null}
              onChange={handleCategoryChange}
              placeholder="Select Category"
              isClearable
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: '300px',  // Set dropdown width to 300px
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black',  // Set color of the selected value to black
                }),
                option: (provided) => ({
                  ...provided,
                  color: 'black',  // Set color of the options to black
                }),
                menu: (provided) => ({
                  ...provided,
                  color: 'black',  // Set color of the dropdown menu to black
                }),
              }}
            />            
          </div>          
          <span className="tool-count">
              {category === "all" ? `${totalToolsCount} results` : `${categoryCount} results`}
            </span>
        </div>
      </section>

      <section id="features" className="features">
        <div>
          <main>
            <div className="tool-grid">
              {displayedTools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <img
                    src={require("./logo/" + tool.icon)}
                    alt={`${tool.name} icon`}
                  />
                  <h3 className="toolname">{tool.name}</h3>
                  <p>{tool.description}</p>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </main>
          {filteredTools.length > 0 && (
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
          {filteredTools.length === 0 && (
            <div>No results found</div>
          )}
        </div>
      </section>

      <section className="cta">
        <h3>Join the AI Revolution</h3>
        <p>Sign up now to access the latest AI tools and stay ahead of the curve.</p>
        <button>Get Started</button>
      </section>

      <footer className="footer">
        <div className="footer-menu">
          <button
            onClick={() =>
              showPopup("About Us", contentData.aboutUs)
            }
          >
            About Us
          </button>
          <button
            onClick={() =>
              showPopup("Privacy Policy", contentData.privacyPolicy)
            }
          >
            Privacy Policy
          </button>
          <button
            onClick={() =>
              showPopup("Terms of Use", contentData.termsOfUse)
            }
          >
            Terms of Use
          </button>
          <button
            onClick={() =>
              showPopup("Contact Us", contentData.contactUs)
            }
          >
            Contact Us
          </button>
        </div>
        <div className="footer-right">
          <p>© 2025 AIToolDirectory.V2</p>
        </div>
      </footer>

      {/* Overlay and Popup */}
      {isPopupVisible && (
        <>
          <div className="overlay" onClick={hidePopup}></div>
          <div className="popup">
            <div className="popup-header">{popupTitle}</div>
            <div
              className="popup-content"
              dangerouslySetInnerHTML={{ __html: popupContent }}
            ></div>
            <button className="popup-close" onClick={hidePopup}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
