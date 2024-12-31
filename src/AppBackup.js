import React, { useState } from "react";
import "./App.css";
const toolsData = [
  {
    "name": "ChatGPT",
    "category": "Chatbot",
    "icon": "https://example.com/chatgpt-icon.png",
    "link": "https://chat.openai.com",
    "description": "An advanced AI-powered chatbot by OpenAI."
  },
  {
    "name": "DALL-E",
    "category": "Generative AI",
    "icon": "https://example.com/dalle-icon.png",
    "link": "https://openai.com/dall-e",
    "description": "AI image generation tool."
  },
  {
    "name": "Jasper",
    "category": "Content Creation",
    "icon": "https://example.com/jasper-icon.png",
    "link": "https://www.jasper.ai",
    "description": "AI writing assistant for creating high-quality content."
  },
  {
    "name": "Grammarly",
    "category": "Writing Assistant",
    "icon": "https://example.com/grammarly-icon.png",
    "link": "https://www.grammarly.com",
    "description": "AI-powered tool for grammar and spell checking."
  },
  {
    "name": "Copy.ai",
    "category": "Marketing",
    "icon": "https://example.com/copyai-icon.png",
    "link": "https://www.copy.ai",
    "description": "Generates marketing copy and content using AI."
  },
  {
    "name": "Lumen5",
    "category": "Video Creation",
    "icon": "https://example.com/lumen5-icon.png",
    "link": "https://www.lumen5.com",
    "description": "AI-driven platform for creating engaging videos."
  },
  {
    "name": "Canva",
    "category": "Design",
    "icon": "https://example.com/canva-icon.png",
    "link": "https://www.canva.com",
    "description": "Graphic design tool with AI-powered features."
  },
  {
    "name": "Hugging Face",
    "category": "Machine Learning",
    "icon": "https://example.com/huggingface-icon.png",
    "link": "https://huggingface.co",
    "description": "Platform for sharing and discovering machine learning models."
  },
  {
    "name": "Perplexity AI",
    "category": "Search Engine",
    "icon": "https://example.com/perplexityai-icon.png",
    "link": "https://www.perplexity.ai",
    "description": "AI-powered search engine providing concise answers."
  },
  {
    "name": "Craiyon",
    "category": "Image Generation",
    "icon": "https://example.com/craiyon-icon.png",
    "link": "https://www.craiyon.com",
    "description": "Free AI image generator based on text prompts."
  },
  {
    "name": "Synthesia",
    "category": "Video Generation",
    "icon": "https://example.com/synthesia-icon.png",
    "link": "https://www.synthesia.io",
    "description": "AI-powered video creation platform."
  },
  {
    "name": "Runway",
    "category": "Video Editing",
    "icon": "https://example.com/runway-icon.png",
    "link": "https://www.runwayml.com",
    "description": "AI tools for video editing and content creation."
  },
  {
    "name": "Rytr",
    "category": "Writing Assistant",
    "icon": "https://example.com/rytr-icon.png",
    "link": "https://www.rytr.me",
    "description": "AI writing assistant for generating content."
  },
  {
    "name": "Sudowrite",
    "category": "Writing Assistant",
    "icon": "https://example.com/sudowrite-icon.png",
    "link": "https://www.sudowrite.com",
    "description": "AI tool for creative writing assistance."
  },
  {
    "name": "Wordtune",
    "category": "Writing Assistant",
    "icon": "https://example.com/wordtune-icon.png",
    "link": "https://www.wordtune.com",
    "description": "AI-powered writing and editing tool."
  },
  {
    "name": "Vista Social",
    "category": "Social Media Management",
    "icon": "https://example.com/vistasocial-icon.png",
    "link": "https://www.vistasocial.com",
    "description": "AI-driven social media management platform."
  },
  {
    "name": "FeedHive",
    "category": "Social Media Management",
    "icon": "https://example.com/feedhive-icon.png",
    "link": "https://www.feedhive.io",
    "description": "AI-powered social media scheduling and analytics."
  },
  {
    "name": "Midjourney",
    "category": "Image Generation",
    "icon": "https://example.com/midjourney-icon.png",
    "link": "https://www.midjourney.com",
    "description": "AI tool for generating images from text prompts."
  },
  {
    "name": "Canva Magic Studio",
    "category": "Design",
    "icon": "https://example.com/canvamagicstudio-icon.png",
    "link": "https://www.canva.com/magic-studio",
    "description": "AI-powered design tools by Canva."
  },
  {
    "name": "Looka",
    "category": "Design",
    "icon": "https://example.com/looka-icon.png",
    "link": "https://www.looka.com",
    "description": "AI-driven logo and brand design platform."
  }
];
const App = () => {
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
  const categories = [
    "all",
    ...new Set(toolsData.map((tool) => tool.category)),
  ];

  return (
    <div className="app">
      <header>
        <h1>AI Tools Directory</h1>
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
      </header>
      <main>
        <div className="tool-grid">
          {displayedTools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <img src={tool.icon} alt={`${tool.name} icon`} />
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
      </main>
    </div>
  );
};

export default App;
