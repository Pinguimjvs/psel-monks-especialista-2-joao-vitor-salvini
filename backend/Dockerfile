FROM php:8.1-apache

RUN a2enmod rewrite

# Instala mysqli
RUN docker-php-ext-install mysqli

COPY ./src/api /var/www/html

RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf