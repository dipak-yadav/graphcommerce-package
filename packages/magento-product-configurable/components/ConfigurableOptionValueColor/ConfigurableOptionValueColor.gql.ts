/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ConfigurableOptionValueColorFragment = { uid?: string | null, use_default_value?: boolean | null, store_label?: string | null, swatch_data?: { __typename: 'ColorSwatchData', value?: string | null } | { __typename: 'ImageSwatchData' } | { __typename: 'TextSwatchData' } | null };
