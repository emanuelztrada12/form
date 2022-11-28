import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";
import AuthenticationContext from '../Context/AuthenticationContext';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthenticationContext>
        <Component {...pageProps} />
      </AuthenticationContext>
    </ApolloProvider>
  )
}

export default MyApp
