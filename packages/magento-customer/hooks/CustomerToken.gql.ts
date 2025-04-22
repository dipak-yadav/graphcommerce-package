/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const CustomerTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CustomerToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerToken"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"valid"}},{"kind":"Field","name":{"kind":"Name","value":"xMagentoCacheId"}}]}}]}}]} as unknown as DocumentNode<CustomerTokenQuery, CustomerTokenQueryVariables>;
export type CustomerTokenQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CustomerTokenQuery = { customerToken?: { __typename: 'CustomerToken', token?: string | null, createdAt?: string | null, valid?: boolean | null, xMagentoCacheId?: string | null } | null };
