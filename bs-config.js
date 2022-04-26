/**
 * Browser-sync config file.
 * See http://www.browsersync.io/docs/options/ for documentation.
 */
module.exports = {
    watch: true,
    server: {
        baseDir: "src",
        routes: {
            "/node_modules": "node_modules",
        },
    },
    open: false
};