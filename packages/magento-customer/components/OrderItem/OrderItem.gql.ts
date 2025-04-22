/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type OrderItem_BundleOrderItem_Fragment = { id: string, product_sku: string, product_url_key?: string | null, product_name?: string | null, quantity_invoiced?: number | null, quantity_ordered?: number | null, quantity_refunded?: number | null, quantity_returned?: number | null, quantity_shipped?: number | null, quantity_canceled?: number | null, selected_options?: Array<{ label: string, value: string } | null> | null, product_sale_price: { currency?: Types.CurrencyEnum | null, value?: number | null } };

export type OrderItem_DownloadableOrderItem_Fragment = { id: string, product_sku: string, product_url_key?: string | null, product_name?: string | null, quantity_invoiced?: number | null, quantity_ordered?: number | null, quantity_refunded?: number | null, quantity_returned?: number | null, quantity_shipped?: number | null, quantity_canceled?: number | null, selected_options?: Array<{ label: string, value: string } | null> | null, product_sale_price: { currency?: Types.CurrencyEnum | null, value?: number | null } };

export type OrderItem_OrderItem_Fragment = { id: string, product_sku: string, product_url_key?: string | null, product_name?: string | null, quantity_invoiced?: number | null, quantity_ordered?: number | null, quantity_refunded?: number | null, quantity_returned?: number | null, quantity_shipped?: number | null, quantity_canceled?: number | null, selected_options?: Array<{ label: string, value: string } | null> | null, product_sale_price: { currency?: Types.CurrencyEnum | null, value?: number | null } };

export type OrderItemFragment = OrderItem_BundleOrderItem_Fragment | OrderItem_DownloadableOrderItem_Fragment | OrderItem_OrderItem_Fragment;
