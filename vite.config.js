// vite.config.js (CommonJS)
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [ react() ],
  // outras configurações que você já tenha (alias, server, etc)
});
