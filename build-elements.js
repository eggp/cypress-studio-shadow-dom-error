const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/WebcomponentDynamicForm/runtime.js',
    './dist/WebcomponentDynamicForm/polyfills.js',
    './dist/WebcomponentDynamicForm/main.js',
  ];
  const dirName = 'elements-' + process.argv[2];
  await fs.ensureDir(dirName);
  await concat(files, dirName + '/dynamic-form.js');
  await fs.copyFile(
    './dist/WebcomponentDynamicForm/styles.css',
    dirName + '/styles.css'
  );
  // await fs.copy('./dist/WebcomponentDynamicForm/assets/', 'elements/assets/' )
})();
