# seleccionTCIT


Para correr el proyecto, primero se debe crear un archivo ```.env``` dentro del directorio ```backend``` con los siguientes datos:
```bash
DB_USER
DB_PASS
DB_HOST=db
DB_PORT=5432
DB_NAME

POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_DB
```

Los valores seteados son los que utiliza docker en sus contenedores, el resto se pueden crear a elección. se debe considerar lo siguiente:
```bash
DB_USER = POSTGRES_USER
DB_PASS = POSTGRES_PASSWORD
DB_NAME = POSTGRES_DB
```

 Luego, se debe ingresar por consola a este directorio para activar docker, instlar dependencias y correr la API.

```bash
cd backend
sudo service docker start
npm i
sudo docker compose up -d
```

Luego, debemos correr el frontend del proyecto, para esto debemos vovler al directorio raiz y luego al directorio del frontend, instalar dependencias y correrlo:

```bash
cd ..
cd frontend
npm i
npm start
```