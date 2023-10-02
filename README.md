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
*URL : https://console.cloud.google.com/home/dashboard?project=acticketing-dev-400816
**Install Gcloud SDK and cLI : https://cloud.google.com/sdk/docs/downloads-interactive?hl=en**
Login to system : gcloud auth login
*Initialize the Google Cloud Platform in System: gcloud init
Install GC Context : gcloud components install kubectl
Run: gcloud container clusters get-credentials <cluster_name>
Can Cross check in docker desktop that new context cluster from GCP is running on the system and will not get any pod when run kubectl get pods



