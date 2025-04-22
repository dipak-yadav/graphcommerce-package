/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const ProductReviewRatingsMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductReviewRatingsMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productReviewRatingsMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"value_id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>;
export type ProductReviewRatingsMetadataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductReviewRatingsMetadataQuery = { productReviewRatingsMetadata: { items: Array<{ id: string, name: string, values: Array<{ value: string, value_id: string } | null> } | null> } };
