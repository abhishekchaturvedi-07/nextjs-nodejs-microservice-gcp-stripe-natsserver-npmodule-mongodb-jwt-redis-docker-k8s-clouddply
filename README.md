# End to End - 
## Next Js Application with Node Microservices along side NATS Streaming Server Event Bus with a lot of structured authenticated secure system build from docker and hosted in Google Kuberbetes Platform and exposed to outside world!
*** nextjs-nodejs-microservice-gcp-stripe-natsserver-npmodule-mongodb-jwt-redis-docker-k8s-clouddply ***

## *NOTE*
**Note on Code Reloading**
```
If incase, you did not see your server restart after changing the index.ts file, do the following:

Open the package.json file in the ‘auth’ directory

Find the ‘start’ script

Update the start script to the following:

ts-node-dev --poll src/index.ts
```

## HOST FILE UPDATE WRT this application
**MACOS/LINUX** -> etc/hosts
*WINDOWS* -> C:/Windows/System32/Drivers/etc/hosts
```
code /etc/hosts
```

# By default, Ingress Enginer X is a web server thats going to try to use an HTTPS connection. 
  *By default, it uses a SELF SIGN CERTIFICATE*
  *CHROME doesnt supports the server who used SELF SIGNED CERTIFICATES*
    ```
        KUBERNETES INGRESS CONTROLLER FAKE CERTIFICATE
    ```
    *INGRESS SERVER has some configuration where you will not be able to circumvent the error screen too*
    *Only option is by typing anywhere on the tab by*
    ```
        thisisunsafe
    ```


# Local System K8S System Working :

<img width="1012" alt="Screenshot 2023-10-02 at 7 39 25 PM" src="https://github.com/abhishekchaturvedi-07/nextjs-nodejs-microservice-gcp-stripe-natsserver-npmodule-mongodb-jwt-redis-docker-k8s-clouddply/assets/15727082/78a1a25c-0f0c-4c86-8b08-9efe842e911b">


# Cloud System K8S System Working (GCP):
*WITH SYNCED SECTION*
<img width="798" alt="Screenshot 2023-10-02 at 7 47 50 PM" src="https://github.com/abhishekchaturvedi-07/nextjs-nodejs-microservice-gcp-stripe-natsserver-npmodule-mongodb-jwt-redis-docker-k8s-clouddply/assets/15727082/db46cac2-31c9-4f89-8ac8-8bfd6c36ba1f">

*WITH UNSYNCED SECTION*
<img width="867" alt="Screenshot 2023-10-02 at 7 49 27 PM" src="https://github.com/abhishekchaturvedi-07/nextjs-nodejs-microservice-gcp-stripe-natsserver-npmodule-mongodb-jwt-redis-docker-k8s-clouddply/assets/15727082/50eedf38-89fc-4907-b671-8ec8573edce4">

# Google Cloud Platform - Installation and Creation
*Project : acticketing-dev*  
*New Account : codewith ac*  
*URL : https://console.cloud.google.com/home/dashboard?project=acticketing-dev-400816* 
**Install Gcloud SDK and cLI : https://cloud.google.com/sdk/docs/downloads-interactive?hl=en**  
Login to system : gcloud auth login  
*Initialize the Google Cloud Platform in System: gcloud init  
Install GC Context : gcloud components install kubectl  
Run: gcloud container clusters get-credentials <cluster_name>  
Can Cross check in docker desktop that new context cluster from GCP is running on the system and will not get any pod when run kubectl get pods  

# Google Cloud Build
**Enable GCB**
Update skaffold.yaml to use GCB  
Setup ingress-nginx on google cloud cluster -> kubernetes.github.io/ingress-nginx -> 
```
"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml"  
"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml"   
```
This will create Ingress NginX and a lot of services and deployment needed for GCE and GKE  
Ingress NginX will automatically create the Load Balancer for us : just visit the Networking Setting -> Load Balancing and copy the IP address they are providing to interact with the Ingress NginX Controller
Update host file again to point to remote cluster  -> code /etc/hosts
Restart skaffold  -> Skaffold dev  

# Docker Login Issue Resolution
```
If got stuck :  
Just logout. From “docker logout”  
And build and push the image and do the login via “docker login -u "username" -p "password" docker.io”  
And push again  
It will work   
```

# Error Handling
*Created Error Handling Class with Abstract Class just like the Interface in Typescript*  
*Extend all the other error classes with the Abstract Class*  
*Catching up all the errors from Middleware - Error Handler*  
*Then integrated with the required service*  

# MongoDB
*Install Mongoose*    
*Create Mongo DB Instance*    
*Use Docker Default MongoDB Image*  
*Create MongoDb Deply and Serv*  
*Check if Pod started working*  
*Connect to Mongodb in Auth Index file*  
*Wrap the connection with try catch for any sort of connectivity error*  
*Wrap the same with the listener for the traffic if connected successfully*  
*Create Mongoose Model to connect with Mongo DB*  
```
*MONGOOSE USER MODEL --> Represent the entire collection of data in MONGODB*  
*MONGOOSE USER DOCUMENT --> Represent the single user data in MONGODB*
```
# Typescript and Mongoose Conflicts
*Moongoose will not allow to do the typescripting like Typescript when do new User*  
*To integrate Typescript with Mongoose follow the belows steps->*   
*// An interface that describes the properties, that are required to create a new user //*  
```
***Create and Interface***
    interface UserAttrs{
        email: string;
        password: string;
    }
***Create a new function buildUser and pass created Interface as argument and return with Mongoose new User***
    const buildUser = ( attrs: UserAttrs ) => {
        return new User(attrs)
    }
***And then initiate the object like this***
    buildUser({
        email: 'foo@example.com',
        password: 'adfdaf'
    })
```
This way you can integrate TS with Mongoose  


#Promisify Library from utils
*To make the callback based function and turn it into Promised based implementation (which will be compatible with using Async-Await)*  
```
scrypt is callback based
to convert that we can use promisify
const scryptAsync = promisify(scrypt)
```