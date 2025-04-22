/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductPageCategory_BundleProduct_Fragment = { categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null } | null> | null };

export type ProductPageCategory_ConfigurableProduct_Fragment = { categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null } | null> | null };

export type ProductPageCategory_DownloadableProduct_Fragment = { categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null } | null> | null };

export type ProductPageCategory_GroupedProduct_Fragment = { categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null } | null> | null };

export type ProductPageCategory_SimpleProduct_Fragment = { categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null } | null> | null };

export type ProductPageCategory_VirtualProduct_Fragment = { categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null } | null> | null };

export type ProductPageCategoryFragment = ProductPageCategory_BundleProduct_Fragment | ProductPageCategory_ConfigurableProduct_Fragment | ProductPageCategory_DownloadableProduct_Fragment | ProductPageCategory_GroupedProduct_Fragment | ProductPageCategory_SimpleProduct_Fragment | ProductPageCategory_VirtualProduct_Fragment;
