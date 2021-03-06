module.exports = function (plop) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  plop.setActionType('mkdir', () => {});
  plop.setGenerator('view', {
    description: 'container & presentational components and style and index',
    prompts: [
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'mkdir',
        path: 'src/components/{{pascalCase name}}',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/view/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Container.tsx',
        templateFile: 'plop-templates/view/container.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Presentation.tsx',
        templateFile: 'plop-templates/view/presentation.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Presentation.module.scss',
        templateFile: 'plop-templates/view/presentationStyle.hbs',
      },
    ],
  });
  plop.setGenerator('state', {
    description: 'reducer, action, type and index',
    prompts: [
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'mkdir',
        path: 'src/states/{{dashCase name}}',
      },
      {
        type: 'add',
        path: 'src/states/{{dashCase name}}/index.ts',
        templateFile: 'plop-templates/state/index.hbs',
      },
      {
        type: 'add',
        path: 'src/states/{{dashCase name}}/reducer.ts',
        templateFile: 'plop-templates/state/reducer.hbs',
      },
      {
        type: 'add',
        path: 'src/states/{{dashCase name}}/actions.ts',
        templateFile: 'plop-templates/state/actions.hbs',
      },
      {
        type: 'add',
        path: 'src/states/{{dashCase name}}/types.ts',
        templateFile: 'plop-templates/state/types.hbs',
      },
    ],
  });
  plop.setGenerator('component', {
    description: 'component, style, and index',
    prompts: [
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'mkdir',
        path: 'src/common/components/{{pascalCase name}}',
      },
      {
        type: 'add',
        path: 'src/common/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.hbs',
      },
      {
        type: 'add',
        path: 'src/common/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/common/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'page index',
    prompts: [
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'mkdir',
        path: 'src/pages/{{dashCase name}}',
      },
      {
        type: 'add',
        path: 'src/pages/{{dashCase name}}/index.tsx',
        templateFile: 'plop-templates/page/index.hbs',
      },
    ],
  });
};
