/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductWishlistChip_BundleProduct_Fragment = { name?: string | null, sku?: string | null, url_key?: string | null };

export type ProductWishlistChip_ConfigurableProduct_Fragment = { name?: string | null, sku?: string | null, url_key?: string | null };

export type ProductWishlistChip_DownloadableProduct_Fragment = { name?: string | null, sku?: string | null, url_key?: string | null };

export type ProductWishlistChip_GroupedProduct_Fragment = { name?: string | null, sku?: string | null, url_key?: string | null };

export type ProductWishlistChip_SimpleProduct_Fragment = { name?: string | null, sku?: string | null, url_key?: string | null };

export type ProductWishlistChip_VirtualProduct_Fragment = { name?: string | null, sku?: string | null, url_key?: string | null };

export type ProductWishlistChipFragment = ProductWishlistChip_BundleProduct_Fragment | ProductWishlistChip_ConfigurableProduct_Fragment | ProductWishlistChip_DownloadableProduct_Fragment | ProductWishlistChip_GroupedProduct_Fragment | ProductWishlistChip_SimpleProduct_Fragment | ProductWishlistChip_VirtualProduct_Fragment;
