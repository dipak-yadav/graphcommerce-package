/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const PaymentMethodPlaceOrderNoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PaymentMethodPlaceOrderNoop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cart_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order_number"}}]}}]}}]}}]} as unknown as DocumentNode<PaymentMethodPlaceOrderNoopMutation, PaymentMethodPlaceOrderNoopMutationVariables>;
export type PaymentMethodPlaceOrderNoopMutationVariables = Types.Exact<{
  cartId: Types.Scalars['String']['input'];
}>;


export type PaymentMethodPlaceOrderNoopMutation = { placeOrder?: { errors: Array<{ code: Types.PlaceOrderErrorCodes, message: string } | null>, order?: { order_number: string } | null } | null };
