/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ProductListPriceFragment = { regular_price: { currency?: Types.CurrencyEnum | null, value?: number | null }, discount?: { amount_off?: number | null, percent_off?: number | null } | null, final_price: { currency?: Types.CurrencyEnum | null, value?: number | null } };
