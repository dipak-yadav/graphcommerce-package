/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type DownloadableCartItemFragment = { customizable_options: Array<{ customizable_option_uid: string, is_required: boolean, label: string, type: string, values: Array<{ customizable_option_value_uid: string, label: string, value: string, price: { type: Types.PriceTypeEnum, units: string, value: number } } | null> } | null>, links?: Array<{ uid: string, price?: number | null, sample_url?: string | null, title?: string | null } | null> | null, samples?: Array<{ sample_url?: string | null, sort_order?: number | null, title?: string | null } | null> | null };
