const fs = require("fs-extra");
const path = require("path");

// Define your Next.js pages directory
const pagesDir = path.join(process.cwd(), "");

// Define directories to exclude
const excludedDirs = ["components"];

// Function to traverse the directory and generate sitemap entries recursively
const traverseDirectory = async (directory, callback) => {
  const files = await fs.readdir(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const isDirectory = (await fs.stat(filePath)).isDirectory();

    if (isDirectory && !excludedDirs.includes(file)) {
      await traverseDirectory(filePath, callback);
    } else {
      await callback(filePath);
    }
  }
};

// Function to generate sitemap entries
const generateSitemap = async () => {
  try {
    const urls = [];

    // Traverse the directory and collect page URLs
    await traverseDirectory(pagesDir, async (filePath) => {
      // Extract the route from the file path
      const route = filePath
        .replace(pagesDir, "") // Remove pages directory prefix
        .replace(/\.tsx$/, "") // Remove file extension
        .replace(/index$/, ""); // Remove "index" if present

      // Handle special case for index route
      const url = route === "/index" ? "/" : route;

      // Add URL to the list
      urls.push(`<url><loc>${url}</loc></url>`);
    });

    // Create sitemap content
    const sitemapContent = urls.join("\n");

    // Write sitemap file
    await fs.writeFile(
      "sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapContent}
</urlset>`
    );

    console.log("Sitemap generated successfully!");
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
};

// Run the function
generateSitemap();
