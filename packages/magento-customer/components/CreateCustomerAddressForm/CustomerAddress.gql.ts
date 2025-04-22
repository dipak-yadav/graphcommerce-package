/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CustomerAddressFragment = { id?: number | null, prefix?: string | null, firstname?: string | null, middlename?: string | null, lastname?: string | null, suffix?: string | null, city?: string | null, company?: string | null, country_code?: Types.CountryCodeEnum | null, postcode?: string | null, street?: Array<string | null> | null, telephone?: string | null, vat_id?: string | null, default_shipping?: boolean | null, default_billing?: boolean | null, region?: { region?: string | null, region_code?: string | null, region_id?: number | null } | null };
