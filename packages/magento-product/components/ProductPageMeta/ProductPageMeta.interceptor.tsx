/* hash:1041610215 */
/* eslint-disable */
/* This file is automatically generated for @graphcommerce/magento-product/components/ProductPageMeta/ProductPageMeta */
import { ProductPageMeta as ProductPageMetaGoogleDatalayerViewItem } from '@graphcommerce/google-datalayer/plugins/GoogleDatalayerViewItem'
import { ProductPageMeta as ProductPageMetaRegisterProductAsRecentlyViewed } from '@graphcommerce/magento-recently-viewed-products/plugins/RegisterProductAsRecentlyViewed'
/** @see {@link file://./ProductPageMeta.tsx} for source of original */
/** SOURCE_START */
import { PageMeta } from '@graphcommerce/magento-store'
import type { PageMetaProps } from '@graphcommerce/next-ui'
import type { DistributedOmit as OmitPrev } from 'type-fest'
import { productLink } from '../../hooks/useProductLink'
import type { ProductPageMetaFragment } from './ProductPageMeta.gql'

export type ProductPageMetaProps = {
  product: ProductPageMetaFragment
} & Pick<PageMetaProps, 'children' | 'ogImage' | 'ogImageUseFallback'>
export function ProductPageMetaOriginal(props: ProductPageMetaProps) {
  const { product, ...rest } = props
  const {
    sku,
    categories,
    price_range,
    media_gallery,
    name,
    meta_title,
    meta_description,
    url_key,
    __typename,
  } = product
  return (
    <PageMeta
      title={meta_title ?? name ?? ''}
      metaDescription={meta_description ?? name ?? ''}
      canonical={productLink({
        url_key,
        __typename,
      })}
      ogImage={media_gallery?.[0]?.url}
      ogType='product'
      {...rest}
    >
      {sku && <meta property='product:retailer_part_no' content={sku} key='og-product-sku' />}
      {price_range?.minimum_price?.regular_price?.value && (
        <meta
          property='product:price:amount'
          content={price_range.minimum_price.regular_price.value.toString()}
          key='og-product-price'
        />
      )}
      {price_range?.minimum_price?.final_price?.value && (
        <meta
          property='product:sale_price:amount'
          content={price_range.minimum_price.final_price.value.toString()}
          key='og-product-sale-price'
        />
      )}
      {price_range?.minimum_price?.final_price?.currency && (
        <meta
          property='product:price:currency'
          content={price_range.minimum_price.final_price.currency}
          key='og-product-currency'
        />
      )}
      {categories &&
        categories.map((category) =>
          category?.name ? (
            <meta property='product:category' content={category.name} key={category.uid} />
          ) : null,
        )}
    </PageMeta>
  )
}

/** SOURCE_END */

type ProductPageMetaGoogleDatalayerViewItemProps = OmitPrev<
  React.ComponentProps<typeof ProductPageMetaGoogleDatalayerViewItem>,
  'Prev'
>

const ProductPageMetaGoogleDatalayerViewItemInterceptor = (
  props: ProductPageMetaGoogleDatalayerViewItemProps,
) => <ProductPageMetaGoogleDatalayerViewItem {...props} Prev={ProductPageMetaOriginal} />

type ProductPageMetaRegisterProductAsRecentlyViewedProps =
  ProductPageMetaGoogleDatalayerViewItemProps &
    OmitPrev<React.ComponentProps<typeof ProductPageMetaRegisterProductAsRecentlyViewed>, 'Prev'>

const ProductPageMetaRegisterProductAsRecentlyViewedInterceptor = (
  props: ProductPageMetaRegisterProductAsRecentlyViewedProps,
) => (
  <ProductPageMetaRegisterProductAsRecentlyViewed
    {...props}
    Prev={ProductPageMetaGoogleDatalayerViewItemInterceptor}
  />
)

/**
 * Here you see the 'interceptor' that is applying all the configured plugins.
 *
 * This file is NOT meant to be modified directly and is auto-generated if the plugins or the
 * original source changes.
 *
 * @see {@link file://./ProductPageMeta.tsx} for original source file
 * @see {ProductPageMetaGoogleDatalayerViewItem} for source of applied plugin
 * @see {ProductPageMetaRegisterProductAsRecentlyViewed} for source of applied plugin
 */
export const ProductPageMeta = ProductPageMetaRegisterProductAsRecentlyViewedInterceptor
