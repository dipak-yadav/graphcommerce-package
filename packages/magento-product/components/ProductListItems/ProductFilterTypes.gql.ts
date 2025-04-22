/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const ProductFilterTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductFilterTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AttributeFilterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributesList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityType"},"value":{"kind":"EnumValue","value":"CATALOG_PRODUCT"}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"frontend_input"}}]}}]}}]}}]} as unknown as DocumentNode<ProductFilterTypesQuery, ProductFilterTypesQueryVariables>;
export type ProductFilterTypesQueryVariables = Types.Exact<{
  filters: Types.AttributeFilterInput;
}>;


export type ProductFilterTypesQuery = { attributesList?: { items: Array<{ code: string, frontend_input?: Types.AttributeFrontendInputEnum | null } | { code: string, frontend_input?: Types.AttributeFrontendInputEnum | null } | { code: string, frontend_input?: Types.AttributeFrontendInputEnum | null } | null> } | null };
