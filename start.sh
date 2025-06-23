#!/bin/bash

# CONFIGURATION
emb_dir=/home/raph/code/eve-market-browser


export ESI_CACHE=$emb_dir/apps/webapp/esi-cache
export NODE_ENV=production

cd $emb_dir/apps/prometheus
./prometheus --config.file=./prometheus.yml &>> $emb_dir/prometheus.log &

cd $emb_dir/apps/store
./store &>> $emb_dir/store.log &

cd $emb_dir/apps/webapp
./webapp &>> $emb_dir/webapp.log &

wait -n
kill $(jobs -p)
