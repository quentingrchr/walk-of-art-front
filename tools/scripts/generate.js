const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'component',
    defaultCase: '',
    entry: {
      folderPath: './tools/templates/react/',
    },
    stringReplacers: [{ question: 'Insert component name', slot: '__component__' }],
    output: {
      path: './src/components/__component__(kebabCase)/',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: false,
    },
  },
]);