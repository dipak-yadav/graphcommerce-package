/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CompareProductIdInternal_BundleProduct_Fragment = { __typename: 'BundleProduct', id?: number | null, name?: string | null };

export type CompareProductIdInternal_ConfigurableProduct_Fragment = { __typename: 'ConfigurableProduct', id?: number | null, name?: string | null };

export type CompareProductIdInternal_DownloadableProduct_Fragment = { __typename: 'DownloadableProduct', id?: number | null, name?: string | null };

export type CompareProductIdInternal_GroupedProduct_Fragment = { __typename: 'GroupedProduct', id?: number | null, name?: string | null };

export type CompareProductIdInternal_SimpleProduct_Fragment = { __typename: 'SimpleProduct', id?: number | null, name?: string | null };

export type CompareProductIdInternal_VirtualProduct_Fragment = { __typename: 'VirtualProduct', id?: number | null, name?: string | null };

export type CompareProductIdInternalFragment = CompareProductIdInternal_BundleProduct_Fragment | CompareProductIdInternal_ConfigurableProduct_Fragment | CompareProductIdInternal_DownloadableProduct_Fragment | CompareProductIdInternal_GroupedProduct_Fragment | CompareProductIdInternal_SimpleProduct_Fragment | CompareProductIdInternal_VirtualProduct_Fragment;
