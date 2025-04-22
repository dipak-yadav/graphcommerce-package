/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type SwatchData_ColorSwatchData_Fragment = { __typename: 'ColorSwatchData', value?: string | null };

export type SwatchData_ImageSwatchData_Fragment = { __typename: 'ImageSwatchData', value?: string | null, thumbnail?: string | null };

export type SwatchData_TextSwatchData_Fragment = { __typename: 'TextSwatchData', value?: string | null };

export type SwatchDataFragment = SwatchData_ColorSwatchData_Fragment | SwatchData_ImageSwatchData_Fragment | SwatchData_TextSwatchData_Fragment;
