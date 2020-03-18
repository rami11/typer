#!/bin/sh

echo "Dumping the database"
mysqldump -uroot -pvector2 typer > dist/typer.sql

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build.prod

echo "Deploying files to server"
rsync -avP -O -e "ssh -i $HOME/.ssh/linode/rsn" dist/ rsn@ramiserapian.com:/var/www/typer/typer_client/
echo "Deployment complete"
