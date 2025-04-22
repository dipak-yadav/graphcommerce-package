/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type OrderCardItem_BundleOrderItem_Fragment = { product_sku: string, product_url_key?: string | null };

export type OrderCardItem_DownloadableOrderItem_Fragment = { product_sku: string, product_url_key?: string | null };

export type OrderCardItem_OrderItem_Fragment = { product_sku: string, product_url_key?: string | null };

export type OrderCardItemFragment = OrderCardItem_BundleOrderItem_Fragment | OrderCardItem_DownloadableOrderItem_Fragment | OrderCardItem_OrderItem_Fragment;
