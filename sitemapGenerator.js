require("babel-register")({
  presets: ["es2015", "react"]
});

const Sitemap = require("react-router-sitemap").default;
const router = require("./src/routes/SitemapRoutes").default();

const generateSitemap = () => {
  const base = 'http://vowaid.org';

  return (
    new Sitemap(router)
      .build(base)
      .save("./public/sitemap.xml")
  );
};

generateSitemap();
