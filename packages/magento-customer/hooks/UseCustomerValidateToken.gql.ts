/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const UseCustomerValidateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UseCustomerValidateToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UseCustomerValidateTokenQuery, UseCustomerValidateTokenQueryVariables>;
export type UseCustomerValidateTokenQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UseCustomerValidateTokenQuery = { customer?: { email?: string | null } | null };
