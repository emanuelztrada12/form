import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'https://us-central1-gtalentgt.cloudfunctions.net/apisGraphl/',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

export default client; 