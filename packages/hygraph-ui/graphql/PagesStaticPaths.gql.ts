/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const PagesStaticPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PagesStaticPaths"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlStartsWith"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url_starts_with"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlStartsWith"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metaRobots"}}]}}]}}]} as unknown as DocumentNode<PagesStaticPathsQuery, PagesStaticPathsQueryVariables>;
export type PagesStaticPathsQueryVariables = Types.Exact<{
  urlStartsWith: Types.Scalars['String']['input'];
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type PagesStaticPathsQuery = { pages: Array<{ url: string, metaRobots: Types.MetaRobots }> };
