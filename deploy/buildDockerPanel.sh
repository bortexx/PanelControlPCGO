#!/bin/bash
docker container stop panelpcgo_apache
docker container rm panelpcgo_apache
docker container run \
-v /opt/webapps/panelpcgo/www:/var/www/html \
--name panelpcgo_apache \
--expose 80 \
-e VIRTUAL_HOST=panelpcgo.pve2.fpmislata.com \
--net "nginx-net" \
--restart always \
-d \
php:7.2-apache

docker exec -it panelpcgo_apache docker-php-ext-install pdo pdo_mysql
docker container exec -it panelpcgo_apache a2enmod rewrite

docker container restart pcgo_apache

rm -r ../../../www/*
cp -r ../dist/* ../../../www/

