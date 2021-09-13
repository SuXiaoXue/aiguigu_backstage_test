const { override, fixBabelImport, addLessLoader } = require('customize-cra')

module.exports = override(
    fixBabelImport('import',{
    libraryName: 'antd',
    libraryDirectory: 'es',
}),addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
}))