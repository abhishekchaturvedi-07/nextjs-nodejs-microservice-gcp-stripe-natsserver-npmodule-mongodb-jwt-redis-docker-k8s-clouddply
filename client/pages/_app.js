import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header';
import axios from 'axios';

// export default ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };


const AppComponent = ({Component, pageProps, currentUser}) => {
  return(
    <div>
      {/* <h1>Header! {currentUser?currentUser.email:'***'}</h1> */}
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  )
}

AppComponent.getInitialProps = async (appContext) => {
  console.log('APPLICATION PAGE GET INITIAL PROPERTIES')
  const appContextKey = Object.keys(appContext)
  console.log('context check appContextKey --->>> ',appContextKey)
  const contextOfAppContextKey = appContextKey[3]
  console.log('context of App Context Key check --->>> ',contextOfAppContextKey)
  // console.log('hchecking header -->  ', contextOfAppContextKey)
  // const {req} = contextOfAppContextKey
  // console.log('hchecking',req)
  
    if (typeof window === 'undefined') {
            // We are on the server
            console.log('<<<-server-->>>')
            try{ 
              const response =   await axios.get(
                'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
                {
                  headers: appContext.ctx.req.headers,
                }
              ); 

              let pageProps = {};
              if(appContext.Component.getInitialProps)
              {
                  pageProps = await appContext.Component.getInitialProps(appContext.ctx)
                console.log("PAGE PROPS --->>>   ", pageProps);
              }
              const {data} = response

                console.log("Application Headers Responese-> ", data);
                  return {
                    pageProps,
                    ...data
                  }
              }
              catch(err){
                console.error(err?.reponse?.data)
                return {}
              }


            
    } else {
            // We must be on the browser
            try{
              const response = await axios.get('/api/users/currentuser/')
              console.log('LOCAL REsponse Data:-->  ',response.data)
              console.log('APPLICATION COMP USER NAME --> ', response.data.currentUser.email)
              return response.data
              }
              catch(err){
                console.error(err?.reponse?.data)
                return {}
              }
    }



}

export default AppComponent

// import 'bootstrap/dist/css/bootstrap.css';

// import buildClient from '../api/build-client';

// const AppComponent = ({ Component, pageProps, currentUser }) => {
//   return (
//     <div>
//       <h1>Header! {currentUser.email}</h1>
//       <Component {...pageProps} />
//     </div>
//   );
// };

// AppComponent.getInitialProps = async appContext => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/users/currentuser');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   }

//   return {
//     pageProps,
//     ...data
//   };
// };

// export default AppComponent;