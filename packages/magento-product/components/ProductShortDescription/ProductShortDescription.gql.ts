/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductShortDescription_BundleProduct_Fragment = { url_key?: string | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductShortDescription_ConfigurableProduct_Fragment = { url_key?: string | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductShortDescription_DownloadableProduct_Fragment = { url_key?: string | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductShortDescription_GroupedProduct_Fragment = { url_key?: string | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductShortDescription_SimpleProduct_Fragment = { url_key?: string | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductShortDescription_VirtualProduct_Fragment = { url_key?: string | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductShortDescriptionFragment = ProductShortDescription_BundleProduct_Fragment | ProductShortDescription_ConfigurableProduct_Fragment | ProductShortDescription_DownloadableProduct_Fragment | ProductShortDescription_GroupedProduct_Fragment | ProductShortDescription_SimpleProduct_Fragment | ProductShortDescription_VirtualProduct_Fragment;
