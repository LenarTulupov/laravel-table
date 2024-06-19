# Используем официальный PHP образ с установленным Composer
FROM composer:latest AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы composer и устанавливаем зависимости
COPY composer.json composer.lock ./
RUN composer install --no-scripts --no-autoloader --prefer-dist

# Используем официальный Node образ для сборки фронтенда
FROM node:latest AS frontend-build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package файлы и устанавливаем зависимости
COPY package.json yarn.lock ./
RUN yarn install

# Копируем весь проект
COPY . .

# Собираем фронтенд
RUN yarn build

# Используем официальный Nginx образ
FROM nginx:alpine

# Копируем собранные файлы в Nginx
COPY --from=build /app/public /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Устанавливаем права на запись, если это необходимо
# RUN chown -R nginx:nginx /usr/share/nginx/html

# Открываем порт 80 для внешних соединений
EXPOSE 80

# Запускаем Nginx в foreground режиме
CMD ["nginx", "-g", "daemon off;"]
