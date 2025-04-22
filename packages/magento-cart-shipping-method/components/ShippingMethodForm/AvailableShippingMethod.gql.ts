/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type AvailableShippingMethodFragment = { available: boolean, carrier_code: string, carrier_title: string, error_message?: string | null, method_code?: string | null, method_title?: string | null, price_incl_tax: { currency?: Types.CurrencyEnum | null, value?: number | null }, price_excl_tax: { currency?: Types.CurrencyEnum | null, value?: number | null } };
