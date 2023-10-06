import Link from 'next/link';
import axios from 'axios';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  // console.log('CU-->  ',currentUser);
  // axios.get('/api/users/currentuser');

  return currentUser ? (
    <>
    <h1 style={{color:'green'}}>
      You are now logged in with- {currentUser.email}
      </h1>
      <Link className="navbar-brand" href="/auth/signout" style={{color:'red'}}>
        SignOut
      </Link>
       
    
    </>
  ) : (
    <>
    <h1> You are successfully logged out!</h1>
    <Link className="navbar-brand" style={{color:'red'}} href="/auth/signin">
        SignIN
      </Link>
      </>
  )
};

LandingPage.getInitialProps = async ({req}) => {
  console.log('LANDING PAGE GET INITIAL PROPERTIES')
  if (typeof window === 'undefined') {
    // we are on the server!
    // requests should be made to http://ingress-nginx.ingress-nginx...laksdjfk
    console.log('SERVER')
   try{
       const response = await axios.get(
          'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
          {
            headers: req.headers,
          }
        );
        return response.data
      }
      catch(err){
        console.error(err?.reponse?.data)
      }
    
  } else {
    // we are on the browser!
    // requests can be made with a base url of ''
    console.log('LOCAL')
    try{
      const response = await axios.get('/api/users/currentuser/')
      console.log('LOCAL REsponse Data:-->  ',response.data)
      return response.data
    }
    catch(err){
      console.error(err?.reponse?.data)
    }
    
  }
  return {};
};

export default LandingPage;