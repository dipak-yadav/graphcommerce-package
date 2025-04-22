/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductPageBreadcrumb_BundleProduct_Fragment = { __typename: 'BundleProduct', uid: string, name?: string | null, url_key?: string | null, categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_name?: string | null, category_uid: string, category_url_path?: string | null, category_level?: number | null } | null> | null } | null> | null };

export type ProductPageBreadcrumb_ConfigurableProduct_Fragment = { __typename: 'ConfigurableProduct', uid: string, name?: string | null, url_key?: string | null, categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_name?: string | null, category_uid: string, category_url_path?: string | null, category_level?: number | null } | null> | null } | null> | null };

export type ProductPageBreadcrumb_DownloadableProduct_Fragment = { __typename: 'DownloadableProduct', uid: string, name?: string | null, url_key?: string | null, categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_name?: string | null, category_uid: string, category_url_path?: string | null, category_level?: number | null } | null> | null } | null> | null };

export type ProductPageBreadcrumb_GroupedProduct_Fragment = { __typename: 'GroupedProduct', uid: string, name?: string | null, url_key?: string | null, categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_name?: string | null, category_uid: string, category_url_path?: string | null, category_level?: number | null } | null> | null } | null> | null };

export type ProductPageBreadcrumb_SimpleProduct_Fragment = { __typename: 'SimpleProduct', uid: string, name?: string | null, url_key?: string | null, categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_name?: string | null, category_uid: string, category_url_path?: string | null, category_level?: number | null } | null> | null } | null> | null };

export type ProductPageBreadcrumb_VirtualProduct_Fragment = { __typename: 'VirtualProduct', uid: string, name?: string | null, url_key?: string | null, categories?: Array<{ uid: string, name?: string | null, url_path?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_name?: string | null, category_uid: string, category_url_path?: string | null, category_level?: number | null } | null> | null } | null> | null };

export type ProductPageBreadcrumbFragment = ProductPageBreadcrumb_BundleProduct_Fragment | ProductPageBreadcrumb_ConfigurableProduct_Fragment | ProductPageBreadcrumb_DownloadableProduct_Fragment | ProductPageBreadcrumb_GroupedProduct_Fragment | ProductPageBreadcrumb_SimpleProduct_Fragment | ProductPageBreadcrumb_VirtualProduct_Fragment;
