/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const CartAgreementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CartAgreements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutAgreements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreement_id"}},{"kind":"Field","name":{"kind":"Name","value":"checkbox_text"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"content_height"}},{"kind":"Field","name":{"kind":"Name","value":"is_html"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CartAgreementsQuery, CartAgreementsQueryVariables>;
export type CartAgreementsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CartAgreementsQuery = { checkoutAgreements?: Array<{ agreement_id: number, checkbox_text: string, content: string, content_height?: string | null, is_html: boolean, mode: Types.CheckoutAgreementMode, name: string } | null> | null };
