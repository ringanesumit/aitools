import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AItoolsData from "./AITools/toolsData";
import contentData from "./AITools/popUp";
import "./App.css";

const toolsData = AItoolsData;

const App = () => {
  // State management
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Initialize categories
  useEffect(() => {
    const uniqueCategories = [...new Set(toolsData.map(tool => tool.category))];
    setCategories(uniqueCategories);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
  };

  // Category handling
  const handleCategorySelect = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const applyCategoryFilter = () => {
    setShowCategoryModal(false);
    setCurrentPage(1);
  };

  // Filter tools
  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(tool.category);
    return matchesSearch && matchesCategory;
  });

  // Pagination
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategories]);

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTools = filteredTools.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Popup handling
  const showInfoPopup = (title, content) => {
    setPopupTitle(title);
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const hideInfoPopup = () => {
    setIsPopupVisible(false);
    setPopupTitle("");
    setPopupContent("");
  };

  // Filter categories for modal search
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Helmet>
        <title>AI Tools Directory</title>
        <meta name="description" content="Explore and discover the latest AI tools in our comprehensive directory." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Tools Directory" />
        <meta property="og:description" content="Find the best AI tools to enhance productivity and innovation." />
        <meta property="og:image" content="https://www.aitooldirectory.io/aitooldirectory.png" />
        <meta property="og:url" content="https://www.aitooldirectory.io" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <header className="header">
        <h1>
          <a href="/" className="logo-link">
            <img
              src={require("./aitool.png")}
              alt="AI Tools Directory Logo"
              className="logo-image"
            />
          </a>
        </h1>
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
      {/* Category Selection Modal */}
      {showCategoryModal && (
        <div className="category-modal">
          <div className="modal-content">
            <h3>Select Categories ({selectedCategories.length})</h3>
            <input
              type="text"
              placeholder="Search categories..."
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              className="category-search"
            />
            <div className="category-list">
              {filteredCategories.map(category => (
                <label key={category} className="category-item">
                  <input class="selectcategory"
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategorySelect(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
            <div className="modal-actions">
              <button onClick={() => setShowCategoryModal(false)}>Cancel</button>
              <button onClick={applyCategoryFilter}>Apply</button>
            </div>
          </div>
        </div>
      )}

      {/* Info Popup */}
      {isPopupVisible && (
        <>
          <div className="overlay" onClick={hideInfoPopup}></div>
          <div className="popup">
            <div className="popup-header">{popupTitle}</div>
            <div
              className="popup-content"
              dangerouslySetInnerHTML={{ __html: popupContent }}
            ></div>
            <button className="popup-close" onClick={hideInfoPopup}>
              Close
            </button>
          </div>
        </>
      )}     

      <section className="hero">
        <div className="filters">
          <input
            type="text"
            placeholder="Search for a tool..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
          <button 
            className="category-button"
            onClick={() => setShowCategoryModal(true)}
          >
            Select Categories {selectedCategories.length > 0 && `(${selectedCategories.length})`}
          </button>

          <span className="tool-count">
            {filteredTools.length} results
          </span>
        </div>
      </section>

      <section className="features">
        <div className="tool-grid">
          {displayedTools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <img
                src={require("./logo/" + tool.icon)}
                alt={`${tool.name} icon`}
              />
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
        </section>
        {filteredTools.length > 0 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
        {filteredTools.length === 0 && <div>No results found</div>}
      

      <section className="cta">
        <h3>Join the AI Revolution</h3>
        <p>Sign up now to access the latest AI tools and stay ahead of the curve.</p>
        <button className="contact">Get Started</button>
      </section>

      <footer className="footer">
        <div className="footer-menu">
          <button onClick={() => showInfoPopup("About Us", contentData.aboutUs)}>
            About Us
          </button>
          <button onClick={() => showInfoPopup("Privacy Policy", contentData.privacyPolicy)}>
            Privacy Policy
          </button>
          <button onClick={() => showInfoPopup("Terms of Use", contentData.termsOfUse)}>
            Terms of Use
          </button>
          <button onClick={() => showInfoPopup("Contact Us", contentData.contactUs)}>
            Contact Us
          </button>
        </div>
        <div className="footer-right">
          <p>© 2025 AIToolDirectory.V3</p>
        </div>
      </footer>
    </div>
  );
};

export default App;