import React, { useState } from "react";
import AItoolsData from "./AITools/toolsData";
//import {AboutUs} from "./logo/about-us-placeholder.png";
import "./App.css";

const toolsData = AItoolsData;

const App = () => {
  const [view, setView] = useState("home"); // Possible values: 'home', 'tools', 'contact', 'about'
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter tools based on search and category
  const filteredTools = toolsData.filter(
    (tool) =>
      (category === "all" || tool.category === category) &&
      tool.name.toLowerCase().includes(search.toLowerCase())
  );

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
    }
  };

  // Get unique categories from toolsData
  const categories = ["all", ...new Set(toolsData.map((tool) => tool.category))];

  return (
    <div className="app">
      <header>
        <h1>AI Tools Directory</h1>
        <nav>
          <ul className="menu">
            <li>
              <a href="#home" onClick={() => setView("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setView("about")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#tools" onClick={() => setView("tools")}>
                Tools
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setView("contact")}>
                Contact
              </a>
            </li>            
          </ul>
        </nav>
      </header>

      <main>
        {view === "home" && (
          <div class="home">
          <div class="home-content">
            <h2>Welcome to AI Tools Directory!</h2>
            <p>
              Explore the best AI tools that can transform your workflow. Whether you're a 
              developer, designer, data scientist, or business owner, we provide an extensive 
              collection of the latest AI technologies to enhance creativity, automate tasks, 
              and make smarter decisions.
            </p>
            <h3>Why AI Tools Matter?</h3>
            <ul>
              <li><strong>Boost Productivity:</strong> Automate repetitive tasks and save time.</li>
              <li><strong>Enhance Creativity:</strong> Brainstorm, generate content, and create stunning visuals.</li>
              <li><strong>Smarter Decisions:</strong> Use data-driven insights for better business decisions.</li>
              <li><strong>Seamless Integration:</strong> Discover tools that easily integrate with your workflow.</li>
            </ul>
            <p>Start exploring now to discover the tools that best fit your needs!</p>
          </div>
          </div>
        
        )}

        {view === "contact" && (
          <div class="contact">
          <div class="contact-content">
            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you! If you have questions, suggestions, or need assistance,
              feel free to reach out to us. Our team is here to help you explore the best AI tools.
            </p>
            <h3>Get in Touch</h3>
            <ul>
              <li><strong>Email:</strong> sumitringane@outlook.com</li>
              <li><strong>Address:</strong> IT Park Parsodi, Nagpur,MH,India</li>
            </ul>
            <h3>Stay Connected</h3>
              <p>Follow us on social media to get the latest updates on AI tools and technologies:</p>
              <ul class="social-links">
                <li><a href="https://www.linkedin.com/in/sumit-ringane-1990/" target="_blank">LinkedIn</a></li>
              </ul>
          </div>          
        </div>        
        )}
        {view === "about" && (
          <div class="home">
          <div class="home-content">
            <h2>About Us</h2>
            <p>
              Welcome to <strong>AI Tools Directory</strong>, your one-stop destination for discovering the best 
              AI-powered tools. Our mission is to empower developers, creators, and businesses by 
              providing access to innovative tools that drive productivity, creativity, and growth.
            </p>
            <p>
              At <strong>AI Tools Directory</strong>, we believe in the transformative power of artificial 
              intelligence. From automation to analytics, design to development, we curate tools 
              that bring cutting-edge AI technologies closer to you. We aim to bridge the gap between 
              technology and users, making AI accessible and easy to integrate into everyday workflows.
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li><strong>Comprehensive Directory:</strong> Explore tools across diverse categories and industries.</li>
              <li><strong>User-Centric:</strong> Tailored to suit everyone, from beginners to advanced users.</li>
              <li><strong>Trusted Recommendations:</strong> Only the best AI tools make it to our directory.</li>
              <li><strong>Constant Updates:</strong> Stay ahead with the latest trends in AI technology.</li>
            </ul>
            <p>
              Join our journey as we navigate the exciting world of AI and uncover tools that 
              redefine what’s possible. Together, let’s shape the future of work, creativity, and innovation!
            </p>
          </div>
          </div>    
        )}

        {view === "tools" && (
          <div>
            <div className="filters">
              <input
                type="text"
                placeholder="Search for a tool..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
            </div>
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
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
            
          </div>
        )}
      </main>
      {view === "tools" && (
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
        </div>)}
      <footer>
        <p>&copy; {new Date().getFullYear()} AI Tools Directory. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
