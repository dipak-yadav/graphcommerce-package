/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductPageDescription_BundleProduct_Fragment = { name?: string | null, url_key?: string | null, description?: { __typename: 'ComplexTextValue', html: string } | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductPageDescription_ConfigurableProduct_Fragment = { name?: string | null, url_key?: string | null, description?: { __typename: 'ComplexTextValue', html: string } | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductPageDescription_DownloadableProduct_Fragment = { name?: string | null, url_key?: string | null, description?: { __typename: 'ComplexTextValue', html: string } | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductPageDescription_GroupedProduct_Fragment = { name?: string | null, url_key?: string | null, description?: { __typename: 'ComplexTextValue', html: string } | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductPageDescription_SimpleProduct_Fragment = { name?: string | null, url_key?: string | null, description?: { __typename: 'ComplexTextValue', html: string } | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductPageDescription_VirtualProduct_Fragment = { name?: string | null, url_key?: string | null, description?: { __typename: 'ComplexTextValue', html: string } | null, short_description?: { __typename: 'ComplexTextValue', html: string } | null };

export type ProductPageDescriptionFragment = ProductPageDescription_BundleProduct_Fragment | ProductPageDescription_ConfigurableProduct_Fragment | ProductPageDescription_DownloadableProduct_Fragment | ProductPageDescription_GroupedProduct_Fragment | ProductPageDescription_SimpleProduct_Fragment | ProductPageDescription_VirtualProduct_Fragment;
