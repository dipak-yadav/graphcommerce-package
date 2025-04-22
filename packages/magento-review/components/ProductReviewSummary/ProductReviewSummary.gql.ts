/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductReviewSummary_BundleProduct_Fragment = { rating_summary: number };

export type ProductReviewSummary_ConfigurableProduct_Fragment = { rating_summary: number };

export type ProductReviewSummary_DownloadableProduct_Fragment = { rating_summary: number };

export type ProductReviewSummary_GroupedProduct_Fragment = { rating_summary: number };

export type ProductReviewSummary_SimpleProduct_Fragment = { rating_summary: number };

export type ProductReviewSummary_VirtualProduct_Fragment = { rating_summary: number };

export type ProductReviewSummaryFragment = ProductReviewSummary_BundleProduct_Fragment | ProductReviewSummary_ConfigurableProduct_Fragment | ProductReviewSummary_DownloadableProduct_Fragment | ProductReviewSummary_GroupedProduct_Fragment | ProductReviewSummary_SimpleProduct_Fragment | ProductReviewSummary_VirtualProduct_Fragment;
