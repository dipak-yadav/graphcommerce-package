/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const RecentlyViewedProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecentlyViewedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentlyViewedProducts"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"parentSku"}}]}}]}}]}}]} as unknown as DocumentNode<RecentlyViewedProductsQuery, RecentlyViewedProductsQueryVariables>;
export type RecentlyViewedProductsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RecentlyViewedProductsQuery = { recentlyViewedProducts?: { __typename: 'RecentlyViewedProducts', items: Array<{ __typename: 'RecentlyViewedProduct', sku: string, parentSku?: string | null }> } | null };
