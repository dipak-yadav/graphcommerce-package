/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductReviews_BundleProduct_Fragment = { review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type ProductReviews_ConfigurableProduct_Fragment = { review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type ProductReviews_DownloadableProduct_Fragment = { review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type ProductReviews_GroupedProduct_Fragment = { review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type ProductReviews_SimpleProduct_Fragment = { review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type ProductReviews_VirtualProduct_Fragment = { review_count: number, url_key?: string | null, sku?: string | null, reviews: { page_info: { total_pages?: number | null, current_page?: number | null }, items: Array<{ average_rating: number, created_at: string, nickname: string, summary: string, text: string, ratings_breakdown: Array<{ name: string, value: string } | null> } | null> } };

export type ProductReviewsFragment = ProductReviews_BundleProduct_Fragment | ProductReviews_ConfigurableProduct_Fragment | ProductReviews_DownloadableProduct_Fragment | ProductReviews_GroupedProduct_Fragment | ProductReviews_SimpleProduct_Fragment | ProductReviews_VirtualProduct_Fragment;
