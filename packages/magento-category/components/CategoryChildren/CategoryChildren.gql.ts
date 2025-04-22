/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CategoryChildrenFragment = { uid: string, children?: Array<{ uid: string, include_in_menu?: number | null, name?: string | null, url_path?: string | null, level?: number | null, is_anchor?: number | null } | null> | null };
