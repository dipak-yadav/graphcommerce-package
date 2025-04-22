/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const ProductReviewProductNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductReviewProductName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlKey"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]}}]} as unknown as DocumentNode<ProductReviewProductNameQuery, ProductReviewProductNameQueryVariables>;
export type ProductReviewProductNameQueryVariables = Types.Exact<{
  urlKey: Types.Scalars['String']['input'];
}>;


export type ProductReviewProductNameQuery = { products?: { items?: Array<{ __typename: 'BundleProduct', uid: string, name?: string | null, sku?: string | null } | { __typename: 'ConfigurableProduct', uid: string, name?: string | null, sku?: string | null } | { __typename: 'DownloadableProduct', uid: string, name?: string | null, sku?: string | null } | { __typename: 'GroupedProduct', uid: string, name?: string | null, sku?: string | null } | { __typename: 'SimpleProduct', uid: string, name?: string | null, sku?: string | null } | { __typename: 'VirtualProduct', uid: string, name?: string | null, sku?: string | null } | null> | null } | null };
