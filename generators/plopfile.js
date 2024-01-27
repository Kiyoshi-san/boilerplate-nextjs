module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'Application logical component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Controller name please:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../app/components/{{camelCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../app/components/{{camelCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/main.tsx.hbs'
      },
      {
        type: 'add',
        path: '../app/components/{{camelCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../app/components/{{camelCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../app/components/{{camelCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
};
