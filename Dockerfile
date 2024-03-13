# Stage 1: Compile and Build angular codebase
FROM node:alpine as build

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

#Stage 2: Serve app with nginx server

FROM nginx:latest

COPY --from=build /usr/src/app/dist/angular-deferrable-view/browser /usr/share/nginx/html

EXPOSE 80
