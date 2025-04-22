/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductWeight_BundleProduct_Fragment = { weight?: number | null };

export type ProductWeight_ConfigurableProduct_Fragment = { weight?: number | null };

export type ProductWeight_GroupedProduct_Fragment = { weight?: number | null };

export type ProductWeight_SimpleProduct_Fragment = { weight?: number | null };

export type ProductWeightFragment = ProductWeight_BundleProduct_Fragment | ProductWeight_ConfigurableProduct_Fragment | ProductWeight_GroupedProduct_Fragment | ProductWeight_SimpleProduct_Fragment;
