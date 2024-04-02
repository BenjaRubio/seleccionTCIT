# seleccionTCIT


Para correr el proyecto, primero se debe ingresar al directorio ```backend``` para activar docker, instlar dependencias y correr la API.

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