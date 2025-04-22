/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type JsonLdProductOffer_BundleProduct_Fragment = { price_range: { minimum_price: { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } } } };

export type JsonLdProductOffer_ConfigurableProduct_Fragment = { price_range: { minimum_price: { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } } } };

export type JsonLdProductOffer_DownloadableProduct_Fragment = { price_range: { minimum_price: { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } } } };

export type JsonLdProductOffer_GroupedProduct_Fragment = { price_range: { minimum_price: { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } } } };

export type JsonLdProductOffer_SimpleProduct_Fragment = { price_range: { minimum_price: { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } } } };

export type JsonLdProductOffer_VirtualProduct_Fragment = { price_range: { minimum_price: { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } } } };

export type JsonLdProductOfferFragment = JsonLdProductOffer_BundleProduct_Fragment | JsonLdProductOffer_ConfigurableProduct_Fragment | JsonLdProductOffer_DownloadableProduct_Fragment | JsonLdProductOffer_GroupedProduct_Fragment | JsonLdProductOffer_SimpleProduct_Fragment | JsonLdProductOffer_VirtualProduct_Fragment;
