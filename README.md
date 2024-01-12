1. Iniciamos y configuramos el proyecto

- npm init -y
- tsc --init

2. Configuraciones de tsconfig.json
{
  "sourceMap": true,   
  "outDir": "./dist",  
   "strict": true,    
}

3. Cofiguracion adicional: Tslint

- npm i tslint --save-dev => dependencia de desarrollo

4. Ahora instalamos ts de manera local en el proyecto

- npm i typescript --save-dev => dependencia de desarrollo

- Desde la consola apuntamos al archivo .bin que se encuentra en los archivos de node_modules

- ./node_modules/.bin/tslint --init => tslint.json

- agregamos la regla: "no-console": false
"rules": {
        "no-console": false
    },


5. Instalamos las dependencias: express dotenv cors mysql2 sequelize

- npm i express dotenv cors mysql2 sequelize

- seguido de las dependencias realizamos las sigiuentes instalaciones:

- npm i --save-dev @types/express 