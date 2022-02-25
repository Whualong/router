import Router from "./src";

export default {
    input : './src/index.js',
    output : [
        { format: 'esm', name: 'router', file :'dist/router.esm.js' },
    ],
    plugins : [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}