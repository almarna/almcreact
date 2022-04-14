#!/usr/bin/env node
function main() {
    if (process.argv.length !== 3) {
        console.log("usage: npx almcreact <appname>");
        return;
    }

    const fs = require('fs');
    const path = require('path');
    const srcDir = path.join(__dirname, "files");
    const appname = process.argv[2];
    const destDir = path.join(".", appname);

    const copyFile = function (filename, subdir) {
        srcFile = path.join(srcDir, filename);
        destFile = subdir ? path.join(destDir, subdir, filename) : path.join(destDir, filename);
        fs.copyFileSync(srcFile, destFile);
    };


    fs.mkdirSync(appname);
    const srcSubDir = path.join(appname, "src");
    fs.mkdirSync(srcSubDir);

    copyFile("index.html");
    copyFile("package.json");
    copyFile("tsconfig.json");
    copyFile(".parcelrc");
    copyFile(".eslintrc.js");
    copyFile(".prettierrc.js");
    copyFile(".gitignore");
    copyFile("index.tsx", "src");

    console.log("Execute the following to test your new web:\n\r" +
        `cd ${appname}\n\r` +
        "npm i\n\r" +
        "npm start");
}

if (require.main === module) {
    main();
}