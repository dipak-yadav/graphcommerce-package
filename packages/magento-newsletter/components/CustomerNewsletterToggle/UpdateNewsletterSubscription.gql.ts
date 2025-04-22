/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const UpdateNewsletterSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNewsletterSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isSubscribed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_subscribed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isSubscribed"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_subscribed"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateNewsletterSubscriptionMutation, UpdateNewsletterSubscriptionMutationVariables>;
export type UpdateNewsletterSubscriptionMutationVariables = Types.Exact<{
  isSubscribed: Types.Scalars['Boolean']['input'];
}>;


export type UpdateNewsletterSubscriptionMutation = { updateCustomerV2?: { customer: { is_subscribed?: boolean | null } } | null };
