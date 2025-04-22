/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductListItemConfigurableFragment = { __typename: 'ConfigurableProduct', uid: string, configurable_options?: Array<{ attribute_code?: string | null, uid: string, label?: string | null, values?: Array<{ store_label?: string | null, uid?: string | null, swatch_data?: { __typename: 'ColorSwatchData', value?: string | null } | { __typename: 'ImageSwatchData', value?: string | null, thumbnail?: string | null } | { __typename: 'TextSwatchData', value?: string | null } | null } | null> | null } | null> | null };
