/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const GetCustomerNewsletterToggleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerNewsletterToggle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_subscribed"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetCustomerNewsletterToggleQuery, GetCustomerNewsletterToggleQueryVariables>;
export type GetCustomerNewsletterToggleQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCustomerNewsletterToggleQuery = { customer?: { is_subscribed?: boolean | null, email?: string | null } | null };
