#!/bin/bash

DOCKER_TAG="develop"

GP_API_DOCKER_REPOSITORY="rolfkoenders/gitpoint-api"
GP_API_NGINX_DOCKER_REPOSITORY="rolfkoenders/gitpoint-api-nginx"

echo "Building images with tag $DOCKER_TAG"

docker build -t "$GP_API_DOCKER_REPOSITORY:$DOCKER_TAG" ./
docker build -t "$GP_API_NGINX_DOCKER_REPOSITORY:$DOCKER_TAG" ./nginx

docker push "$GP_API_DOCKER_REPOSITORY:$DOCKER_TAG"
docker push "$GP_API_NGINX_DOCKER_REPOSITORY:$DOCKER_TAG"

docker rmi "$GP_API_DOCKER_REPOSITORY:$DOCKER_TAG"
docker rmi "$GP_API_NGINX_DOCKER_REPOSITORY:$DOCKER_TAG"

echo "Docker images pushed successfully!"
