/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type AccountAddressesFragment = { addresses?: Array<{ default_billing?: boolean | null, default_shipping?: boolean | null, id?: number | null, prefix?: string | null, firstname?: string | null, middlename?: string | null, lastname?: string | null, suffix?: string | null, city?: string | null, company?: string | null, country_code?: Types.CountryCodeEnum | null, postcode?: string | null, street?: Array<string | null> | null, telephone?: string | null, vat_id?: string | null, region?: { region?: string | null, region_code?: string | null, region_id?: number | null } | null } | null> | null };
