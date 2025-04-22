/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const UpdateDefaultAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDefaultAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultBilling"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultShipping"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default_billing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultBilling"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_shipping"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultShipping"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"default_billing"}},{"kind":"Field","name":{"kind":"Name","value":"default_shipping"}}]}}]}}]} as unknown as DocumentNode<UpdateDefaultAddressMutation, UpdateDefaultAddressMutationVariables>;
export type UpdateDefaultAddressMutationVariables = Types.Exact<{
  addressId: Types.Scalars['Int']['input'];
  defaultBilling: Types.Scalars['Boolean']['input'];
  defaultShipping: Types.Scalars['Boolean']['input'];
}>;


export type UpdateDefaultAddressMutation = { updateCustomerAddress?: { id?: number | null, default_billing?: boolean | null, default_shipping?: boolean | null } | null };
