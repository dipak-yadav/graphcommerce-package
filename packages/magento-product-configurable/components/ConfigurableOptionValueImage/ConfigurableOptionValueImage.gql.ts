/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ConfigurableOptionValueImageFragment = { uid?: string | null, use_default_value?: boolean | null, store_label?: string | null, swatch_data?: { __typename: 'ColorSwatchData' } | { __typename: 'ImageSwatchData', thumbnail?: string | null, value?: string | null } | { __typename: 'TextSwatchData' } | null };
