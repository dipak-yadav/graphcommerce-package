/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductListFiltersFragment = { aggregations?: Array<{ __typename: 'Aggregation', label?: string | null, attribute_code: string, count?: number | null, options?: Array<{ __typename: 'AggregationOption', label?: string | null, value: string, count?: number | null } | null> | null } | null> | null };
