/* hash:1429436569 */
/* eslint-disable */
/* This file is automatically generated for @graphcommerce/magento-cart-items/components/CartItemActionCard/CartItemActionCard */

/** @see {@link file://./CartItemActionCard.tsx} for source of original */
/** SOURCE_START */
import { Image } from '@graphcommerce/image'
import { useDisplayInclTax } from '@graphcommerce/magento-cart/hooks'
import type { ProductLinkProps } from '@graphcommerce/magento-product'
import { CartItemActionCard as CartItemActionCardBundleCartItemActionCard } from '@graphcommerce/magento-product-bundle/plugins/BundleCartItemActionCard'
import { CartItemActionCard as CartItemActionCardConfigurableCartItemActionCard } from '@graphcommerce/magento-product-configurable/plugins/ConfigurableCartItemActionCard'
import { CartItemActionCard as CartItemActionCardSimpleCartItemActionCard } from '@graphcommerce/magento-product-simple/plugins/SimpleCartItemActionCard'
import { CartItemActionCard as CartItemActionCardVirtualCartItemActionCard } from '@graphcommerce/magento-product-virtual/plugins/VirtualCartItemActionCard'
import { Money } from '@graphcommerce/magento-store'
import type { ActionCardProps } from '@graphcommerce/next-ui'
import { ActionCard, actionCardImageSizes, filterNonNullableKeys } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { Box, Button, Link } from '@mui/material'
import type { DistributedOmit as OmitPrev } from 'type-fest'
import type { CartItemFragment } from '../../Api/CartItem.gql'
import { RemoveItemFromCart } from '../RemoveItemFromCart/RemoveItemFromCart'
import { UpdateItemQuantity } from '../UpdateItemQuantity/UpdateItemQuantity'

