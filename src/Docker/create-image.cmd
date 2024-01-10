docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cursed/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t cursed/app ../..
