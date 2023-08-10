import { Injectable } from '@nestjs/common';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

@Injectable()
export class PostgresService {
  private readonly apolloClient: ApolloClient<any>;

  constructor() {
    this.apolloClient = new ApolloClient({
      uri: 'http://localhost:8080/v1/graphql',
      cache: new InMemoryCache(),
    });
  }

  async addDataToPostgres(data: any): Promise<any> {
    const ADD_DATA_MUTATION = gql`
      mutation AddData($data: DataInput!) {
        insert_data(objects: [$data]) {
          affected_rows
        }
      }
    `;

    try {
      const response = await this.apolloClient.mutate({
        mutation: ADD_DATA_MUTATION,
        variables: {
          data,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error adding data:', error);
      throw new Error('Error adding data');
    }
  }
}
