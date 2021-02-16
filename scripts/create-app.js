const fs = require('fs');
const { exec } = require('child_process');

const args = process.argv.slice(2);
const name = args[0];

exec(`nx generate @nrwl/angular:application ${name}`, (error) => {
  if (error) {
    console.error(`Error generating the application: ${error.message}`);
    return;
  }
  update();
});

const update = () => {
  const config = require('../angular.json');
  const project = config.projects[name];
  const architect = project.architect;

  const build = {
    ...architect.build,
    builder: '@angular-builders/custom-webpack:browser',
    options: {
      customWebpackConfig: {
        path: 'webpack.config.js',
      },
    },
  };

  const serve = {
    ...architect.serve,
    builder: '@angular-builders/custom-webpack:dev-server',
    options: {
      customWebpackConfig: {
        path: 'webpack.config.js',
      },
    },
  };

  fs.writeFileSync(
    'angular.json',
    JSON.stringify(
      {
        ...config,
        projects: {
          ...config.projects,
          [name]: {
            ...project,
            architect: {
              ...project.architect,
              build,
              serve,
            },
          },
        },
      },
      null,
      2
    )
  );
};
