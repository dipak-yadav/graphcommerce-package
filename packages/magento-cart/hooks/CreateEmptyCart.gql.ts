/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const CreateEmptyCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmptyCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmptyCart"}}]}}]} as unknown as DocumentNode<CreateEmptyCartMutation, CreateEmptyCartMutationVariables>;
export type CreateEmptyCartMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type CreateEmptyCartMutation = { createEmptyCart?: string | null };
