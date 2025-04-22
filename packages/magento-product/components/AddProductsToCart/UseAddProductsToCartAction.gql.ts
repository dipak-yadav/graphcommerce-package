/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type UseAddProductsToCartAction_BundleProduct_Fragment = { __typename: 'BundleProduct', uid: string, sku?: string | null, only_x_left_in_stock?: number | null, stock_status?: Types.ProductStockStatus | null, id?: number | null, name?: string | null };

export type UseAddProductsToCartAction_ConfigurableProduct_Fragment = { __typename: 'ConfigurableProduct', uid: string, sku?: string | null, only_x_left_in_stock?: number | null, stock_status?: Types.ProductStockStatus | null, id?: number | null, name?: string | null };

export type UseAddProductsToCartAction_DownloadableProduct_Fragment = { __typename: 'DownloadableProduct', uid: string, sku?: string | null, only_x_left_in_stock?: number | null, stock_status?: Types.ProductStockStatus | null, id?: number | null, name?: string | null };

export type UseAddProductsToCartAction_GroupedProduct_Fragment = { __typename: 'GroupedProduct', uid: string, sku?: string | null, only_x_left_in_stock?: number | null, stock_status?: Types.ProductStockStatus | null, id?: number | null, name?: string | null };

export type UseAddProductsToCartAction_SimpleProduct_Fragment = { __typename: 'SimpleProduct', uid: string, sku?: string | null, only_x_left_in_stock?: number | null, stock_status?: Types.ProductStockStatus | null, id?: number | null, name?: string | null };

export type UseAddProductsToCartAction_VirtualProduct_Fragment = { __typename: 'VirtualProduct', uid: string, sku?: string | null, only_x_left_in_stock?: number | null, stock_status?: Types.ProductStockStatus | null, id?: number | null, name?: string | null };

export type UseAddProductsToCartActionFragment = UseAddProductsToCartAction_BundleProduct_Fragment | UseAddProductsToCartAction_ConfigurableProduct_Fragment | UseAddProductsToCartAction_DownloadableProduct_Fragment | UseAddProductsToCartAction_GroupedProduct_Fragment | UseAddProductsToCartAction_SimpleProduct_Fragment | UseAddProductsToCartAction_VirtualProduct_Fragment;
