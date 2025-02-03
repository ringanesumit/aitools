const Sitemap = require("react-router-sitemap").default;

// Define static routes for the SPA
const routes = [
  { path: "/" },
  { path: "/aboutUs" },
  { path: "/PrivacyPolicy" },
  { path: "/TermsofUse" },
  { path: "/ContactUs" },
  { path: "/tools" },
];

// Build and save the sitemap
new Sitemap(routes)
  .build("https://www.aitooldirectory.io") // Replace with your domain
  .save("./public/sitemap.xml");
