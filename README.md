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

![Alt text](https://file%252B.vscode-resource.vscode-cdn.net/Users/abhishek.chaturvedi/Documents/poc/nextjs-nodejs-microservice-gc-stripe-natsserver-npmodule-mongodb-jwt-redis-docker-k8s-clouddply/diagrams/Screenshot%25202023-10-02%2520at%25207.39.25%2520PM.png?version%253D1696255852431)