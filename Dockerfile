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

# Используем официальный PHP образ с установленным Nginx
FROM php:8.1-fpm

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Копируем зависимости и проект
COPY --from=build /app/vendor ./vendor
COPY --from=frontend-build /app/public/build ./public/build
COPY --from=frontend-build /app/resources ./resources
COPY --from=frontend-build /app/routes ./routes
COPY --from=frontend-build /app/database ./database
COPY --from=frontend-build /app/config ./config
COPY --from=frontend-build /app/bootstrap ./bootstrap
COPY --from=frontend-build /app/public ./public
COPY --from=frontend-build /app/storage ./storage
COPY --from=frontend-build /app/artisan ./artisan

# Устанавливаем права на записи для логов и кэша
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Устанавливаем конфигурацию для Nginx
RUN apt-get update && apt-get install -y nginx
COPY ./nginx/default.conf /etc/nginx/sites-available/default
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
RUN echo "fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;" > /etc/nginx/fastcgi_params

# Устанавливаем переменные окружения для PHP-FPM
ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS=0

# Запускаем PHP-FPM и Nginx
CMD ["nginx", "-g", "daemon off;"]
