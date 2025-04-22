/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type OrderCardItemImage_BundleProduct_Fragment = { uid: string, url_key?: string | null, thumbnail?: { url?: string | null, label?: string | null, disabled?: boolean | null } | null };

export type OrderCardItemImage_ConfigurableProduct_Fragment = { uid: string, url_key?: string | null, thumbnail?: { url?: string | null, label?: string | null, disabled?: boolean | null } | null };

export type OrderCardItemImage_DownloadableProduct_Fragment = { uid: string, url_key?: string | null, thumbnail?: { url?: string | null, label?: string | null, disabled?: boolean | null } | null };

export type OrderCardItemImage_GroupedProduct_Fragment = { uid: string, url_key?: string | null, thumbnail?: { url?: string | null, label?: string | null, disabled?: boolean | null } | null };

export type OrderCardItemImage_SimpleProduct_Fragment = { uid: string, url_key?: string | null, thumbnail?: { url?: string | null, label?: string | null, disabled?: boolean | null } | null };

export type OrderCardItemImage_VirtualProduct_Fragment = { uid: string, url_key?: string | null, thumbnail?: { url?: string | null, label?: string | null, disabled?: boolean | null } | null };

export type OrderCardItemImageFragment = OrderCardItemImage_BundleProduct_Fragment | OrderCardItemImage_ConfigurableProduct_Fragment | OrderCardItemImage_DownloadableProduct_Fragment | OrderCardItemImage_GroupedProduct_Fragment | OrderCardItemImage_SimpleProduct_Fragment | OrderCardItemImage_VirtualProduct_Fragment;
