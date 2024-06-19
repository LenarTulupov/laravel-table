# Используем официальный образ PHP с FPM
FROM php:8.3-6-fpm

# Устанавливаем системные зависимости
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    npm

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Настраиваем рабочую директорию
WORKDIR /var/www

# Копируем зависимости и устанавливаем их
COPY composer.json composer.lock ./
RUN composer install --no-scripts --no-autoloader --prefer-dist

# Копируем весь проект
COPY . .

# Устанавливаем зависимости Node.js
RUN npm install && npm run build

# Оптимизируем Laravel
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

# Настраиваем права доступа
RUN chown -R www-data:www-data /var/www

# Открываем порт
EXPOSE 9000

# Запускаем PHP-FPM
CMD ["php-fpm"]
