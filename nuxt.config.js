const webpack = require("webpack");

export default {
//   serverMiddleware: ["redirect-ssl"],

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'CAREER GUIDE',
        htmlAttrs: {
            lang: 'ar',
            dir: 'rtl',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [{
            src: "/all.min.js",
        }, ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/bootstrap-rtl.min.css",
        "~/plugins/DataTables/datatables.min.css",
        "@/assets/css/fonts.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // "~/plugins/bootstrap.js",
        { src: '~/plugins/DataTables/datatables.min.js', mode: 'client' },
        { src: "~/plugins/bootstrap.min.js", mode: 'client' }

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'https://roadmapapi.ahmedhesham.systems/api/v1',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        /**
         * add external plugins
         */
        vendor: ["jquery", "bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
}
