require("babel-register")({
  presets: ["es2015", "react"]
});

const Sitemap = require("react-router-sitemap").default;
const router = require("./src/routes/SitemapRoutes").default;

console.log(router);

const generateSitemap = () => {
  const base = 'https://www.vowaid.org';

  return (
    new Sitemap(router)
      .build(base)
      .save("./public/sitemap.xml")
  );
};

generateSitemap();
