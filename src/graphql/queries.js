/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppData = /* GraphQL */ `
  query GetAppData($id: ID!) {
    getAppData(id: $id) {
      id
      qrcode
      baseurl
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listAppData = /* GraphQL */ `
  query ListAppData(
    $filter: ModelAppDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        qrcode
        baseurl
        alias
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
