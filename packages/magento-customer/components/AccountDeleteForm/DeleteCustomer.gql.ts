/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const DeleteCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomer"}}]}}]} as unknown as DocumentNode<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export type DeleteCustomerMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type DeleteCustomerMutation = { deleteCustomer?: boolean | null };
