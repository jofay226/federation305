FROM  node:18-alpine

WORKDIR /user-service

RUN apk add --no-cache curl

COPY package*.json . 

RUN npm install 

COPY . . 


EXPOSE 4002

CMD sh -c "sleep 5 && npx prisma migrate dev --name init && npm run dev"