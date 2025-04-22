/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const MergeCartsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MergeCarts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sourceCartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destinationCartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mergeCarts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source_cart_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sourceCartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"destination_cart_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destinationCartId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MergeCartsMutation, MergeCartsMutationVariables>;
export type MergeCartsMutationVariables = Types.Exact<{
  sourceCartId: Types.Scalars['String']['input'];
  destinationCartId: Types.Scalars['String']['input'];
}>;


export type MergeCartsMutation = { mergeCarts: { __typename: 'Cart', id: string } };
