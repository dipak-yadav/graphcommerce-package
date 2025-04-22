/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ConfigurableOptionValueTextFragment = { uid?: string | null, use_default_value?: boolean | null, store_label?: string | null, swatch_data?: { __typename: 'ColorSwatchData' } | { __typename: 'ImageSwatchData' } | { __typename: 'TextSwatchData', value?: string | null } | null };
