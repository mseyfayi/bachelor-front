const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
module.exports = removeImports({
  reactStrictMode: true,
});
