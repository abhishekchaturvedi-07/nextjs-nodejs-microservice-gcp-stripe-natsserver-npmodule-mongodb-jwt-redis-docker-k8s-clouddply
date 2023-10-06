import axios from 'axios';

const buildClient =  async ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    try{
        const ress= await axios.create({
            baseURL:
              'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers,
          });

          return ress
       }
       catch(err){
         console.error(err?.reponse?.data)
       }


    
  } else {
    // We must be on the browser
    try{
        return axios.create({
            baseUrl: '/',
          });
      }
      catch(err){
        console.error(err?.reponse?.data)
      }
  }
};

export default buildClient