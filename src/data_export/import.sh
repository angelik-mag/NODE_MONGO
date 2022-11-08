#! /bin/bash

mongoimport --host db_mongo --db app-mong  --collection elementos --file /data/db/elementos.json --jsonArray