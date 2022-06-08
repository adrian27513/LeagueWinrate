const fs = require('fs');

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   riot_api: '${process.env['RIOT_API']}'
};
`;

fs.writeFile(targetPath, envConfigFile, 'utf8', (err: any) => {
  if (err) {
    return console.log(err);
  }
});