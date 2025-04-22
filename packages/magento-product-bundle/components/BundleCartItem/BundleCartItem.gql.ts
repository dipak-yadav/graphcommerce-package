/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type BundleCartItemFragment = { prices?: { price: { currency?: Types.CurrencyEnum | null } } | null, bundle_options: Array<{ uid: string, label: string, type: string, values: Array<{ uid: string, label: string, quantity: number, price: number } | null> } | null>, customizable_options: Array<{ customizable_option_uid: string, is_required: boolean, label: string, type: string, values: Array<{ customizable_option_value_uid: string, label: string, value: string, price: { type: Types.PriceTypeEnum, units: string, value: number } } | null> } | null> };
