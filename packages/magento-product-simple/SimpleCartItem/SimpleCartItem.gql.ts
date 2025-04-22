/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type SimpleCartItemFragment = { uid: string, customizable_options: Array<{ customizable_option_uid: string, is_required: boolean, label: string, type: string, values: Array<{ customizable_option_value_uid: string, label: string, value: string, price: { type: Types.PriceTypeEnum, units: string, value: number } } | null> } | null> };
