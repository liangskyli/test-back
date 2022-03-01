const fs = require('fs');

function getPackageInfo() {
  const info = require(`${process.cwd()}/package.json`);
  return {
    name: info.name,
    config: info.config,
  };
}

const { config: packageConfig } = getPackageInfo();

const getLocalConfig = (property: string) => {
  const configPath = './local.config.js';
  try {
    const isExist = fs.existsSync(configPath);
    if (isExist) {
      const localConfigData = require('../local.config.js');
      return localConfigData[property];
    } else {
      throw Error('请先配置local.config.js文件');
    }
  } catch (e) {
    console.log(e);
    process.exit();
  }
};

export default { getLocalConfig, packageConfig };
