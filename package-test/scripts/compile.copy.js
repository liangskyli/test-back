// 复制src下所有的非 .js,.jsx,.ts,.tsx,.d.ts,tsconfig.json 文件到转译目标文件夹
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const cwd = process.cwd();

const copyFn = (destDirs, globOptions, pattern = '**/*') => {
  glob(pattern, globOptions, (err, matches) => {
    if (err) return;
    matches.forEach((filepath) => {
      destDirs.forEach((dest) => {
        fs.copySync(path.join(globOptions.cwd, filepath), path.join(dest, filepath));
      });
    });
  });
};


const srcPath = path.resolve(cwd, 'src');
const libAndEs = [path.resolve(cwd, 'build/lib'), path.resolve(cwd, 'build/es')];

// 复制 src 下其他相关目录到 lib、es 目录中
copyFn(libAndEs, {
  cwd: srcPath,
  nodir: true,
  ignore: ['**/tsconfig.json', '**/*.ts', '**/*.tsx', '**/*.md'],
});

