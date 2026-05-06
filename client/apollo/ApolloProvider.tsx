"use client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode } from "react";

function ProviderGQ({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:4000/" }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ProviderGQ;
