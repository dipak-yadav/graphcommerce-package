/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductLink_BundleProduct_Fragment = { __typename: 'BundleProduct', uid: string, url_key?: string | null };

export type ProductLink_ConfigurableProduct_Fragment = { __typename: 'ConfigurableProduct', uid: string, url_key?: string | null };

export type ProductLink_DownloadableProduct_Fragment = { __typename: 'DownloadableProduct', uid: string, url_key?: string | null };

export type ProductLink_GroupedProduct_Fragment = { __typename: 'GroupedProduct', uid: string, url_key?: string | null };

export type ProductLink_SimpleProduct_Fragment = { __typename: 'SimpleProduct', uid: string, url_key?: string | null };

export type ProductLink_VirtualProduct_Fragment = { __typename: 'VirtualProduct', uid: string, url_key?: string | null };

export type ProductLinkFragment = ProductLink_BundleProduct_Fragment | ProductLink_ConfigurableProduct_Fragment | ProductLink_DownloadableProduct_Fragment | ProductLink_GroupedProduct_Fragment | ProductLink_SimpleProduct_Fragment | ProductLink_VirtualProduct_Fragment;
