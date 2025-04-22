/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const StoreSwitcherListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoreSwitcherList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"store_name"}},{"kind":"Field","name":{"kind":"Name","value":"store_code"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"base_currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"store_group_name"}},{"kind":"Field","name":{"kind":"Name","value":"store_group_code"}}]}}]}}]} as unknown as DocumentNode<StoreSwitcherListQuery, StoreSwitcherListQueryVariables>;
export type StoreSwitcherListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type StoreSwitcherListQuery = { availableStores?: Array<{ store_name?: string | null, store_code?: string | null, locale?: string | null, base_currency_code?: string | null, store_group_name?: string | null, store_group_code?: string | null } | null> | null };
