/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductPageDownloadableQueryFragment = { typeProducts?: { items?: Array<{ __typename: 'BundleProduct', uid: string } | { __typename: 'ConfigurableProduct', uid: string } | { __typename: 'DownloadableProduct', uid: string, downloadable_product_links?: Array<{ price?: number | null, sample_url?: string | null, sort_order?: number | null, title?: string | null, uid: string } | null> | null, downloadable_product_samples?: Array<{ title?: string | null, sort_order?: number | null, sample_url?: string | null } | null> | null } | { __typename: 'GroupedProduct', uid: string } | { __typename: 'SimpleProduct', uid: string } | { __typename: 'VirtualProduct', uid: string } | null> | null } | null };
