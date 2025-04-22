/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CartAddress_BillingCartAddress_Fragment = { __typename: 'BillingCartAddress', firstname: string, lastname: string, city: string, company?: string | null, vat_id?: string | null, postcode?: string | null, street: Array<string | null>, telephone?: string | null, country: { code: string, label: string }, region?: { code?: string | null, label?: string | null, region_id?: number | null } | null };

export type CartAddress_ShippingCartAddress_Fragment = { __typename: 'ShippingCartAddress', firstname: string, lastname: string, city: string, company?: string | null, vat_id?: string | null, postcode?: string | null, street: Array<string | null>, telephone?: string | null, country: { code: string, label: string }, region?: { code?: string | null, label?: string | null, region_id?: number | null } | null };

export type CartAddressFragment = CartAddress_BillingCartAddress_Fragment | CartAddress_ShippingCartAddress_Fragment;
