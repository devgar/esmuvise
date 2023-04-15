# typedb

currently using `jbergstroem/mariadb-alpine`

```sh
docker run -d -p 3306:3306  --name=mariadb -e MYSQL_DATABASE=esmuvise -e SKIP_INNODB=1  jbergstroem/mariadb-alpine
```