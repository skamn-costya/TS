# Инициализация нового проекта NPM (следуйте инструкциям), если еще нет tsconfig.json
npm init

# Установка TSC, TSLint и деклараций типов для NodeJS
npm install --save-dev typescript tslint @types/node



# Скомпилируйте код с помощью TSC
./node_modules/.bin/tsc

# Запустите код с помощью NodeJS
node ./dist/index.js