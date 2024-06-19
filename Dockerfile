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

# Используем официальный PHP образ с поддержкой Apache
FROM php:8.1-apache

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

# Обновляем конфигурацию Apache
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN a2enmod rewrite
RUN echo "<Directory /var/www/html/public>" >> /etc/apache2/apache2.conf
RUN echo "    Options Indexes FollowSymLinks" >> /etc/apache2/apache2.conf
RUN echo "    AllowOverride All" >> /etc/apache2/apache2.conf
RUN echo "    Require all granted" >> /etc/apache2/apache2.conf
RUN echo "</Directory>" >> /etc/apache2/apache2.conf
RUN echo "DirectoryIndex index.php index.html" >> /etc/apache2/apache2.conf

# Устанавливаем переменные окружения для PHP
ENV APACHE_DOCUMENT_ROOT /var/www/html/public

# Запускаем сервер Apache
CMD ["apache2-foreground"]
