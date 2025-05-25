FROM php:8.1-apache
RUN a2enmod rewrite
COPY ./src /var/www/html/assets

RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf
