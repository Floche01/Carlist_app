# CarlistApp for Showing Car List
- This is a simple app for showing car List  with specific endpoint
# Data
- `car.json` contains a "car" object with an array of cars in the garage
- `server.js` is the running point for the application, as stated in the `package.json`

# Running
- To run from within the `NodeApp` repository with `Docker` running run as follows 
> `docker build -t car-list-app -f ./.Dockerfile .` (For Mac and Linux)
>
> `docker build -t car-list-app-f .\.Dockerfile .` (For Windows)
>
> `docker run --rm -d -p 3300:3300 car-list-app:latest`


- if you changed something in the code then do the followings
> `docker ps ` to show running container id
> `docker stop <conatiner-id> ` to stop the conatiner id
> `docker build -t car-list-app -f ./.Dockerfile .` (For Mac and Linux)
>
> `docker build -t car-list-app-f .\.Dockerfile .` (For Windows)
>
> `docker run --rm -d -p 3300:3300 car-list-app:latest`
> `docker image prune`
Then open to `localhost:3300` to see "Welcome to Car List"

`localhost:3300/car` will yield all cars in the garage

`localhost:3300/car/{carID}` will yield the car in the garage at the `carID` index. If the `carID` requested doesn't represent a car in the garage the application will send a `404` message saying that the `carID` is out of bounds.
