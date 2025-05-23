/* hash:918392619 */
/* eslint-disable */
/* This file is automatically generated for @graphcommerce/hygraph-ui/lib/hygraphPageContent */

/** @see {@link file://./hygraphPageContent.ts} for source of original */
/** SOURCE_START */
import type { ApolloClient, NormalizedCacheObject } from '@graphcommerce/graphql'
import { hygraphPageContent as hygraphPageContenthygraphDynamicRowsPageContent } from '@graphcommerce/hygraph-dynamic-rows/plugins/hygraphDynamicRowsPageContent'
import type { HygraphPagesQuery } from '../graphql'
import { HygraphPagesDocument } from '../graphql'
import { getAllHygraphPages } from './getAllHygraphPages'

async function pageContent(
  client: ApolloClient<NormalizedCacheObject>,
  url: string,
  cached: boolean,
): Promise<{
  data: HygraphPagesQuery
}> {
  const alwaysCache = process.env.NODE_ENV !== 'development' ? 'cache-first' : undefined
  const fetchPolicy = cached ? alwaysCache : undefined
  const allRoutes = await getAllHygraphPages(client)
  const found = allRoutes.some((page) => page.url === url)
  return found
    ? client.query({
        query: HygraphPagesDocument,
        variables: {
          url,
        },
        fetchPolicy,
      })
    : Promise.resolve({
        data: {
          pages: [],
        },
      })
}
export async function hygraphPageContentOriginal(
  client: ApolloClient<NormalizedCacheObject>,
  url: string,
  additionalProperties?: Promise<object> | object,
  cached = false,
): Promise<{
  data: HygraphPagesQuery
}> {
  return pageContent(client, url, cached)
}

/** SOURCE_END */

const logged: Set<string> = new Set()
const logOnce = (log: string, ...additional: unknown[]) => {
  if (logged.has(log)) return
  logged.add(log)
  console.warn(log, ...additional)
}

const hygraphPageContenthygraphDynamicRowsPageContentInterceptor: typeof hygraphPageContentOriginal =
  (...args) => {
    return hygraphPageContenthygraphDynamicRowsPageContent(hygraphPageContentOriginal, ...args)
  }

/**
 * Here you see the 'interceptor' that is applying all the configured plugins.
 *
 * This file is NOT meant to be modified directly and is auto-generated if the plugins or the
 * original source changes.
 *
 * @see {@link file://./hygraphPageContent.ts} for original source file
 * @see {hygraphPageContenthygraphDynamicRowsPageContent} for source of applied plugin
 */
export const hygraphPageContent = hygraphPageContenthygraphDynamicRowsPageContentInterceptor
