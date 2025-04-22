/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const CountryRegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountryRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"full_name_locale"}},{"kind":"Field","name":{"kind":"Name","value":"two_letter_abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"three_letter_abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"available_regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CountryRegionsQuery, CountryRegionsQueryVariables>;
export type CountryRegionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountryRegionsQuery = { countries?: Array<{ full_name_locale?: string | null, two_letter_abbreviation?: string | null, three_letter_abbreviation?: string | null, available_regions?: Array<{ code?: string | null, id?: number | null, name?: string | null } | null> | null } | null> | null };
