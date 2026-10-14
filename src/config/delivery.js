const fs = require("node:fs/promises");
const sharp = require("sharp");

// Keep originals intact. Generate smaller browser-ready copies on every build.
const images = {
    "2.jpg": 1600,
    "2-m.jpg": 700,
    "logo.jpg": 340,
    "2-1.jpg": 400,
    "2-2.jpg": 400,
    "2-3.jpg": 500,
};

module.exports = function (eleventyConfig) {
    eleventyConfig.on("eleventy.before", async () => {
        await fs.mkdir("public/assets/images/optimized", { recursive: true });
        await Promise.all(Object.entries(images).map(async ([name, width]) => {
            await sharp(`src/assets/images/${name}`)
                .rotate()
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: 78 })
                .toFile(`public/assets/images/optimized/${name}.webp`);
        }));
    });
    eleventyConfig.addTransform("delivery", async function (content) {
        if (!this.page.outputPath?.endsWith(".html")) return content;
        for (const name of Object.keys(images)) {
            content = content.split(`/assets/images/${name}`).join(`/assets/images/optimized/${name}.webp`);
        }
        // Small local stylesheets are inlined to eliminate blocking round trips.
        const links = [...content.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="(\/assets\/css\/[^"]+)"[^>]*>/g)];
        for (const [tag, href] of links) {
            const css = await fs.readFile(`src${href}`, "utf8");
            content = content.replace(tag, `<style>${css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ")}</style>`);
        }
        return content;
    });
};
