/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppData = /* GraphQL */ `
  query GetAppData($qrcode: String!) {
    getAppData(qrcode: $qrcode) {
      qrcode
      alias
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listAppData = /* GraphQL */ `
  query ListAppData(
    $qrcode: String
    $filter: ModelAppDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAppData(
      qrcode: $qrcode
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        qrcode
        alias
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
