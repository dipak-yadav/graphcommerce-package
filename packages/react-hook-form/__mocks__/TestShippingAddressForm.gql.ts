/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const TestShippingAddressFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestShippingAddressForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CartAddressInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerNote"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"joi","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setShippingAddressesOnCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cart_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shipping_addresses"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"customer_notes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerNote"}}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<TestShippingAddressFormMutation, TestShippingAddressFormMutationVariables>;
export type TestShippingAddressFormMutationVariables = Types.Exact<{
  cartId: Types.Scalars['String']['input'];
  address: Types.CartAddressInput;
  customerNote?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type TestShippingAddressFormMutation = { setShippingAddressesOnCart?: { cart: { id: string } } | null };
