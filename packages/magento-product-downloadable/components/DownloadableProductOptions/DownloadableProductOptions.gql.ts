/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type DownloadableProductOptionsFragment = { __typename: 'DownloadableProduct', uid: string, downloadable_product_links?: Array<{ price?: number | null, sample_url?: string | null, sort_order?: number | null, title?: string | null, uid: string } | null> | null, downloadable_product_samples?: Array<{ title?: string | null, sort_order?: number | null, sample_url?: string | null } | null> | null };
