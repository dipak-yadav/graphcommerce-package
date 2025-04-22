/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CategorySearchResultFragment = { uid: string, url_path?: string | null, name?: string | null, include_in_menu?: number | null, breadcrumbs?: Array<{ category_uid: string, category_name?: string | null, category_url_path?: string | null, category_level?: number | null } | null> | null };
