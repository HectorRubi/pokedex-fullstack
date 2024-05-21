#!/bin/bash
searching=1
while [ $searching -eq 1 ]
do
  volume=$(docker volume ls  -q | grep -o "app-test-express-react_db_data")
  res=$(docker compose logs db | grep -o "database system is ready to accept connections" | wc -l)
  if [ $res -eq 2 ] || [ $volume ]
  then
    searching=$(( $searching + 1))
  fi
done
echo 'done'
