1. Clonar repositorio 
2. 'npm install'
3. Hay que crear una Base de datos con el nombre 'db_test' en mysql, para que almacene los datos obtenidos a través de GraphQL. 
5. En ./src/config/typeorm se encuentran los datos de conexión con mysql
6. La API genera la tabla 'personas' con sus respectivos atributos al recibir un objeto que almacenar, a través del playground de graphql o interactuando con el front: proyecto 'form-redux-graphql'
7. Para levantar 'npm run dev'