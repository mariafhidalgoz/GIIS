
# Local dev

## How to start

1. Install pipenv and gdal
```brew install pipenv gdal```

2. Create and activate virtualenv
```commandline
python3 -m venv ./venv/
source ./venv/bin/activate
```

3. Install dependencies
```commandline
pipenv install
```

4. Up postgres database
```commandline
docker run --name=postgis_s -d -e POSTGRES_USER=postgres -e POSTGRES_PASS=postgres -e POSTGRES_DBNAME=emergencies -p 5432:5432 kartoza/postgis:9.6-2.4
```

5. Run server
```djangourlpath
./manage.py runserver
```


## Important commands

Create and execute migrations
```djangourlpath
./manage.py makemigrations
./manage.py migrate
```