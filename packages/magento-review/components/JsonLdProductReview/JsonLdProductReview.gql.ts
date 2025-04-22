/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type JsonLdProductReview_BundleProduct_Fragment = { rating_summary: number, review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type JsonLdProductReview_ConfigurableProduct_Fragment = { rating_summary: number, review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type JsonLdProductReview_DownloadableProduct_Fragment = { rating_summary: number, review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type JsonLdProductReview_GroupedProduct_Fragment = { rating_summary: number, review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type JsonLdProductReview_SimpleProduct_Fragment = { rating_summary: number, review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type JsonLdProductReview_VirtualProduct_Fragment = { rating_summary: number, review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type JsonLdProductReviewFragment = JsonLdProductReview_BundleProduct_Fragment | JsonLdProductReview_ConfigurableProduct_Fragment | JsonLdProductReview_DownloadableProduct_Fragment | JsonLdProductReview_GroupedProduct_Fragment | JsonLdProductReview_SimpleProduct_Fragment | JsonLdProductReview_VirtualProduct_Fragment;
