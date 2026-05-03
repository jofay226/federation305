FROM  node:18-alpine

WORKDIR /post-service

RUN apk add --no-cache curl

COPY package*.json . 

RUN npm install 

COPY . . 


EXPOSE 4001

CMD sh -c "sleep 5 && npx prisma migrate dev --name init && npm run dev"