export type CartItemActionCardProps = {
  cartItem: CartItemFragment
  readOnly?: boolean
} & Omit<ActionCardProps, 'value' | 'image' | 'price' | 'title' | 'action'>
export function productEditLink(link: ProductLinkProps) {
  return `/checkout/item/${link.url_key}`
}
export function CartItemActionCardOriginal(props: CartItemActionCardProps) {
  const { cartItem, sx = [], size = 'responsive', readOnly = false, ...rest } = props
  const { uid, quantity, prices, errors, product } = cartItem
  const { name, thumbnail, url_key } = product
  const inclTaxes = useDisplayInclTax()
  let price: number | null | undefined
  if (inclTaxes) {
    if (prices?.price_including_tax) {
      price = prices.price_including_tax.value
    } else {
      const rowTotalIncludingTax = prices?.row_total_including_tax?.value ?? 0
      price = rowTotalIncludingTax / quantity
    }
  } else {
    price = prices?.price.value
  }
  const hasOptions = !(
    (cartItem.__typename === 'SimpleCartItem' || cartItem.__typename === 'VirtualCartItem') &&
    cartItem.customizable_options.length === 0
  )
  return (
    <ActionCard
      value={uid}
      sx={[
        (theme) => ({
          '&.ActionCard-root': {
            px: 0,
            py: theme.spacings.xs,
          },
          '& .ActionCard-rootInner': {
            justifyContent: 'space-between',
            alignItems: 'stretch',
          },
          '&.sizeSmall': {
            px: 0,
          },
          '&.sizeResponsive': {
            [theme.breakpoints.down('md')]: {
              px: 0,
            },
          },
          '& .ActionCard-end': {
            justifyContent: readOnly ? 'center' : 'space-between',
          },
          '& .ActionCard-action': {
            pr: readOnly ? 0 : theme.spacings.xs,
          },
          '& .ActionCard-image': {
            alignSelf: 'flex-start',
          },
          '& .ActionCard-secondaryAction': {
            display: 'grid',
            rowGap: theme.spacings.xs,
            justifyItems: 'start',
          },
          '& .ActionCard-price': {
            pr: readOnly ? 0 : theme.spacings.xs,
            mb: {
              xs: 0.5,
              sm: 0,
            },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      image={
        thumbnail?.url && (
          <Image
            layout='fill'
            src={thumbnail?.url}
            sx={{
              width: actionCardImageSizes[size],
              height: actionCardImageSizes[size],
              display: 'block',
              borderRadius: 1,
              objectFit: 'contain',
            }}
            sizes={actionCardImageSizes[size]}
          />
        )
      }
      title={
        url_key ? (
          <Link
            href={url_key}
            underline='hover'
            sx={{
              color: 'inherit',
              flexWrap: 'nowrap',
              maxWidth: 'max-content',
            }}
          >
            {name}
          </Link>
        ) : (
          name
        )
      }
      secondaryAction={
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
              mt: 1,
              gap: '10px',
              justifyContent: 'start',
            }}
          >
            {readOnly ? quantity : <UpdateItemQuantity uid={uid} quantity={quantity} />}
            {' ⨉ '}

            <Money value={price} currency={prices?.price.currency} />
          </Box>
          {hasOptions && !readOnly && (
            <Button
              variant='inline'
              color='secondary'
              href={`${productEditLink(product)}?cartItemId=${uid}`}
            >
              <Trans id='Edit options' />
            </Button>
          )}
        </>
      }
      price={<Money {...(inclTaxes ? prices?.row_total_including_tax : prices?.row_total)} />}
      action={
        !readOnly && (
          <RemoveItemFromCart
            {...cartItem}
            buttonProps={{
              size: size === 'responsive' ? 'large' : size,
            }}
          />
        )
      }
      size={size}
      after={filterNonNullableKeys(errors).map((error) => (
        <Box
          sx={{
            color: 'error.main',
            typography: 'caption',
          }}
          key={error.message}
        >
          {error.message}
        </Box>
      ))}
      {...rest}
      details={<>{rest.details}</>}
    />
  )
}

/** SOURCE_END */

type CartItemActionCardSimpleCartItemActionCardProps = OmitPrev<
  React.ComponentProps<typeof CartItemActionCardSimpleCartItemActionCard>,
  'Prev'
>

const CartItemActionCardSimpleCartItemActionCardInterceptor = (
  props: CartItemActionCardSimpleCartItemActionCardProps,
) => <CartItemActionCardSimpleCartItemActionCard {...props} Prev={CartItemActionCardOriginal} />

type CartItemActionCardConfigurableCartItemActionCardProps =
  CartItemActionCardSimpleCartItemActionCardProps &
    OmitPrev<React.ComponentProps<typeof CartItemActionCardConfigurableCartItemActionCard>, 'Prev'>

const CartItemActionCardConfigurableCartItemActionCardInterceptor = (
  props: CartItemActionCardConfigurableCartItemActionCardProps,
) => (
  <CartItemActionCardConfigurableCartItemActionCard
    {...props}
    Prev={CartItemActionCardSimpleCartItemActionCardInterceptor}
  />
)

type CartItemActionCardVirtualCartItemActionCardProps =
  CartItemActionCardConfigurableCartItemActionCardProps &
    OmitPrev<React.ComponentProps<typeof CartItemActionCardVirtualCartItemActionCard>, 'Prev'>

const CartItemActionCardVirtualCartItemActionCardInterceptor = (
  props: CartItemActionCardVirtualCartItemActionCardProps,
) => (
  <CartItemActionCardVirtualCartItemActionCard
    {...props}
    Prev={CartItemActionCardConfigurableCartItemActionCardInterceptor}
  />
)

type CartItemActionCardBundleCartItemActionCardProps =
  CartItemActionCardVirtualCartItemActionCardProps &
    OmitPrev<React.ComponentProps<typeof CartItemActionCardBundleCartItemActionCard>, 'Prev'>

const CartItemActionCardBundleCartItemActionCardInterceptor = (
  props: CartItemActionCardBundleCartItemActionCardProps,
) => (
  <CartItemActionCardBundleCartItemActionCard
    {...props}
    Prev={CartItemActionCardVirtualCartItemActionCardInterceptor}
  />
)

/**
 * Here you see the 'interceptor' that is applying all the configured plugins.
 *
 * This file is NOT meant to be modified directly and is auto-generated if the plugins or the
 * original source changes.
 *
 * @see {@link file://./CartItemActionCard.tsx} for original source file
 * @see {CartItemActionCardSimpleCartItemActionCard} for source of applied plugin
 * @see {CartItemActionCardConfigurableCartItemActionCard} for source of applied plugin
 * @see {CartItemActionCardVirtualCartItemActionCard} for source of applied plugin
 * @see {CartItemActionCardBundleCartItemActionCard} for source of applied plugin
 */
export const CartItemActionCard = CartItemActionCardBundleCartItemActionCardInterceptor
