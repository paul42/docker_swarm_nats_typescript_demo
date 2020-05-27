# Purpose
Make a demonstration application that uses NATS.io in docker swarm mode.
## Why?
I was unable to find more data about swarm mode and my knowledge of docker/docker-compose is very limited. mostly this is me exploring and poking around. suggestions welcome

## Components
* Nats.io image from dockerhub
* Nats-box for testing/poking
* demonstration typescript 'worker' or subscriber that just echoes messages (to demonstrate how to 'containerize' a typescript application)

## Hurdles
1. making a fresh typescript project and getting it to compile properly and pull types from installed files (a fresh `tsc --init` does not get you close)
1. learning how overlay networking is configured in docker swarm and making the compose file reflect that so it can be attached to outside the 


## General Development
1. make docker-compose scaffolding (see nats-cluster.yaml)
1. make a very basic typescript client to subscribe to 'hello' and echo messages out to basic logging
1. containerize typescript client
1. add typescript container
1. spin up stack
1. run and attach a nats-box to the overlay network made in swarm to publish messages

## To try it yourself
1. Set up prerequisites (have docker installed and initalize a swarm)
1. clone repo locally
1. open terminal
1. cd into `node-app`
1. `npm run build`
1. `npm run deploystack`
1. `npm run watchlogs`
1. open new terminal
1. `npm run attachnatsbox`
1. `nats-pub -s "nats://nats:4222" hello testmsg`
1. You should see your `testmsg` show up in your window that's watching logs

## Very helpful links

`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`