const SingleSpaAppcracoPlugin = require('craco-plugin-single-spa-application');

const singleSpaAppPlugin = {
  plugin: SingleSpaAppcracoPlugin,
  options: {
    orgName: "venkat",
    projectName: "test-craco",
    entry: "src/venkat-test-craco.js", //defaults to src/index.js,
    // orgPackagesAsExternal: false, // defaults to false. marks packages that has @my-org prefix as external so they are not included in the bundle
    // reactPackagesAsExternal: true, // defaults to true. marks react and react-dom as external so they are not included in the bundle
    // minimize: false, // defaults to false, sets optimization.minimize value
    // outputFilename: "single-spa-build.js" // defaults to the values set for the "orgName" and "projectName" properties, in this case "my-org-my-app.js"
  },
}

// Keep any other configuration you are exporting from CRACO and add the plugin to the plugins array
module.exports = {
    plugins: [singleSpaAppPlugin]
}