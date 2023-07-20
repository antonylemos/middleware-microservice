# Middleware Microservice

## Como executar?

### Subindo containers com o Docker

**RabbitMQ**
```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 --restart=always --hostname rabbitmq-main rabbitmq:3-management
```

**Mongo**
```bash
docker run -p 27017:27017 --name ms-mongo -d mongo
```

### Subindo serviços

**api**
```bash
cd api
pnpm install
pnpm start
```

**message-processor**
```bash
cd message-processor
pnpm install
pnpm start
```

**ms-manager**
```bash
cd ms-manager
pnpm install
pnpm start
```

**ms-logger**
```bash
cd ms-logger
pnpm install
pnpm start
```

**ms-dao**
```bash
cd ms-dao
pnpm install
pnpm start
```

### Executando simulador (client)

**client**
```bash
cd client
pnpm install
pnpm start
```
