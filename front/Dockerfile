FROM node:18.18.2-alpine AS build

WORKDIR /app

COPY package*.json /app

RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

COPY . .

RUN npm run build 

#segunda etapa

FROM nginx:stable

COPY --from=build /app/dist/pa-camellar/ /usr/share/nginx/html
EXPOSE 80