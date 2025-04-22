/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const VirtualProductPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VirtualProductPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlKey"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"typeProducts"},"name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlKey"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<VirtualProductPageQuery, VirtualProductPageQueryVariables>;
export type VirtualProductPageQueryVariables = Types.Exact<{
  urlKey?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type VirtualProductPageQuery = { typeProducts?: { items?: Array<{ __typename: 'BundleProduct', uid: string } | { __typename: 'ConfigurableProduct', uid: string } | { __typename: 'DownloadableProduct', uid: string } | { __typename: 'GroupedProduct', uid: string } | { __typename: 'SimpleProduct', uid: string } | { __typename: 'VirtualProduct', uid: string } | null> | null } | null };
