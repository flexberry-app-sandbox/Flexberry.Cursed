docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cursed-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t cursed-java/app ../../..
