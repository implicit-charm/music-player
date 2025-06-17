const { Hono } = require("hono");
const { serve } = require("@hono/node-server");
const { serveStatic } = require("@hono/node-server/serve-static");

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", (c) => c.redirect("/public/index.html"));

const serveOption = {
  fetch: app.fetch,
  port: 3000,
};

serve(serveOption, () => {
  console.log(`Server running on http://localhost:3000`);
});
