# iye

## How to run Server?
1. Start server with mongoDB.
```bash
npm run up:dev
```
2. (Optional) Access terminal for the containers.
```bash
docker exec -it api-container sh
docker exec -it mongo-container sh
```

## How to test?
1. Start server with mongoDB.
```bash
npm run up:dev
```
2. Access the server's terminal.
```bash
docker exec -it api-container sh
```
3. Run test
```bash
npm run test:all
```
