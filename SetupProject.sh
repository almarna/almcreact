echo "Creating: $1"
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
mkdir $1
cd $1
git init
npm init -y >/dev/null
git add -A
git commit -m "Initial checkin"
echo "node_modules" > .gitignore
mkdir src
cp $SCRIPT_DIR/files/index.html .
cp $SCRIPT_DIR/files/index.tsx src/
cp $SCRIPT_DIR/files/tsconfig.json .
cp $SCRIPT_DIR/files/.parcelrc .
cp $SCRIPT_DIR/files/.eslintrc.js .
cp $SCRIPT_DIR/files/.prettierrc.js .
npm i -D parcel typescript @types/react @types/react-dom
npm i -D eslint prettier @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks
npm i -D eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin
npm i -s react react-dom
npx -y json -I -f package.json -e "this.scripts.start='parcel index.html'"
npx -y json -I -f package.json -e "this.scripts.lint='eslint ./src'"
npx -y json -I -f package.json -e "this.scripts.lint_fix='eslint ./src --fix'"
npx -y json -I -f package.json -e 'this.scripts.format="prettier --write ./src/**/*.{js,jsx,ts,tsx,css,md,json} --config ./.prettierrc.js"'
npx -y json -I -f package.json -e "this.browserslist='> 0.5%, last 2 versions, not dead'"
npm start
