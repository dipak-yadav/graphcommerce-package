/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AddBundleProductsToCartOutputKeySpecifier = ('cart' | AddBundleProductsToCartOutputKeySpecifier)[];
export type AddBundleProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddConfigurableProductsToCartOutputKeySpecifier = ('cart' | AddConfigurableProductsToCartOutputKeySpecifier)[];
export type AddConfigurableProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddDownloadableProductsToCartOutputKeySpecifier = ('cart' | AddDownloadableProductsToCartOutputKeySpecifier)[];
export type AddDownloadableProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProductsToCartOutputKeySpecifier = ('cart' | 'user_errors' | AddProductsToCartOutputKeySpecifier)[];
export type AddProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProductsToWishlistOutputKeySpecifier = ('user_errors' | 'wishlist' | AddProductsToWishlistOutputKeySpecifier)[];
export type AddProductsToWishlistOutputFieldPolicy = {
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddSimpleProductsToCartOutputKeySpecifier = ('cart' | AddSimpleProductsToCartOutputKeySpecifier)[];
export type AddSimpleProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddVirtualProductsToCartOutputKeySpecifier = ('cart' | AddVirtualProductsToCartOutputKeySpecifier)[];
export type AddVirtualProductsToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddWishlistItemsToCartOutputKeySpecifier = ('add_wishlist_items_to_cart_user_errors' | 'status' | 'wishlist' | AddWishlistItemsToCartOutputKeySpecifier)[];
export type AddWishlistItemsToCartOutputFieldPolicy = {
	add_wishlist_items_to_cart_user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateKeySpecifier = ('count' | AggregateKeySpecifier)[];
export type AggregateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationKeySpecifier = ('attribute_code' | 'count' | 'label' | 'options' | 'position' | AggregationKeySpecifier)[];
export type AggregationFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationOptionKeySpecifier = ('count' | 'label' | 'value' | AggregationOptionKeySpecifier)[];
export type AggregationOptionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregationOptionInterfaceKeySpecifier = ('count' | 'label' | 'value' | AggregationOptionInterfaceKeySpecifier)[];
export type AggregationOptionInterfaceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplePayConfigKeySpecifier = ('button_styles' | 'code' | 'is_visible' | 'payment_intent' | 'payment_source' | 'sdk_params' | 'sort_order' | 'title' | ApplePayConfigKeySpecifier)[];
export type ApplePayConfigFieldPolicy = {
	button_styles?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_source?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppliedCouponKeySpecifier = ('code' | AppliedCouponKeySpecifier)[];
export type AppliedCouponFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplyCouponToCartOutputKeySpecifier = ('cart' | ApplyCouponToCartOutputKeySpecifier)[];
export type ApplyCouponToCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetKeySpecifier = ('alt' | 'assetPage' | 'assetPageLink' | 'assetRowHeroBanner' | 'assetRowProduct' | 'fileName' | 'handle' | 'height' | 'id' | 'locale' | 'mimeType' | 'rowSpecialBannerAsset' | 'size' | 'stage' | 'upload' | 'url' | 'width' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	assetPage?: FieldPolicy<any> | FieldReadFunction<any>,
	assetPageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	assetRowHeroBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	assetRowProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBannerAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	upload?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetUploadKeySpecifier = ('error' | 'expiresAt' | 'requestPostData' | 'status' | AssetUploadKeySpecifier)[];
export type AssetUploadFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPostData?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetUploadErrorKeySpecifier = ('code' | 'message' | AssetUploadErrorKeySpecifier)[];
export type AssetUploadErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetUploadRequestPostDataKeySpecifier = ('algorithm' | 'credential' | 'date' | 'key' | 'policy' | 'securityToken' | 'signature' | 'url' | AssetUploadRequestPostDataKeySpecifier)[];
export type AssetUploadRequestPostDataFieldPolicy = {
	algorithm?: FieldPolicy<any> | FieldReadFunction<any>,
	credential?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	policy?: FieldPolicy<any> | FieldReadFunction<any>,
	securityToken?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignCompareListToCustomerOutputKeySpecifier = ('compare_list' | 'result' | AssignCompareListToCustomerOutputKeySpecifier)[];
export type AssignCompareListToCustomerOutputFieldPolicy = {
	compare_list?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('attribute_code' | 'attribute_options' | 'attribute_type' | 'entity_type' | 'input_type' | 'storefront_properties' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_options?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_type?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	input_type?: FieldPolicy<any> | FieldReadFunction<any>,
	storefront_properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeMetadataKeySpecifier = ('code' | 'default_value' | 'entity_type' | 'frontend_class' | 'frontend_input' | 'is_required' | 'is_unique' | 'label' | 'options' | AttributeMetadataKeySpecifier)[];
export type AttributeMetadataFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_value?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_class?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_input?: FieldPolicy<any> | FieldReadFunction<any>,
	is_required?: FieldPolicy<any> | FieldReadFunction<any>,
	is_unique?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeMetadataErrorKeySpecifier = ('message' | 'type' | AttributeMetadataErrorKeySpecifier)[];
export type AttributeMetadataErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeOptionKeySpecifier = ('label' | 'value' | AttributeOptionKeySpecifier)[];
export type AttributeOptionFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeOptionMetadataKeySpecifier = ('is_default' | 'label' | 'value' | AttributeOptionMetadataKeySpecifier)[];
export type AttributeOptionMetadataFieldPolicy = {
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeSelectedOptionKeySpecifier = ('label' | 'value' | AttributeSelectedOptionKeySpecifier)[];
export type AttributeSelectedOptionFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeSelectedOptionInterfaceKeySpecifier = ('label' | 'value' | AttributeSelectedOptionInterfaceKeySpecifier)[];
export type AttributeSelectedOptionInterfaceFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeSelectedOptionsKeySpecifier = ('attribute' | 'code' | 'selected_options' | AttributeSelectedOptionsKeySpecifier)[];
export type AttributeSelectedOptionsFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueKeySpecifier = ('attribute' | 'code' | 'value' | AttributeValueKeySpecifier)[];
export type AttributeValueFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueInterfaceKeySpecifier = ('attribute' | 'code' | AttributeValueInterfaceKeySpecifier)[];
export type AttributeValueInterfaceFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributesFormOutputKeySpecifier = ('errors' | 'items' | AttributesFormOutputKeySpecifier)[];
export type AttributesFormOutputFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributesMetadataOutputKeySpecifier = ('errors' | 'items' | AttributesMetadataOutputKeySpecifier)[];
export type AttributesMetadataOutputFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailablePaymentMethodKeySpecifier = ('code' | 'is_deferred' | 'title' | AvailablePaymentMethodKeySpecifier)[];
export type AvailablePaymentMethodFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	is_deferred?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailableShippingMethodKeySpecifier = ('amount' | 'available' | 'base_amount' | 'carrier_code' | 'carrier_title' | 'error_message' | 'method_code' | 'method_title' | 'price_excl_tax' | 'price_incl_tax' | AvailableShippingMethodKeySpecifier)[];
export type AvailableShippingMethodFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	base_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_code?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_title?: FieldPolicy<any> | FieldReadFunction<any>,
	error_message?: FieldPolicy<any> | FieldReadFunction<any>,
	method_code?: FieldPolicy<any> | FieldReadFunction<any>,
	method_title?: FieldPolicy<any> | FieldReadFunction<any>,
	price_excl_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	price_incl_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingCartAddressKeySpecifier = ('city' | 'company' | 'country' | 'customer_notes' | 'fax' | 'firstname' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'street' | 'suffix' | 'telephone' | 'uid' | 'vat_id' | BillingCartAddressKeySpecifier)[];
export type BillingCartAddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_notes?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BreadcrumbKeySpecifier = ('category_id' | 'category_level' | 'category_name' | 'category_uid' | 'category_url_key' | 'category_url_path' | BreadcrumbKeySpecifier)[];
export type BreadcrumbFieldPolicy = {
	category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	category_level?: FieldPolicy<any> | FieldReadFunction<any>,
	category_name?: FieldPolicy<any> | FieldReadFunction<any>,
	category_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	category_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	category_url_path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleCartItemKeySpecifier = ('bundle_options' | 'customizable_options' | 'errors' | 'gift_message' | 'id' | 'is_available' | 'prices' | 'product' | 'quantity' | 'uid' | BundleCartItemKeySpecifier)[];
export type BundleCartItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleCreditMemoItemKeySpecifier = ('bundle_options' | 'discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | BundleCreditMemoItemKeySpecifier)[];
export type BundleCreditMemoItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleInvoiceItemKeySpecifier = ('bundle_options' | 'discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | BundleInvoiceItemKeySpecifier)[];
export type BundleInvoiceItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleItemKeySpecifier = ('option_id' | 'options' | 'position' | 'price_range' | 'required' | 'sku' | 'title' | 'type' | 'uid' | BundleItemKeySpecifier)[];
export type BundleItemFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleItemOptionKeySpecifier = ('can_change_quantity' | 'id' | 'is_default' | 'label' | 'position' | 'price' | 'price_type' | 'product' | 'qty' | 'quantity' | 'uid' | BundleItemOptionKeySpecifier)[];
export type BundleItemOptionFieldPolicy = {
	can_change_quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleOrderItemKeySpecifier = ('bundle_options' | 'discounts' | 'entered_options' | 'gift_message' | 'id' | 'product' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | BundleOrderItemKeySpecifier)[];
export type BundleOrderItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleProductKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'dynamic_price' | 'dynamic_sku' | 'dynamic_weight' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'items' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_details' | 'price_range' | 'price_tiers' | 'price_view' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'ship_bundle_items' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | 'weight' | BundleProductKeySpecifier)[];
export type BundleProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamic_price?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamic_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamic_weight?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_details?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	price_view?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_bundle_items?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleShipmentItemKeySpecifier = ('bundle_options' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_shipped' | BundleShipmentItemKeySpecifier)[];
export type BundleShipmentItemFieldPolicy = {
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleWishlistItemKeySpecifier = ('added_at' | 'bundle_options' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | BundleWishlistItemKeySpecifier)[];
export type BundleWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	bundle_options?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ButtonStylesKeySpecifier = ('color' | 'height' | 'label' | 'layout' | 'shape' | 'tagline' | 'use_default_height' | ButtonStylesKeySpecifier)[];
export type ButtonStylesFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	layout?: FieldPolicy<any> | FieldReadFunction<any>,
	shape?: FieldPolicy<any> | FieldReadFunction<any>,
	tagline?: FieldPolicy<any> | FieldReadFunction<any>,
	use_default_height?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancelOrderOutputKeySpecifier = ('error' | 'order' | CancelOrderOutputKeySpecifier)[];
export type CancelOrderOutputFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancellationReasonKeySpecifier = ('description' | CancellationReasonKeySpecifier)[];
export type CancellationReasonFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CardKeySpecifier = ('bin_details' | 'card_expiry_month' | 'card_expiry_year' | 'last_digits' | 'name' | CardKeySpecifier)[];
export type CardFieldPolicy = {
	bin_details?: FieldPolicy<any> | FieldReadFunction<any>,
	card_expiry_month?: FieldPolicy<any> | FieldReadFunction<any>,
	card_expiry_year?: FieldPolicy<any> | FieldReadFunction<any>,
	last_digits?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CardBinKeySpecifier = ('bin' | CardBinKeySpecifier)[];
export type CardBinFieldPolicy = {
	bin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CardPaymentSourceOutputKeySpecifier = ('brand' | 'expiry' | 'last_digits' | CardPaymentSourceOutputKeySpecifier)[];
export type CardPaymentSourceOutputFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	expiry?: FieldPolicy<any> | FieldReadFunction<any>,
	last_digits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartKeySpecifier = ('applied_coupon' | 'applied_coupons' | 'available_payment_methods' | 'billing_address' | 'email' | 'gift_message' | 'id' | 'is_virtual' | 'items' | 'itemsV2' | 'prices' | 'selected_payment_method' | 'shipping_addresses' | 'total_quantity' | CartKeySpecifier)[];
export type CartFieldPolicy = {
	applied_coupon?: FieldPolicy<any> | FieldReadFunction<any>,
	applied_coupons?: FieldPolicy<any> | FieldReadFunction<any>,
	available_payment_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	billing_address?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_virtual?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	itemsV2?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_payment_method?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	total_quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddressCountryKeySpecifier = ('code' | 'label' | CartAddressCountryKeySpecifier)[];
export type CartAddressCountryFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddressInterfaceKeySpecifier = ('city' | 'company' | 'country' | 'fax' | 'firstname' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'street' | 'suffix' | 'telephone' | 'uid' | 'vat_id' | CartAddressInterfaceKeySpecifier)[];
export type CartAddressInterfaceFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddressRegionKeySpecifier = ('code' | 'label' | 'region_id' | CartAddressRegionKeySpecifier)[];
export type CartAddressRegionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDiscountKeySpecifier = ('amount' | 'label' | CartDiscountKeySpecifier)[];
export type CartDiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemErrorKeySpecifier = ('code' | 'message' | CartItemErrorKeySpecifier)[];
export type CartItemErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemInterfaceKeySpecifier = ('errors' | 'id' | 'is_available' | 'prices' | 'product' | 'quantity' | 'uid' | CartItemInterfaceKeySpecifier)[];
export type CartItemInterfaceFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemPricesKeySpecifier = ('discounts' | 'fixed_product_taxes' | 'price' | 'price_including_tax' | 'row_total' | 'row_total_including_tax' | 'total_item_discount' | CartItemPricesKeySpecifier)[];
export type CartItemPricesFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	fixed_product_taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	row_total?: FieldPolicy<any> | FieldReadFunction<any>,
	row_total_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	total_item_discount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemQuantityKeySpecifier = ('cart_item_id' | 'quantity' | CartItemQuantityKeySpecifier)[];
export type CartItemQuantityFieldPolicy = {
	cart_item_id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemSelectedOptionValuePriceKeySpecifier = ('type' | 'units' | 'value' | CartItemSelectedOptionValuePriceKeySpecifier)[];
export type CartItemSelectedOptionValuePriceFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	units?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemsKeySpecifier = ('items' | 'page_info' | 'total_count' | CartItemsKeySpecifier)[];
export type CartItemsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartPricesKeySpecifier = ('applied_taxes' | 'discount' | 'discounts' | 'grand_total' | 'subtotal_excluding_tax' | 'subtotal_including_tax' | 'subtotal_with_discount_excluding_tax' | CartPricesKeySpecifier)[];
export type CartPricesFieldPolicy = {
	applied_taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal_excluding_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal_with_discount_excluding_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartTaxItemKeySpecifier = ('amount' | 'label' | CartTaxItemKeySpecifier)[];
export type CartTaxItemFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartUserInputErrorKeySpecifier = ('code' | 'message' | CartUserInputErrorKeySpecifier)[];
export type CartUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatalogAttributeMetadataKeySpecifier = ('apply_to' | 'code' | 'default_value' | 'entity_type' | 'frontend_class' | 'frontend_input' | 'is_comparable' | 'is_filterable' | 'is_filterable_in_search' | 'is_html_allowed_on_front' | 'is_required' | 'is_searchable' | 'is_unique' | 'is_used_for_price_rules' | 'is_used_for_promo_rules' | 'is_visible_in_advanced_search' | 'is_visible_on_front' | 'is_wysiwyg_enabled' | 'label' | 'options' | 'swatch_input_type' | 'update_product_preview_image' | 'use_product_image_for_swatch' | 'used_in_product_listing' | CatalogAttributeMetadataKeySpecifier)[];
export type CatalogAttributeMetadataFieldPolicy = {
	apply_to?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_value?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_class?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_input?: FieldPolicy<any> | FieldReadFunction<any>,
	is_comparable?: FieldPolicy<any> | FieldReadFunction<any>,
	is_filterable?: FieldPolicy<any> | FieldReadFunction<any>,
	is_filterable_in_search?: FieldPolicy<any> | FieldReadFunction<any>,
	is_html_allowed_on_front?: FieldPolicy<any> | FieldReadFunction<any>,
	is_required?: FieldPolicy<any> | FieldReadFunction<any>,
	is_searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	is_unique?: FieldPolicy<any> | FieldReadFunction<any>,
	is_used_for_price_rules?: FieldPolicy<any> | FieldReadFunction<any>,
	is_used_for_promo_rules?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible_in_advanced_search?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible_on_front?: FieldPolicy<any> | FieldReadFunction<any>,
	is_wysiwyg_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_input_type?: FieldPolicy<any> | FieldReadFunction<any>,
	update_product_preview_image?: FieldPolicy<any> | FieldReadFunction<any>,
	use_product_image_for_swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	used_in_product_listing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryInterfaceKeySpecifier = ('available_sort_by' | 'breadcrumbs' | 'canonical_url' | 'children_count' | 'cms_block' | 'created_at' | 'custom_layout_update_file' | 'default_sort_by' | 'description' | 'display_mode' | 'filter_price_range' | 'id' | 'image' | 'include_in_menu' | 'is_anchor' | 'landing_page' | 'level' | 'meta_description' | 'meta_keywords' | 'meta_title' | 'name' | 'path' | 'path_in_store' | 'position' | 'product_count' | 'products' | 'uid' | 'updated_at' | 'url_key' | 'url_path' | 'url_suffix' | CategoryInterfaceKeySpecifier)[];
export type CategoryInterfaceFieldPolicy = {
	available_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	children_count?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_block?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_layout_update_file?: FieldPolicy<any> | FieldReadFunction<any>,
	default_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	display_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	filter_price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	include_in_menu?: FieldPolicy<any> | FieldReadFunction<any>,
	is_anchor?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_page?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	path_in_store?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product_count?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryProductsKeySpecifier = ('items' | 'page_info' | 'total_count' | CategoryProductsKeySpecifier)[];
export type CategoryProductsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryResultKeySpecifier = ('items' | 'page_info' | 'total_count' | CategoryResultKeySpecifier)[];
export type CategoryResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTreeKeySpecifier = ('available_sort_by' | 'breadcrumbs' | 'canonical_url' | 'children' | 'children_count' | 'cms_block' | 'created_at' | 'custom_layout_update_file' | 'default_sort_by' | 'description' | 'display_mode' | 'filter_price_range' | 'id' | 'image' | 'include_in_menu' | 'is_anchor' | 'landing_page' | 'level' | 'meta_description' | 'meta_keywords' | 'meta_title' | 'name' | 'path' | 'path_in_store' | 'position' | 'product_count' | 'products' | 'redirect_code' | 'relative_url' | 'type' | 'uid' | 'updated_at' | 'url_key' | 'url_path' | 'url_suffix' | CategoryTreeKeySpecifier)[];
export type CategoryTreeFieldPolicy = {
	available_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	children_count?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_block?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_layout_update_file?: FieldPolicy<any> | FieldReadFunction<any>,
	default_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	display_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	filter_price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	include_in_menu?: FieldPolicy<any> | FieldReadFunction<any>,
	is_anchor?: FieldPolicy<any> | FieldReadFunction<any>,
	landing_page?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	path_in_store?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product_count?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAgreementKeySpecifier = ('agreement_id' | 'checkbox_text' | 'content' | 'content_height' | 'is_html' | 'mode' | 'name' | CheckoutAgreementKeySpecifier)[];
export type CheckoutAgreementFieldPolicy = {
	agreement_id?: FieldPolicy<any> | FieldReadFunction<any>,
	checkbox_text?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	content_height?: FieldPolicy<any> | FieldReadFunction<any>,
	is_html?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutUserInputErrorKeySpecifier = ('code' | 'message' | 'path' | CheckoutUserInputErrorKeySpecifier)[];
export type CheckoutUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsBlockKeySpecifier = ('content' | 'identifier' | 'title' | CmsBlockKeySpecifier)[];
export type CmsBlockFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsBlocksKeySpecifier = ('items' | CmsBlocksKeySpecifier)[];
export type CmsBlocksFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CmsPageKeySpecifier = ('content' | 'content_heading' | 'identifier' | 'meta_description' | 'meta_keywords' | 'meta_title' | 'page_layout' | 'redirect_code' | 'relative_url' | 'title' | 'type' | 'url_key' | CmsPageKeySpecifier)[];
export type CmsPageFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	content_heading?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	page_layout?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ColorSwatchDataKeySpecifier = ('value' | ColorSwatchDataKeySpecifier)[];
export type ColorSwatchDataFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComparableAttributeKeySpecifier = ('code' | 'label' | ComparableAttributeKeySpecifier)[];
export type ComparableAttributeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComparableItemKeySpecifier = ('attributes' | 'product' | 'uid' | ComparableItemKeySpecifier)[];
export type ComparableItemFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompareListKeySpecifier = ('attributes' | 'item_count' | 'items' | 'uid' | CompareListKeySpecifier)[];
export type CompareListFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	item_count?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComplexTextValueKeySpecifier = ('html' | ComplexTextValueKeySpecifier)[];
export type ComplexTextValueFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConditionAndKeySpecifier = ('conditions' | 'id' | 'stage' | ConditionAndKeySpecifier)[];
export type ConditionAndFieldPolicy = {
	conditions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConditionNumberKeySpecifier = ('id' | 'operator' | 'property' | 'stage' | 'value' | ConditionNumberKeySpecifier)[];
export type ConditionNumberFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operator?: FieldPolicy<any> | FieldReadFunction<any>,
	property?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConditionOrKeySpecifier = ('conditions' | 'id' | 'stage' | ConditionOrKeySpecifier)[];
export type ConditionOrFieldPolicy = {
	conditions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConditionTextKeySpecifier = ('id' | 'property' | 'stage' | 'value' | ConditionTextKeySpecifier)[];
export type ConditionTextFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	property?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableAttributeOptionKeySpecifier = ('code' | 'label' | 'uid' | 'value_index' | ConfigurableAttributeOptionKeySpecifier)[];
export type ConfigurableAttributeOptionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value_index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableCartItemKeySpecifier = ('configurable_options' | 'configured_variant' | 'customizable_options' | 'errors' | 'gift_message' | 'id' | 'is_available' | 'prices' | 'product' | 'quantity' | 'uid' | ConfigurableCartItemKeySpecifier)[];
export type ConfigurableCartItemFieldPolicy = {
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	configured_variant?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableOptionAvailableForSelectionKeySpecifier = ('attribute_code' | 'option_value_uids' | ConfigurableOptionAvailableForSelectionKeySpecifier)[];
export type ConfigurableOptionAvailableForSelectionFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	option_value_uids?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'configurable_options' | 'configurable_product_options_selection' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'variants' | 'websites' | 'weight' | ConfigurableProductKeySpecifier)[];
export type ConfigurableProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_product_options_selection?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionKeySpecifier = ('attribute_code' | 'label' | 'uid' | 'values' | ConfigurableProductOptionKeySpecifier)[];
export type ConfigurableProductOptionFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionValueKeySpecifier = ('is_available' | 'is_use_default' | 'label' | 'swatch' | 'uid' | ConfigurableProductOptionValueKeySpecifier)[];
export type ConfigurableProductOptionValueFieldPolicy = {
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	is_use_default?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionsKeySpecifier = ('attribute_code' | 'attribute_id' | 'attribute_id_v2' | 'attribute_uid' | 'id' | 'label' | 'position' | 'product_id' | 'uid' | 'use_default' | 'values' | ConfigurableProductOptionsKeySpecifier)[];
export type ConfigurableProductOptionsFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_id?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_id_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	use_default?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionsSelectionKeySpecifier = ('configurable_options' | 'media_gallery' | 'options_available_for_selection' | 'variant' | ConfigurableProductOptionsSelectionKeySpecifier)[];
export type ConfigurableProductOptionsSelectionFieldPolicy = {
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	options_available_for_selection?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableProductOptionsValuesKeySpecifier = ('default_label' | 'label' | 'store_label' | 'swatch_data' | 'uid' | 'use_default_value' | 'value_index' | ConfigurableProductOptionsValuesKeySpecifier)[];
export type ConfigurableProductOptionsValuesFieldPolicy = {
	default_label?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	store_label?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_data?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	use_default_value?: FieldPolicy<any> | FieldReadFunction<any>,
	value_index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableVariantKeySpecifier = ('attributes' | 'product' | ConfigurableVariantKeySpecifier)[];
export type ConfigurableVariantFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurableWishlistItemKeySpecifier = ('added_at' | 'child_sku' | 'configurable_options' | 'configured_variant' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | ConfigurableWishlistItemKeySpecifier)[];
export type ConfigurableWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	child_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	configured_variant?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactUsOutputKeySpecifier = ('status' | ContactUsOutputKeySpecifier)[];
export type ContactUsOutputFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('available_regions' | 'full_name_english' | 'full_name_locale' | 'id' | 'three_letter_abbreviation' | 'two_letter_abbreviation' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	available_regions?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name_english?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name_locale?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	three_letter_abbreviation?: FieldPolicy<any> | FieldReadFunction<any>,
	two_letter_abbreviation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateGuestCartOutputKeySpecifier = ('cart' | CreateGuestCartOutputKeySpecifier)[];
export type CreateGuestCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePayflowProTokenOutputKeySpecifier = ('response_message' | 'result' | 'result_code' | 'secure_token' | 'secure_token_id' | CreatePayflowProTokenOutputKeySpecifier)[];
export type CreatePayflowProTokenOutputFieldPolicy = {
	response_message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	result_code?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePaymentOrderOutputKeySpecifier = ('amount' | 'currency_code' | 'id' | 'mp_order_id' | 'status' | CreatePaymentOrderOutputKeySpecifier)[];
export type CreatePaymentOrderOutputFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mp_order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProductReviewOutputKeySpecifier = ('review' | CreateProductReviewOutputKeySpecifier)[];
export type CreateProductReviewOutputFieldPolicy = {
	review?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateVaultCardPaymentTokenOutputKeySpecifier = ('payment_source' | 'vault_token_id' | CreateVaultCardPaymentTokenOutputKeySpecifier)[];
export type CreateVaultCardPaymentTokenOutputFieldPolicy = {
	payment_source?: FieldPolicy<any> | FieldReadFunction<any>,
	vault_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateVaultCardSetupTokenOutputKeySpecifier = ('setup_token' | CreateVaultCardSetupTokenOutputKeySpecifier)[];
export type CreateVaultCardSetupTokenOutputFieldPolicy = {
	setup_token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoKeySpecifier = ('comments' | 'id' | 'items' | 'number' | 'total' | CreditMemoKeySpecifier)[];
export type CreditMemoFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoItemKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | CreditMemoItemKeySpecifier)[];
export type CreditMemoItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoItemInterfaceKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | CreditMemoItemInterfaceKeySpecifier)[];
export type CreditMemoItemInterfaceFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditMemoTotalKeySpecifier = ('adjustment' | 'base_grand_total' | 'discounts' | 'grand_total' | 'shipping_handling' | 'subtotal' | 'taxes' | 'total_shipping' | 'total_tax' | CreditMemoTotalKeySpecifier)[];
export type CreditMemoTotalFieldPolicy = {
	adjustment?: FieldPolicy<any> | FieldReadFunction<any>,
	base_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_handling?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrencyKeySpecifier = ('available_currency_codes' | 'base_currency_code' | 'base_currency_symbol' | 'default_display_currecy_code' | 'default_display_currecy_symbol' | 'default_display_currency_code' | 'default_display_currency_symbol' | 'exchange_rates' | CurrencyKeySpecifier)[];
export type CurrencyFieldPolicy = {
	available_currency_codes?: FieldPolicy<any> | FieldReadFunction<any>,
	base_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	base_currency_symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currecy_code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currecy_symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currency_symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	exchange_rates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentCartIdKeySpecifier = ('id' | 'locked' | CurrentCartIdKeySpecifier)[];
export type CurrentCartIdFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentCompareUidKeySpecifier = ('uid' | CurrentCompareUidKeySpecifier)[];
export type CurrentCompareUidFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomAttributeMetadataKeySpecifier = ('items' | CustomAttributeMetadataKeySpecifier)[];
export type CustomAttributeMetadataFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomAttributeMetadataInterfaceKeySpecifier = ('code' | 'default_value' | 'entity_type' | 'frontend_class' | 'frontend_input' | 'is_required' | 'is_unique' | 'label' | 'options' | CustomAttributeMetadataInterfaceKeySpecifier)[];
export type CustomAttributeMetadataInterfaceFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_value?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_class?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_input?: FieldPolicy<any> | FieldReadFunction<any>,
	is_required?: FieldPolicy<any> | FieldReadFunction<any>,
	is_unique?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomAttributeOptionInterfaceKeySpecifier = ('is_default' | 'label' | 'value' | CustomAttributeOptionInterfaceKeySpecifier)[];
export type CustomAttributeOptionInterfaceFieldPolicy = {
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('addresses' | 'allow_remote_shopping_assistance' | 'compare_list' | 'confirmation_status' | 'created_at' | 'custom_attributes' | 'date_of_birth' | 'default_billing' | 'default_shipping' | 'dob' | 'email' | 'firstname' | 'gender' | 'group_id' | 'id' | 'is_subscribed' | 'lastname' | 'middlename' | 'orders' | 'prefix' | 'reviews' | 'suffix' | 'taxvat' | 'wishlist' | 'wishlist_v2' | 'wishlists' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_remote_shopping_assistance?: FieldPolicy<any> | FieldReadFunction<any>,
	compare_list?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmation_status?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	date_of_birth?: FieldPolicy<any> | FieldReadFunction<any>,
	default_billing?: FieldPolicy<any> | FieldReadFunction<any>,
	default_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_subscribed?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	taxvat?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressKeySpecifier = ('city' | 'company' | 'country_code' | 'country_id' | 'custom_attributes' | 'custom_attributesV2' | 'customer_id' | 'default_billing' | 'default_shipping' | 'extension_attributes' | 'fax' | 'firstname' | 'id' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'region_id' | 'street' | 'suffix' | 'telephone' | 'vat_id' | CustomerAddressKeySpecifier)[];
export type CustomerAddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country_code?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	default_billing?: FieldPolicy<any> | FieldReadFunction<any>,
	default_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	extension_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressAttributeKeySpecifier = ('attribute_code' | 'value' | CustomerAddressAttributeKeySpecifier)[];
export type CustomerAddressAttributeFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressRegionKeySpecifier = ('region' | 'region_code' | 'region_id' | CustomerAddressRegionKeySpecifier)[];
export type CustomerAddressRegionFieldPolicy = {
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_code?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAttributeMetadataKeySpecifier = ('code' | 'default_value' | 'entity_type' | 'frontend_class' | 'frontend_input' | 'input_filter' | 'is_required' | 'is_unique' | 'label' | 'multiline_count' | 'options' | 'sort_order' | 'validate_rules' | CustomerAttributeMetadataKeySpecifier)[];
export type CustomerAttributeMetadataFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_value?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_class?: FieldPolicy<any> | FieldReadFunction<any>,
	frontend_input?: FieldPolicy<any> | FieldReadFunction<any>,
	input_filter?: FieldPolicy<any> | FieldReadFunction<any>,
	is_required?: FieldPolicy<any> | FieldReadFunction<any>,
	is_unique?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	multiline_count?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	validate_rules?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDownloadableProductKeySpecifier = ('date' | 'download_url' | 'order_increment_id' | 'remaining_downloads' | 'status' | CustomerDownloadableProductKeySpecifier)[];
export type CustomerDownloadableProductFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	download_url?: FieldPolicy<any> | FieldReadFunction<any>,
	order_increment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_downloads?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDownloadableProductsKeySpecifier = ('items' | CustomerDownloadableProductsKeySpecifier)[];
export type CustomerDownloadableProductsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerOrderKeySpecifier = ('applied_coupons' | 'billing_address' | 'carrier' | 'comments' | 'created_at' | 'credit_memos' | 'email' | 'gift_message' | 'grand_total' | 'id' | 'increment_id' | 'invoices' | 'items' | 'number' | 'order_date' | 'order_number' | 'payment_methods' | 'shipments' | 'shipping_address' | 'shipping_method' | 'status' | 'token' | 'total' | CustomerOrderKeySpecifier)[];
export type CustomerOrderFieldPolicy = {
	applied_coupons?: FieldPolicy<any> | FieldReadFunction<any>,
	billing_address?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	credit_memos?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	increment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	invoices?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	shipments?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_address?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_method?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerOrdersKeySpecifier = ('items' | 'page_info' | 'total_count' | CustomerOrdersKeySpecifier)[];
export type CustomerOrdersFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerOutputKeySpecifier = ('customer' | CustomerOutputKeySpecifier)[];
export type CustomerOutputFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerPaymentTokensKeySpecifier = ('items' | CustomerPaymentTokensKeySpecifier)[];
export type CustomerPaymentTokensFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerTokenKeySpecifier = ('createdAt' | 'token' | 'valid' | 'xMagentoCacheId' | CustomerTokenKeySpecifier)[];
export type CustomerTokenFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>,
	xMagentoCacheId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableAreaOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableAreaOptionKeySpecifier)[];
export type CustomizableAreaOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableAreaValueKeySpecifier = ('max_characters' | 'price' | 'price_type' | 'sku' | 'uid' | CustomizableAreaValueKeySpecifier)[];
export type CustomizableAreaValueFieldPolicy = {
	max_characters?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableCheckboxOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableCheckboxOptionKeySpecifier)[];
export type CustomizableCheckboxOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableCheckboxValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableCheckboxValueKeySpecifier)[];
export type CustomizableCheckboxValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDateOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableDateOptionKeySpecifier)[];
export type CustomizableDateOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDateValueKeySpecifier = ('price' | 'price_type' | 'sku' | 'type' | 'uid' | CustomizableDateValueKeySpecifier)[];
export type CustomizableDateValueFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDropDownOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableDropDownOptionKeySpecifier)[];
export type CustomizableDropDownOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableDropDownValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableDropDownValueKeySpecifier)[];
export type CustomizableDropDownValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFieldOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableFieldOptionKeySpecifier)[];
export type CustomizableFieldOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFieldValueKeySpecifier = ('max_characters' | 'price' | 'price_type' | 'sku' | 'uid' | CustomizableFieldValueKeySpecifier)[];
export type CustomizableFieldValueFieldPolicy = {
	max_characters?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFileOptionKeySpecifier = ('option_id' | 'product_sku' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableFileOptionKeySpecifier)[];
export type CustomizableFileOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableFileValueKeySpecifier = ('file_extension' | 'image_size_x' | 'image_size_y' | 'price' | 'price_type' | 'sku' | 'uid' | CustomizableFileValueKeySpecifier)[];
export type CustomizableFileValueFieldPolicy = {
	file_extension?: FieldPolicy<any> | FieldReadFunction<any>,
	image_size_x?: FieldPolicy<any> | FieldReadFunction<any>,
	image_size_y?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableMultipleOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableMultipleOptionKeySpecifier)[];
export type CustomizableMultipleOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableMultipleValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableMultipleValueKeySpecifier)[];
export type CustomizableMultipleValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableOptionInterfaceKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | CustomizableOptionInterfaceKeySpecifier)[];
export type CustomizableOptionInterfaceFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableProductInterfaceKeySpecifier = ('options' | CustomizableProductInterfaceKeySpecifier)[];
export type CustomizableProductInterfaceFieldPolicy = {
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableRadioOptionKeySpecifier = ('option_id' | 'required' | 'sort_order' | 'title' | 'uid' | 'value' | CustomizableRadioOptionKeySpecifier)[];
export type CustomizableRadioOptionFieldPolicy = {
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomizableRadioValueKeySpecifier = ('option_type_id' | 'price' | 'price_type' | 'sku' | 'sort_order' | 'title' | 'uid' | CustomizableRadioValueKeySpecifier)[];
export type CustomizableRadioValueFieldPolicy = {
	option_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCompareListOutputKeySpecifier = ('result' | DeleteCompareListOutputKeySpecifier)[];
export type DeleteCompareListOutputFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePaymentTokenOutputKeySpecifier = ('customerPaymentTokens' | 'result' | DeletePaymentTokenOutputKeySpecifier)[];
export type DeletePaymentTokenOutputFieldPolicy = {
	customerPaymentTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountKeySpecifier = ('amount' | 'applied_to' | 'coupon' | 'label' | DiscountKeySpecifier)[];
export type DiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	applied_to?: FieldPolicy<any> | FieldReadFunction<any>,
	coupon?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableCartItemKeySpecifier = ('customizable_options' | 'errors' | 'id' | 'is_available' | 'links' | 'prices' | 'product' | 'quantity' | 'samples' | 'uid' | DownloadableCartItemKeySpecifier)[];
export type DownloadableCartItemFieldPolicy = {
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	samples?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableCreditMemoItemKeySpecifier = ('discounts' | 'downloadable_links' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_refunded' | DownloadableCreditMemoItemKeySpecifier)[];
export type DownloadableCreditMemoItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_links?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableInvoiceItemKeySpecifier = ('discounts' | 'downloadable_links' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | DownloadableInvoiceItemKeySpecifier)[];
export type DownloadableInvoiceItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_links?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableItemsLinksKeySpecifier = ('sort_order' | 'title' | 'uid' | DownloadableItemsLinksKeySpecifier)[];
export type DownloadableItemsLinksFieldPolicy = {
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableOrderItemKeySpecifier = ('discounts' | 'downloadable_links' | 'entered_options' | 'gift_message' | 'id' | 'product' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | DownloadableOrderItemKeySpecifier)[];
export type DownloadableOrderItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_links?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableProductKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'downloadable_product_links' | 'downloadable_product_samples' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'links_purchased_separately' | 'links_title' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | DownloadableProductKeySpecifier)[];
export type DownloadableProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_product_samples?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	links_purchased_separately?: FieldPolicy<any> | FieldReadFunction<any>,
	links_title?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableProductLinksKeySpecifier = ('id' | 'is_shareable' | 'link_type' | 'number_of_downloads' | 'price' | 'sample_file' | 'sample_type' | 'sample_url' | 'sort_order' | 'title' | 'uid' | DownloadableProductLinksKeySpecifier)[];
export type DownloadableProductLinksFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_shareable?: FieldPolicy<any> | FieldReadFunction<any>,
	link_type?: FieldPolicy<any> | FieldReadFunction<any>,
	number_of_downloads?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_file?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_url?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableProductSamplesKeySpecifier = ('id' | 'sample_file' | 'sample_type' | 'sample_url' | 'sort_order' | 'title' | DownloadableProductSamplesKeySpecifier)[];
export type DownloadableProductSamplesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_file?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sample_url?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'links_v2' | 'product' | 'quantity' | 'samples' | DownloadableWishlistItemKeySpecifier)[];
export type DownloadableWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	samples?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DynamicRowKeySpecifier = ('conditions' | 'id' | 'internalName' | 'placement' | 'row' | 'rows' | 'stage' | 'target' | DynamicRowKeySpecifier)[];
export type DynamicRowFieldPolicy = {
	conditions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	internalName?: FieldPolicy<any> | FieldReadFunction<any>,
	placement?: FieldPolicy<any> | FieldReadFunction<any>,
	row?: FieldPolicy<any> | FieldReadFunction<any>,
	rows?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DynamicRowConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | DynamicRowConnectionKeySpecifier)[];
export type DynamicRowConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DynamicRowEdgeKeySpecifier = ('cursor' | 'node' | DynamicRowEdgeKeySpecifier)[];
export type DynamicRowEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityKeySpecifier = ('id' | 'stage' | EntityKeySpecifier)[];
export type EntityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityUrlKeySpecifier = ('canonical_url' | 'entity_uid' | 'id' | 'redirectCode' | 'relative_url' | 'type' | EntityUrlKeySpecifier)[];
export type EntityUrlFieldPolicy = {
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectCode?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorInterfaceKeySpecifier = ('message' | ErrorInterfaceKeySpecifier)[];
export type ErrorInterfaceFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EstimateTotalsOutputKeySpecifier = ('cart' | EstimateTotalsOutputKeySpecifier)[];
export type EstimateTotalsOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExchangeRateKeySpecifier = ('currency_to' | 'rate' | ExchangeRateKeySpecifier)[];
export type ExchangeRateFieldPolicy = {
	currency_to?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FixedProductTaxKeySpecifier = ('amount' | 'label' | FixedProductTaxKeySpecifier)[];
export type FixedProductTaxFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooterKeySpecifier = ('copyright' | 'id' | 'identity' | 'legalLinks' | 'socialLinks' | 'stage' | FooterKeySpecifier)[];
export type FooterFieldPolicy = {
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	legalLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	socialLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooterConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | FooterConnectionKeySpecifier)[];
export type FooterConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooterEdgeKeySpecifier = ('cursor' | 'node' | FooterEdgeKeySpecifier)[];
export type FooterEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenerateCustomerTokenAsAdminOutputKeySpecifier = ('customer_token' | GenerateCustomerTokenAsAdminOutputKeySpecifier)[];
export type GenerateCustomerTokenAsAdminOutputFieldPolicy = {
	customer_token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetPaymentSDKOutputKeySpecifier = ('sdkParams' | GetPaymentSDKOutputKeySpecifier)[];
export type GetPaymentSDKOutputFieldPolicy = {
	sdkParams?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftMessageKeySpecifier = ('from' | 'message' | 'to' | GiftMessageKeySpecifier)[];
export type GiftMessageFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GooglePayButtonStylesKeySpecifier = ('color' | 'height' | 'type' | GooglePayButtonStylesKeySpecifier)[];
export type GooglePayButtonStylesFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GooglePayConfigKeySpecifier = ('button_styles' | 'code' | 'is_visible' | 'payment_intent' | 'payment_source' | 'sdk_params' | 'sort_order' | 'three_ds_mode' | 'title' | GooglePayConfigKeySpecifier)[];
export type GooglePayConfigFieldPolicy = {
	button_styles?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_source?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	three_ds_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupedProductKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'items' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | 'weight' | GroupedProductKeySpecifier)[];
export type GroupedProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupedProductItemKeySpecifier = ('position' | 'product' | 'qty' | GroupedProductItemKeySpecifier)[];
export type GroupedProductItemFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupedProductWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | GroupedProductWishlistItemKeySpecifier)[];
export type GroupedProductWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HostedFieldsConfigKeySpecifier = ('cc_vault_code' | 'code' | 'is_vault_enabled' | 'is_visible' | 'payment_intent' | 'payment_source' | 'requires_card_details' | 'sdk_params' | 'sort_order' | 'three_ds' | 'three_ds_mode' | 'title' | HostedFieldsConfigKeySpecifier)[];
export type HostedFieldsConfigFieldPolicy = {
	cc_vault_code?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	is_vault_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_source?: FieldPolicy<any> | FieldReadFunction<any>,
	requires_card_details?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	three_ds?: FieldPolicy<any> | FieldReadFunction<any>,
	three_ds_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HostedProUrlKeySpecifier = ('secure_form_url' | HostedProUrlKeySpecifier)[];
export type HostedProUrlFieldPolicy = {
	secure_form_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HttpQueryParameterKeySpecifier = ('name' | 'value' | HttpQueryParameterKeySpecifier)[];
export type HttpQueryParameterFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageSwatchDataKeySpecifier = ('thumbnail' | 'value' | ImageSwatchDataKeySpecifier)[];
export type ImageSwatchDataFieldPolicy = {
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InternalErrorKeySpecifier = ('message' | InternalErrorKeySpecifier)[];
export type InternalErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceKeySpecifier = ('comments' | 'id' | 'items' | 'number' | 'total' | InvoiceKeySpecifier)[];
export type InvoiceFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceItemKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | InvoiceItemKeySpecifier)[];
export type InvoiceItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceItemInterfaceKeySpecifier = ('discounts' | 'id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_invoiced' | InvoiceItemInterfaceKeySpecifier)[];
export type InvoiceItemInterfaceFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceTotalKeySpecifier = ('base_grand_total' | 'discounts' | 'grand_total' | 'shipping_handling' | 'subtotal' | 'taxes' | 'total_shipping' | 'total_tax' | InvoiceTotalKeySpecifier)[];
export type InvoiceTotalFieldPolicy = {
	base_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_handling?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IsEmailAvailableOutputKeySpecifier = ('is_email_available' | IsEmailAvailableOutputKeySpecifier)[];
export type IsEmailAvailableOutputFieldPolicy = {
	is_email_available?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemSelectedBundleOptionKeySpecifier = ('id' | 'label' | 'uid' | 'values' | ItemSelectedBundleOptionKeySpecifier)[];
export type ItemSelectedBundleOptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemSelectedBundleOptionValueKeySpecifier = ('id' | 'price' | 'product_name' | 'product_sku' | 'quantity' | 'uid' | ItemSelectedBundleOptionValueKeySpecifier)[];
export type ItemSelectedBundleOptionValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValueKeySpecifier = ('name' | 'value' | KeyValueKeySpecifier)[];
export type KeyValueFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LayerFilterKeySpecifier = ('filter_items' | 'filter_items_count' | 'name' | 'request_var' | LayerFilterKeySpecifier)[];
export type LayerFilterFieldPolicy = {
	filter_items?: FieldPolicy<any> | FieldReadFunction<any>,
	filter_items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	request_var?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LayerFilterItemKeySpecifier = ('items_count' | 'label' | 'value_string' | LayerFilterItemKeySpecifier)[];
export type LayerFilterItemFieldPolicy = {
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value_string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LayerFilterItemInterfaceKeySpecifier = ('items_count' | 'label' | 'value_string' | LayerFilterItemInterfaceKeySpecifier)[];
export type LayerFilterItemInterfaceFieldPolicy = {
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value_string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type M2RestCompanyDataCompanyCustomerInterfaceKeySpecifier = ('company_id' | 'customer_id' | 'extension_attributes' | 'job_title' | 'status' | 'telephone' | M2RestCompanyDataCompanyCustomerInterfaceKeySpecifier)[];
export type M2RestCompanyDataCompanyCustomerInterfaceFieldPolicy = {
	company_id?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	extension_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	job_title?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type M2RestCustomerDataAddressInterfaceKeySpecifier = ('city' | 'company' | 'country_id' | 'custom_attributes' | 'customer_id' | 'default_billing' | 'default_shipping' | 'extension_attributes' | 'fax' | 'firstname' | 'id' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'region_id' | 'street' | 'suffix' | 'telephone' | 'vat_id' | M2RestCustomerDataAddressInterfaceKeySpecifier)[];
export type M2RestCustomerDataAddressInterfaceFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	default_billing?: FieldPolicy<any> | FieldReadFunction<any>,
	default_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	extension_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type M2RestCustomerDataCustomerExtensionInterfaceKeySpecifier = ('assistance_allowed' | 'company_attributes' | 'is_subscribed' | M2RestCustomerDataCustomerExtensionInterfaceKeySpecifier)[];
export type M2RestCustomerDataCustomerExtensionInterfaceFieldPolicy = {
	assistance_allowed?: FieldPolicy<any> | FieldReadFunction<any>,
	company_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	is_subscribed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type M2RestCustomerDataCustomerInterfaceKeySpecifier = ('addresses' | 'confirmation' | 'created_at' | 'created_in' | 'custom_attributes' | 'default_billing' | 'default_shipping' | 'disable_auto_group_change' | 'dob' | 'email' | 'extension_attributes' | 'firstname' | 'gender' | 'group_id' | 'id' | 'lastname' | 'middlename' | 'prefix' | 'store_id' | 'suffix' | 'taxvat' | 'updated_at' | 'website_id' | M2RestCustomerDataCustomerInterfaceKeySpecifier)[];
export type M2RestCustomerDataCustomerInterfaceFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_in?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	default_billing?: FieldPolicy<any> | FieldReadFunction<any>,
	default_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	disable_auto_group_change?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	extension_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	store_id?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	taxvat?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	website_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type M2RestCustomerDataRegionInterfaceKeySpecifier = ('extension_attributes' | 'region' | 'region_code' | 'region_id' | M2RestCustomerDataRegionInterfaceKeySpecifier)[];
export type M2RestCustomerDataRegionInterfaceFieldPolicy = {
	extension_attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_code?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type M2RestFrameworkAttributeInterfaceKeySpecifier = ('attribute_code' | 'value' | M2RestFrameworkAttributeInterfaceKeySpecifier)[];
export type M2RestFrameworkAttributeInterfaceFieldPolicy = {
	attribute_code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaGalleryEntryKeySpecifier = ('content' | 'disabled' | 'file' | 'id' | 'label' | 'media_type' | 'position' | 'types' | 'uid' | 'video_content' | MediaGalleryEntryKeySpecifier)[];
export type MediaGalleryEntryFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	media_type?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	video_content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaGalleryInterfaceKeySpecifier = ('disabled' | 'label' | 'position' | 'url' | MediaGalleryInterfaceKeySpecifier)[];
export type MediaGalleryInterfaceFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageStyleLogoKeySpecifier = ('type' | MessageStyleLogoKeySpecifier)[];
export type MessageStyleLogoFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageStylesKeySpecifier = ('layout' | 'logo' | MessageStylesKeySpecifier)[];
export type MessageStylesFieldPolicy = {
	layout?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('currency' | 'value' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addBundleProductsToCart' | 'addConfigurableProductsToCart' | 'addDownloadableProductsToCart' | 'addProductsToCart' | 'addProductsToCompareList' | 'addProductsToWishlist' | 'addSimpleProductsToCart' | 'addVirtualProductsToCart' | 'addWishlistItemsToCart' | 'applyCouponToCart' | 'assignCompareListToCustomer' | 'assignCustomerToGuestCart' | 'cancelOrder' | 'changeCustomerPassword' | 'confirmEmail' | 'contactUs' | 'createBraintreeClientToken' | 'createBraintreePayPalClientToken' | 'createBraintreePayPalVaultClientToken' | 'createCompareList' | 'createCustomer' | 'createCustomerAddress' | 'createCustomerV2' | 'createEmptyCart' | 'createGuestCart' | 'createPayflowProToken' | 'createPaymentOrder' | 'createPaypalExpressToken' | 'createProductReview' | 'createVaultCardPaymentToken' | 'createVaultCardSetupToken' | 'deleteCompareList' | 'deleteCustomer' | 'deleteCustomerAddress' | 'deletePaymentToken' | 'estimateShippingMethods' | 'estimateTotals' | 'generateCustomerToken' | 'generateCustomerTokenAsAdmin' | 'handlePayflowProResponse' | 'mergeCarts' | 'placeOrder' | 'removeCouponFromCart' | 'removeItemFromCart' | 'removeProductsFromCompareList' | 'removeProductsFromWishlist' | 'reorderItems' | 'requestPasswordResetEmail' | 'resetPassword' | 'revokeCustomerToken' | 'sendEmailToFriend' | 'setBillingAddressOnCart' | 'setGuestEmailOnCart' | 'setPaymentMethodAndPlaceOrder' | 'setPaymentMethodOnCart' | 'setShippingAddressesOnCart' | 'setShippingMethodsOnCart' | 'subscribeEmailToNewsletter' | 'syncPaymentOrder' | 'updateCartItems' | 'updateCustomer' | 'updateCustomerAddress' | 'updateCustomerEmail' | 'updateCustomerV2' | 'updateProductsInWishlist' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addBundleProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addConfigurableProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addDownloadableProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductsToCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	addProductsToWishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	addSimpleProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addVirtualProductsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addWishlistItemsToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	applyCouponToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	assignCompareListToCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	assignCustomerToGuestCart?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	changeCustomerPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	contactUs?: FieldPolicy<any> | FieldReadFunction<any>,
	createBraintreeClientToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createBraintreePayPalClientToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createBraintreePayPalVaultClientToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomerV2?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmptyCart?: FieldPolicy<any> | FieldReadFunction<any>,
	createGuestCart?: FieldPolicy<any> | FieldReadFunction<any>,
	createPayflowProToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaymentOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaypalExpressToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createVaultCardPaymentToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createVaultCardSetupToken?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCustomerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentToken?: FieldPolicy<any> | FieldReadFunction<any>,
	estimateShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	estimateTotals?: FieldPolicy<any> | FieldReadFunction<any>,
	generateCustomerToken?: FieldPolicy<any> | FieldReadFunction<any>,
	generateCustomerTokenAsAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	handlePayflowProResponse?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeCarts?: FieldPolicy<any> | FieldReadFunction<any>,
	placeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	removeCouponFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	removeItemFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProductsFromCompareList?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProductsFromWishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	reorderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPasswordResetEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeCustomerToken?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailToFriend?: FieldPolicy<any> | FieldReadFunction<any>,
	setBillingAddressOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setGuestEmailOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setPaymentMethodAndPlaceOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	setPaymentMethodOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setShippingAddressesOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	setShippingMethodsOnCart?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribeEmailToNewsletter?: FieldPolicy<any> | FieldReadFunction<any>,
	syncPaymentOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomerEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomerV2?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductsInWishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoSuchEntityUidErrorKeySpecifier = ('message' | 'uid' | NoSuchEntityUidErrorKeySpecifier)[];
export type NoSuchEntityUidErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | 'stage' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('order_id' | 'order_number' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderAddressKeySpecifier = ('city' | 'company' | 'country_code' | 'fax' | 'firstname' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'region' | 'region_id' | 'street' | 'suffix' | 'telephone' | 'vat_id' | OrderAddressKeySpecifier)[];
export type OrderAddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country_code?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemKeySpecifier = ('discounts' | 'entered_options' | 'gift_message' | 'id' | 'product' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | OrderItemKeySpecifier)[];
export type OrderItemFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemInterfaceKeySpecifier = ('discounts' | 'entered_options' | 'gift_message' | 'id' | 'product' | 'product_name' | 'product_sale_price' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'selected_options' | 'status' | OrderItemInterfaceKeySpecifier)[];
export type OrderItemInterfaceFieldPolicy = {
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	entered_options?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_canceled?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_invoiced?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_ordered?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_refunded?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_returned?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_options?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemOptionKeySpecifier = ('label' | 'value' | OrderItemOptionKeySpecifier)[];
export type OrderItemOptionFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPaymentMethodKeySpecifier = ('additional_data' | 'name' | 'type' | OrderPaymentMethodKeySpecifier)[];
export type OrderPaymentMethodFieldPolicy = {
	additional_data?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderShipmentKeySpecifier = ('comments' | 'id' | 'items' | 'number' | 'tracking' | OrderShipmentKeySpecifier)[];
export type OrderShipmentFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	tracking?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderTotalKeySpecifier = ('base_grand_total' | 'discounts' | 'grand_total' | 'shipping_handling' | 'subtotal' | 'taxes' | 'total_shipping' | 'total_tax' | OrderTotalKeySpecifier)[];
export type OrderTotalFieldPolicy = {
	base_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shipping_handling?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	total_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('asset' | 'author' | 'childPages' | 'content' | 'date' | 'id' | 'locale' | 'metaDescription' | 'metaRobots' | 'metaTitle' | 'relatedPages' | 'rowButtonLinkLists' | 'stage' | 'title' | 'url' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	childPages?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobots?: FieldPolicy<any> | FieldReadFunction<any>,
	metaTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedPages?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkLists?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | PageConnectionKeySpecifier)[];
export type PageConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageEdgeKeySpecifier = ('cursor' | 'node' | PageEdgeKeySpecifier)[];
export type PageEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'pageSize' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLinkKeySpecifier = ('asset' | 'description' | 'footerLegalLinks' | 'footerSocialLinks' | 'id' | 'locale' | 'rowContentLinks' | 'rowHeroBanners' | 'rowLinks' | 'rowProductMultiple' | 'rowServiceOptionsMultiple' | 'rowSpecialBanners' | 'stage' | 'title' | 'url' | 'uspsMultiple' | PageLinkKeySpecifier)[];
export type PageLinkFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	footerLegalLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	footerSocialLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptionsMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultiple?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLinkConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | PageLinkConnectionKeySpecifier)[];
export type PageLinkConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLinkEdgeKeySpecifier = ('cursor' | 'node' | PageLinkEdgeKeySpecifier)[];
export type PageLinkEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayflowLinkTokenKeySpecifier = ('mode' | 'paypal_url' | 'secure_token' | 'secure_token_id' | PayflowLinkTokenKeySpecifier)[];
export type PayflowLinkTokenFieldPolicy = {
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	paypal_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayflowProResponseOutputKeySpecifier = ('cart' | PayflowProResponseOutputKeySpecifier)[];
export type PayflowProResponseOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayflowProTokenKeySpecifier = ('response_message' | 'result' | 'result_code' | 'secure_token' | 'secure_token_id' | PayflowProTokenKeySpecifier)[];
export type PayflowProTokenFieldPolicy = {
	response_message?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>,
	result_code?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCommonConfigKeySpecifier = ('code' | 'is_visible' | 'payment_intent' | 'sdk_params' | 'sort_order' | 'title' | PaymentCommonConfigKeySpecifier)[];
export type PaymentCommonConfigFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentConfigItemKeySpecifier = ('code' | 'is_visible' | 'payment_intent' | 'sdk_params' | 'sort_order' | 'title' | PaymentConfigItemKeySpecifier)[];
export type PaymentConfigItemFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentConfigOutputKeySpecifier = ('apple_pay' | 'google_pay' | 'hosted_fields' | 'smart_buttons' | PaymentConfigOutputKeySpecifier)[];
export type PaymentConfigOutputFieldPolicy = {
	apple_pay?: FieldPolicy<any> | FieldReadFunction<any>,
	google_pay?: FieldPolicy<any> | FieldReadFunction<any>,
	hosted_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	smart_buttons?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentOrderOutputKeySpecifier = ('id' | 'mp_order_id' | 'payment_source_details' | 'status' | PaymentOrderOutputKeySpecifier)[];
export type PaymentOrderOutputFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mp_order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_source_details?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSDKParamsItemKeySpecifier = ('code' | 'params' | PaymentSDKParamsItemKeySpecifier)[];
export type PaymentSDKParamsItemFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	params?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSourceDetailsKeySpecifier = ('card' | PaymentSourceDetailsKeySpecifier)[];
export type PaymentSourceDetailsFieldPolicy = {
	card?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSourceOutputKeySpecifier = ('card' | PaymentSourceOutputKeySpecifier)[];
export type PaymentSourceOutputFieldPolicy = {
	card?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentTokenKeySpecifier = ('details' | 'payment_method_code' | 'public_hash' | 'type' | PaymentTokenKeySpecifier)[];
export type PaymentTokenFieldPolicy = {
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_method_code?: FieldPolicy<any> | FieldReadFunction<any>,
	public_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaypalExpressTokenKeySpecifier = ('paypal_urls' | 'token' | PaypalExpressTokenKeySpecifier)[];
export type PaypalExpressTokenFieldPolicy = {
	paypal_urls?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaypalExpressTokenOutputKeySpecifier = ('paypal_urls' | 'token' | PaypalExpressTokenOutputKeySpecifier)[];
export type PaypalExpressTokenOutputFieldPolicy = {
	paypal_urls?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaypalExpressUrlListKeySpecifier = ('edit' | 'start' | PaypalExpressUrlListKeySpecifier)[];
export type PaypalExpressUrlListFieldPolicy = {
	edit?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhysicalProductInterfaceKeySpecifier = ('weight' | PhysicalProductInterfaceKeySpecifier)[];
export type PhysicalProductInterfaceFieldPolicy = {
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PickupLocationKeySpecifier = ('city' | 'contact_name' | 'country_id' | 'description' | 'email' | 'fax' | 'latitude' | 'longitude' | 'name' | 'phone' | 'pickup_location_code' | 'postcode' | 'region' | 'region_id' | 'street' | PickupLocationKeySpecifier)[];
export type PickupLocationFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_name?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	pickup_location_code?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PickupLocationsKeySpecifier = ('items' | 'page_info' | 'total_count' | PickupLocationsKeySpecifier)[];
export type PickupLocationsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceOrderErrorKeySpecifier = ('code' | 'message' | PlaceOrderErrorKeySpecifier)[];
export type PlaceOrderErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceOrderOutputKeySpecifier = ('errors' | 'order' | 'orderV2' | PlaceOrderOutputKeySpecifier)[];
export type PlaceOrderOutputFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderV2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceKeySpecifier = ('adjustments' | 'amount' | PriceKeySpecifier)[];
export type PriceFieldPolicy = {
	adjustments?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceAdjustmentKeySpecifier = ('amount' | 'code' | 'description' | PriceAdjustmentKeySpecifier)[];
export type PriceAdjustmentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceDetailsKeySpecifier = ('discount_percentage' | 'main_final_price' | 'main_price' | PriceDetailsKeySpecifier)[];
export type PriceDetailsFieldPolicy = {
	discount_percentage?: FieldPolicy<any> | FieldReadFunction<any>,
	main_final_price?: FieldPolicy<any> | FieldReadFunction<any>,
	main_price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceRangeKeySpecifier = ('maximum_price' | 'minimum_price' | PriceRangeKeySpecifier)[];
export type PriceRangeFieldPolicy = {
	maximum_price?: FieldPolicy<any> | FieldReadFunction<any>,
	minimum_price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductAttributeKeySpecifier = ('code' | 'value' | ProductAttributeKeySpecifier)[];
export type ProductAttributeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCustomAttributesKeySpecifier = ('errors' | 'items' | ProductCustomAttributesKeySpecifier)[];
export type ProductCustomAttributesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDiscountKeySpecifier = ('amount_off' | 'percent_off' | ProductDiscountKeySpecifier)[];
export type ProductDiscountFieldPolicy = {
	amount_off?: FieldPolicy<any> | FieldReadFunction<any>,
	percent_off?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('disabled' | 'label' | 'position' | 'url' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductInterfaceKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'product_links' | 'rating_summary' | 'related_products' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | ProductInterfaceKeySpecifier)[];
export type ProductInterfaceFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLinksKeySpecifier = ('link_type' | 'linked_product_sku' | 'linked_product_type' | 'position' | 'sku' | ProductLinksKeySpecifier)[];
export type ProductLinksFieldPolicy = {
	link_type?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLinksInterfaceKeySpecifier = ('link_type' | 'linked_product_sku' | 'linked_product_type' | 'position' | 'sku' | ProductLinksInterfaceKeySpecifier)[];
export type ProductLinksInterfaceFieldPolicy = {
	link_type?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	linked_product_type?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaGalleryEntriesContentKeySpecifier = ('base64_encoded_data' | 'name' | 'type' | ProductMediaGalleryEntriesContentKeySpecifier)[];
export type ProductMediaGalleryEntriesContentFieldPolicy = {
	base64_encoded_data?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMediaGalleryEntriesVideoContentKeySpecifier = ('media_type' | 'video_description' | 'video_metadata' | 'video_provider' | 'video_title' | 'video_url' | ProductMediaGalleryEntriesVideoContentKeySpecifier)[];
export type ProductMediaGalleryEntriesVideoContentFieldPolicy = {
	media_type?: FieldPolicy<any> | FieldReadFunction<any>,
	video_description?: FieldPolicy<any> | FieldReadFunction<any>,
	video_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	video_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	video_title?: FieldPolicy<any> | FieldReadFunction<any>,
	video_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPriceKeySpecifier = ('discount' | 'final_price' | 'fixed_product_taxes' | 'regular_price' | ProductPriceKeySpecifier)[];
export type ProductPriceFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	final_price?: FieldPolicy<any> | FieldReadFunction<any>,
	fixed_product_taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	regular_price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPricesKeySpecifier = ('maximalPrice' | 'minimalPrice' | 'regularPrice' | ProductPricesKeySpecifier)[];
export type ProductPricesFieldPolicy = {
	maximalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minimalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	regularPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewKeySpecifier = ('average_rating' | 'created_at' | 'nickname' | 'product' | 'ratings_breakdown' | 'summary' | 'text' | ProductReviewKeySpecifier)[];
export type ProductReviewFieldPolicy = {
	average_rating?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings_breakdown?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingKeySpecifier = ('name' | 'value' | ProductReviewRatingKeySpecifier)[];
export type ProductReviewRatingFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingMetadataKeySpecifier = ('id' | 'name' | 'values' | ProductReviewRatingMetadataKeySpecifier)[];
export type ProductReviewRatingMetadataFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingValueMetadataKeySpecifier = ('value' | 'value_id' | ProductReviewRatingValueMetadataKeySpecifier)[];
export type ProductReviewRatingValueMetadataFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	value_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewRatingsMetadataKeySpecifier = ('items' | ProductReviewRatingsMetadataKeySpecifier)[];
export type ProductReviewRatingsMetadataFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewsKeySpecifier = ('items' | 'page_info' | ProductReviewsKeySpecifier)[];
export type ProductReviewsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTierPricesKeySpecifier = ('customer_group_id' | 'percentage_value' | 'qty' | 'value' | 'website_id' | ProductTierPricesKeySpecifier)[];
export type ProductTierPricesFieldPolicy = {
	customer_group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage_value?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	website_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVideoKeySpecifier = ('disabled' | 'label' | 'position' | 'url' | 'video_content' | ProductVideoKeySpecifier)[];
export type ProductVideoFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	video_content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductsKeySpecifier = ('aggregations' | 'filters' | 'items' | 'page_info' | 'sort_fields' | 'suggestions' | 'total_count' | ProductsKeySpecifier)[];
export type ProductsFieldPolicy = {
	aggregations?: FieldPolicy<any> | FieldReadFunction<any>,
	filters?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('attributesForm' | 'attributesList' | 'availableStores' | 'cart' | 'categories' | 'category' | 'categoryList' | 'checkoutAgreements' | 'cmsBlocks' | 'cmsPage' | 'compareList' | 'countries' | 'country' | 'currency' | 'currentCartId' | 'currentCompareUid' | 'customAttributeMetadata' | 'customAttributeMetadataV2' | 'customer' | 'customerCart' | 'customerDownloadableProducts' | 'customerOrders' | 'customerPaymentTokens' | 'customerToken' | 'dynamicRow' | 'dynamicRows' | 'dynamicRowsConnection' | 'entities' | 'footer' | 'footers' | 'footersConnection' | 'getHostedProUrl' | 'getPayflowLinkToken' | 'getPaymentConfig' | 'getPaymentOrder' | 'getPaymentSDK' | 'getVaultConfig' | 'guestOrder' | 'guestOrderByToken' | 'isEmailAvailable' | 'm2rest_GetV1CustomersMe' | 'page' | 'pageLink' | 'pageLinks' | 'pageLinksConnection' | 'pages' | 'pagesConnection' | 'pickupLocations' | 'productReviewRatingsMetadata' | 'products' | 'recaptchaV3Config' | 'recentlyViewedProducts' | 'route' | 'rowBlogContent' | 'rowBlogContents' | 'rowBlogContentsConnection' | 'rowButtonLinkList' | 'rowButtonLinkLists' | 'rowButtonLinkListsConnection' | 'rowCategory' | 'rowColumnOne' | 'rowColumnOnes' | 'rowColumnOnesConnection' | 'rowColumnThree' | 'rowColumnThrees' | 'rowColumnThreesConnection' | 'rowColumnTwo' | 'rowColumnTwos' | 'rowColumnTwosConnection' | 'rowContentLinks' | 'rowContentLinksMultiple' | 'rowContentLinksMultipleConnection' | 'rowHeroBanner' | 'rowHeroBanners' | 'rowHeroBannersConnection' | 'rowLinks' | 'rowLinksMultiple' | 'rowLinksMultipleConnection' | 'rowProduct' | 'rowProductLists' | 'rowProductListsConnection' | 'rowProductMultiple' | 'rowProductMultipleConnection' | 'rowQuote' | 'rowQuotes' | 'rowQuotesConnection' | 'rowServiceOptions' | 'rowServiceOptionsMultiple' | 'rowServiceOptionsMultipleConnection' | 'rowSpecialBanner' | 'rowSpecialBanners' | 'rowSpecialBannersConnection' | 'storeConfig' | 'urlResolver' | 'usps' | 'uspsMultiple' | 'uspsMultipleConnection' | 'wishlist' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	attributesForm?: FieldPolicy<any> | FieldReadFunction<any>,
	attributesList?: FieldPolicy<any> | FieldReadFunction<any>,
	availableStores?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryList?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAgreements?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	cmsPage?: FieldPolicy<any> | FieldReadFunction<any>,
	compareList?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	currentCartId?: FieldPolicy<any> | FieldReadFunction<any>,
	currentCompareUid?: FieldPolicy<any> | FieldReadFunction<any>,
	customAttributeMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	customAttributeMetadataV2?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCart?: FieldPolicy<any> | FieldReadFunction<any>,
	customerDownloadableProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	customerOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	customerPaymentTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	customerToken?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRow?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRows?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	entities?: FieldPolicy<any> | FieldReadFunction<any>,
	footer?: FieldPolicy<any> | FieldReadFunction<any>,
	footers?: FieldPolicy<any> | FieldReadFunction<any>,
	footersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	getHostedProUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getPayflowLinkToken?: FieldPolicy<any> | FieldReadFunction<any>,
	getPaymentConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	getPaymentOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	getPaymentSDK?: FieldPolicy<any> | FieldReadFunction<any>,
	getVaultConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	guestOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	guestOrderByToken?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	m2rest_GetV1CustomersMe?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinksConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	pagesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	pickupLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewRatingsMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	recaptchaV3Config?: FieldPolicy<any> | FieldReadFunction<any>,
	recentlyViewedProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	rowBlogContent?: FieldPolicy<any> | FieldReadFunction<any>,
	rowBlogContents?: FieldPolicy<any> | FieldReadFunction<any>,
	rowBlogContentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkList?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkLists?: FieldPolicy<any> | FieldReadFunction<any>,
	rowButtonLinkListsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOne?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOnes?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOnesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnThree?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnThrees?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnThreesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnTwos?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnTwosConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinksMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowContentLinksMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	rowHeroBannersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinksMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinksMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductLists?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductListsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowProductMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowQuote?: FieldPolicy<any> | FieldReadFunction<any>,
	rowQuotes?: FieldPolicy<any> | FieldReadFunction<any>,
	rowQuotesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptionsMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	rowServiceOptionsMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBanners?: FieldPolicy<any> | FieldReadFunction<any>,
	rowSpecialBannersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	storeConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	urlResolver?: FieldPolicy<any> | FieldReadFunction<any>,
	usps?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultiple?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultipleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReCaptchaConfigurationV3KeySpecifier = ('badge_position' | 'failure_message' | 'forms' | 'is_enabled' | 'language_code' | 'minimum_score' | 'website_key' | ReCaptchaConfigurationV3KeySpecifier)[];
export type ReCaptchaConfigurationV3FieldPolicy = {
	badge_position?: FieldPolicy<any> | FieldReadFunction<any>,
	failure_message?: FieldPolicy<any> | FieldReadFunction<any>,
	forms?: FieldPolicy<any> | FieldReadFunction<any>,
	is_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	language_code?: FieldPolicy<any> | FieldReadFunction<any>,
	minimum_score?: FieldPolicy<any> | FieldReadFunction<any>,
	website_key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecentlyViewedProductKeySpecifier = ('parentSku' | 'sku' | RecentlyViewedProductKeySpecifier)[];
export type RecentlyViewedProductFieldPolicy = {
	parentSku?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecentlyViewedProductsKeySpecifier = ('items' | RecentlyViewedProductsKeySpecifier)[];
export type RecentlyViewedProductsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegionKeySpecifier = ('code' | 'id' | 'name' | RegionKeySpecifier)[];
export type RegionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveCouponFromCartOutputKeySpecifier = ('cart' | RemoveCouponFromCartOutputKeySpecifier)[];
export type RemoveCouponFromCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveItemFromCartOutputKeySpecifier = ('cart' | RemoveItemFromCartOutputKeySpecifier)[];
export type RemoveItemFromCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveProductsFromWishlistOutputKeySpecifier = ('user_errors' | 'wishlist' | RemoveProductsFromWishlistOutputKeySpecifier)[];
export type RemoveProductsFromWishlistOutputFieldPolicy = {
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReorderItemsOutputKeySpecifier = ('cart' | 'userInputErrors' | ReorderItemsOutputKeySpecifier)[];
export type ReorderItemsOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	userInputErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeCustomerTokenOutputKeySpecifier = ('result' | RevokeCustomerTokenOutputKeySpecifier)[];
export type RevokeCustomerTokenOutputFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RichTextKeySpecifier = ('html' | 'markdown' | 'raw' | 'text' | RichTextKeySpecifier)[];
export type RichTextFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoutableInterfaceKeySpecifier = ('redirect_code' | 'relative_url' | 'type' | RoutableInterfaceKeySpecifier)[];
export type RoutableInterfaceFieldPolicy = {
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoutableUrlKeySpecifier = ('redirect_code' | 'relative_url' | 'type' | RoutableUrlKeySpecifier)[];
export type RoutableUrlFieldPolicy = {
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowBlogContentKeySpecifier = ('content' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowBlogContentKeySpecifier)[];
export type RowBlogContentFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowBlogContentConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowBlogContentConnectionKeySpecifier)[];
export type RowBlogContentConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowBlogContentEdgeKeySpecifier = ('cursor' | 'node' | RowBlogContentEdgeKeySpecifier)[];
export type RowBlogContentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowButtonLinkListKeySpecifier = ('dynamicRowsTarget' | 'id' | 'identity' | 'links' | 'locale' | 'pages' | 'stage' | 'title' | RowButtonLinkListKeySpecifier)[];
export type RowButtonLinkListFieldPolicy = {
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowButtonLinkListConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowButtonLinkListConnectionKeySpecifier)[];
export type RowButtonLinkListConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowButtonLinkListEdgeKeySpecifier = ('cursor' | 'node' | RowButtonLinkListEdgeKeySpecifier)[];
export type RowButtonLinkListEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowCategoryKeySpecifier = ('categoryUrl' | 'id' | 'locale' | 'pages' | 'stage' | 'variant' | RowCategoryKeySpecifier)[];
export type RowCategoryFieldPolicy = {
	categoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowCategoryConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowCategoryConnectionKeySpecifier)[];
export type RowCategoryConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowCategoryEdgeKeySpecifier = ('cursor' | 'node' | RowCategoryEdgeKeySpecifier)[];
export type RowCategoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnOneKeySpecifier = ('colOne' | 'dynamicRow' | 'dynamicRows' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'rowColumnOneVariant' | 'stage' | RowColumnOneKeySpecifier)[];
export type RowColumnOneFieldPolicy = {
	colOne?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRow?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRows?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	rowColumnOneVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnOneConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowColumnOneConnectionKeySpecifier)[];
export type RowColumnOneConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnOneEdgeKeySpecifier = ('cursor' | 'node' | RowColumnOneEdgeKeySpecifier)[];
export type RowColumnOneEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnThreeKeySpecifier = ('colOne' | 'colThree' | 'colTwo' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowColumnThreeKeySpecifier)[];
export type RowColumnThreeFieldPolicy = {
	colOne?: FieldPolicy<any> | FieldReadFunction<any>,
	colThree?: FieldPolicy<any> | FieldReadFunction<any>,
	colTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnThreeConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowColumnThreeConnectionKeySpecifier)[];
export type RowColumnThreeConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnThreeEdgeKeySpecifier = ('cursor' | 'node' | RowColumnThreeEdgeKeySpecifier)[];
export type RowColumnThreeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnTwoKeySpecifier = ('colOne' | 'colTwo' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | RowColumnTwoKeySpecifier)[];
export type RowColumnTwoFieldPolicy = {
	colOne?: FieldPolicy<any> | FieldReadFunction<any>,
	colTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnTwoConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowColumnTwoConnectionKeySpecifier)[];
export type RowColumnTwoConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowColumnTwoEdgeKeySpecifier = ('cursor' | 'node' | RowColumnTwoEdgeKeySpecifier)[];
export type RowColumnTwoEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowContentLinksKeySpecifier = ('contentLinks' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'stage' | 'title' | RowContentLinksKeySpecifier)[];
export type RowContentLinksFieldPolicy = {
	contentLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowContentLinksConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowContentLinksConnectionKeySpecifier)[];
export type RowContentLinksConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowContentLinksEdgeKeySpecifier = ('cursor' | 'node' | RowContentLinksEdgeKeySpecifier)[];
export type RowContentLinksEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowHeroBannerKeySpecifier = ('asset' | 'copy' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pageLinks' | 'pages' | 'stage' | RowHeroBannerKeySpecifier)[];
export type RowHeroBannerFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	copy?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowHeroBannerConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowHeroBannerConnectionKeySpecifier)[];
export type RowHeroBannerConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowHeroBannerEdgeKeySpecifier = ('cursor' | 'node' | RowHeroBannerEdgeKeySpecifier)[];
export type RowHeroBannerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowLinksKeySpecifier = ('dynamicRow' | 'dynamicRows' | 'dynamicRowsTarget' | 'id' | 'identity' | 'linksVariant' | 'locale' | 'pageLinks' | 'pages' | 'rowLinksCopy' | 'stage' | 'title' | RowLinksKeySpecifier)[];
export type RowLinksFieldPolicy = {
	dynamicRow?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRows?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	linksVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	rowLinksCopy?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowLinksConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowLinksConnectionKeySpecifier)[];
export type RowLinksConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowLinksEdgeKeySpecifier = ('cursor' | 'node' | RowLinksEdgeKeySpecifier)[];
export type RowLinksEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowProductKeySpecifier = ('asset' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pageLinks' | 'pages' | 'productCopy' | 'stage' | 'title' | 'variant' | RowProductKeySpecifier)[];
export type RowProductFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	productCopy?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowProductConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowProductConnectionKeySpecifier)[];
export type RowProductConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowProductEdgeKeySpecifier = ('cursor' | 'node' | RowProductEdgeKeySpecifier)[];
export type RowProductEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowQuoteKeySpecifier = ('dynamicRow' | 'dynamicRows' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'quote' | 'stage' | RowQuoteKeySpecifier)[];
export type RowQuoteFieldPolicy = {
	dynamicRow?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRows?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	quote?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowQuoteConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowQuoteConnectionKeySpecifier)[];
export type RowQuoteConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowQuoteEdgeKeySpecifier = ('cursor' | 'node' | RowQuoteEdgeKeySpecifier)[];
export type RowQuoteEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowServiceOptionsKeySpecifier = ('dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pages' | 'serviceOptions' | 'stage' | 'title' | RowServiceOptionsKeySpecifier)[];
export type RowServiceOptionsFieldPolicy = {
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowServiceOptionsConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowServiceOptionsConnectionKeySpecifier)[];
export type RowServiceOptionsConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowServiceOptionsEdgeKeySpecifier = ('cursor' | 'node' | RowServiceOptionsEdgeKeySpecifier)[];
export type RowServiceOptionsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowSpecialBannerKeySpecifier = ('asset' | 'copy' | 'dynamicRowsTarget' | 'id' | 'identity' | 'locale' | 'pageLinks' | 'pages' | 'stage' | 'topic' | RowSpecialBannerKeySpecifier)[];
export type RowSpecialBannerFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	copy?: FieldPolicy<any> | FieldReadFunction<any>,
	dynamicRowsTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	pageLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowSpecialBannerConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RowSpecialBannerConnectionKeySpecifier)[];
export type RowSpecialBannerConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RowSpecialBannerEdgeKeySpecifier = ('cursor' | 'node' | RowSpecialBannerEdgeKeySpecifier)[];
export type RowSpecialBannerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SDKParamsKeySpecifier = ('name' | 'value' | SDKParamsKeySpecifier)[];
export type SDKParamsFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesCommentItemKeySpecifier = ('message' | 'timestamp' | SalesCommentItemKeySpecifier)[];
export type SalesCommentItemFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesItemInterfaceKeySpecifier = ('gift_message' | SalesItemInterfaceKeySpecifier)[];
export type SalesItemInterfaceFieldPolicy = {
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledOperationKeySpecifier = ('affectedDocuments' | 'description' | 'errorMessage' | 'id' | 'rawPayload' | 'release' | 'stage' | 'status' | ScheduledOperationKeySpecifier)[];
export type ScheduledOperationFieldPolicy = {
	affectedDocuments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rawPayload?: FieldPolicy<any> | FieldReadFunction<any>,
	release?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledReleaseKeySpecifier = ('description' | 'errorMessage' | 'id' | 'isActive' | 'isImplicit' | 'operations' | 'releaseAt' | 'stage' | 'status' | 'title' | ScheduledReleaseKeySpecifier)[];
export type ScheduledReleaseFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isImplicit?: FieldPolicy<any> | FieldReadFunction<any>,
	operations?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultPageInfoKeySpecifier = ('current_page' | 'page_size' | 'total_pages' | SearchResultPageInfoKeySpecifier)[];
export type SearchResultPageInfoFieldPolicy = {
	current_page?: FieldPolicy<any> | FieldReadFunction<any>,
	page_size?: FieldPolicy<any> | FieldReadFunction<any>,
	total_pages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchSuggestionKeySpecifier = ('search' | SearchSuggestionKeySpecifier)[];
export type SearchSuggestionFieldPolicy = {
	search?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedBundleOptionKeySpecifier = ('id' | 'label' | 'type' | 'uid' | 'values' | SelectedBundleOptionKeySpecifier)[];
export type SelectedBundleOptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedBundleOptionValueKeySpecifier = ('id' | 'label' | 'price' | 'quantity' | 'uid' | SelectedBundleOptionValueKeySpecifier)[];
export type SelectedBundleOptionValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedConfigurableOptionKeySpecifier = ('configurable_product_option_uid' | 'configurable_product_option_value_uid' | 'id' | 'option_label' | 'value_id' | 'value_label' | SelectedConfigurableOptionKeySpecifier)[];
export type SelectedConfigurableOptionFieldPolicy = {
	configurable_product_option_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_product_option_value_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	option_label?: FieldPolicy<any> | FieldReadFunction<any>,
	value_id?: FieldPolicy<any> | FieldReadFunction<any>,
	value_label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedCustomizableOptionKeySpecifier = ('customizable_option_uid' | 'id' | 'is_required' | 'label' | 'sort_order' | 'type' | 'values' | SelectedCustomizableOptionKeySpecifier)[];
export type SelectedCustomizableOptionFieldPolicy = {
	customizable_option_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_required?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedCustomizableOptionValueKeySpecifier = ('customizable_option_value_uid' | 'id' | 'label' | 'price' | 'value' | SelectedCustomizableOptionValueKeySpecifier)[];
export type SelectedCustomizableOptionValueFieldPolicy = {
	customizable_option_value_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedPaymentMethodKeySpecifier = ('code' | 'purchase_order_number' | 'title' | SelectedPaymentMethodKeySpecifier)[];
export type SelectedPaymentMethodFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedShippingMethodKeySpecifier = ('amount' | 'base_amount' | 'carrier_code' | 'carrier_title' | 'method_code' | 'method_title' | 'price_excl_tax' | 'price_incl_tax' | SelectedShippingMethodKeySpecifier)[];
export type SelectedShippingMethodFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	base_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_code?: FieldPolicy<any> | FieldReadFunction<any>,
	carrier_title?: FieldPolicy<any> | FieldReadFunction<any>,
	method_code?: FieldPolicy<any> | FieldReadFunction<any>,
	method_title?: FieldPolicy<any> | FieldReadFunction<any>,
	price_excl_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	price_incl_tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendEmailToFriendOutputKeySpecifier = ('recipients' | 'sender' | SendEmailToFriendOutputKeySpecifier)[];
export type SendEmailToFriendOutputFieldPolicy = {
	recipients?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendEmailToFriendRecipientKeySpecifier = ('email' | 'name' | SendEmailToFriendRecipientKeySpecifier)[];
export type SendEmailToFriendRecipientFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendEmailToFriendSenderKeySpecifier = ('email' | 'message' | 'name' | SendEmailToFriendSenderKeySpecifier)[];
export type SendEmailToFriendSenderFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendFriendConfigurationKeySpecifier = ('enabled_for_customers' | 'enabled_for_guests' | SendFriendConfigurationKeySpecifier)[];
export type SendFriendConfigurationFieldPolicy = {
	enabled_for_customers?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled_for_guests?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetBillingAddressOnCartOutputKeySpecifier = ('cart' | SetBillingAddressOnCartOutputKeySpecifier)[];
export type SetBillingAddressOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetGuestEmailOnCartOutputKeySpecifier = ('cart' | SetGuestEmailOnCartOutputKeySpecifier)[];
export type SetGuestEmailOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetPaymentMethodOnCartOutputKeySpecifier = ('cart' | SetPaymentMethodOnCartOutputKeySpecifier)[];
export type SetPaymentMethodOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetShippingAddressesOnCartOutputKeySpecifier = ('cart' | SetShippingAddressesOnCartOutputKeySpecifier)[];
export type SetShippingAddressesOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetShippingMethodsOnCartOutputKeySpecifier = ('cart' | SetShippingMethodsOnCartOutputKeySpecifier)[];
export type SetShippingMethodsOnCartOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemKeySpecifier = ('id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_shipped' | ShipmentItemKeySpecifier)[];
export type ShipmentItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemInterfaceKeySpecifier = ('id' | 'order_item' | 'product_name' | 'product_sale_price' | 'product_sku' | 'quantity_shipped' | ShipmentItemInterfaceKeySpecifier)[];
export type ShipmentItemInterfaceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_item?: FieldPolicy<any> | FieldReadFunction<any>,
	product_name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sale_price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_sku?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_shipped?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentTrackingKeySpecifier = ('carrier' | 'number' | 'title' | ShipmentTrackingKeySpecifier)[];
export type ShipmentTrackingFieldPolicy = {
	carrier?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingCartAddressKeySpecifier = ('available_shipping_methods' | 'cart_items' | 'cart_items_v2' | 'city' | 'company' | 'country' | 'customer_notes' | 'fax' | 'firstname' | 'items_weight' | 'lastname' | 'middlename' | 'pickup_location_code' | 'postcode' | 'prefix' | 'region' | 'selected_shipping_method' | 'street' | 'suffix' | 'telephone' | 'uid' | 'vat_id' | ShippingCartAddressKeySpecifier)[];
export type ShippingCartAddressFieldPolicy = {
	available_shipping_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	cart_items?: FieldPolicy<any> | FieldReadFunction<any>,
	cart_items_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_notes?: FieldPolicy<any> | FieldReadFunction<any>,
	fax?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	items_weight?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	middlename?: FieldPolicy<any> | FieldReadFunction<any>,
	pickup_location_code?: FieldPolicy<any> | FieldReadFunction<any>,
	postcode?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	selected_shipping_method?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	telephone?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	vat_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingDiscountKeySpecifier = ('amount' | ShippingDiscountKeySpecifier)[];
export type ShippingDiscountFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingHandlingKeySpecifier = ('amount_excluding_tax' | 'amount_including_tax' | 'discounts' | 'taxes' | 'total_amount' | ShippingHandlingKeySpecifier)[];
export type ShippingHandlingFieldPolicy = {
	amount_excluding_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_including_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	discounts?: FieldPolicy<any> | FieldReadFunction<any>,
	taxes?: FieldPolicy<any> | FieldReadFunction<any>,
	total_amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleCartItemKeySpecifier = ('customizable_options' | 'errors' | 'gift_message' | 'id' | 'is_available' | 'prices' | 'product' | 'quantity' | 'uid' | SimpleCartItemKeySpecifier)[];
export type SimpleCartItemFieldPolicy = {
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleProductKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | 'weight' | SimpleProductKeySpecifier)[];
export type SimpleProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | SimpleWishlistItemKeySpecifier)[];
export type SimpleWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmartButtonsConfigKeySpecifier = ('button_styles' | 'code' | 'display_message' | 'display_venmo' | 'is_visible' | 'message_styles' | 'payment_intent' | 'sdk_params' | 'sort_order' | 'title' | SmartButtonsConfigKeySpecifier)[];
export type SmartButtonsConfigFieldPolicy = {
	button_styles?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	display_message?: FieldPolicy<any> | FieldReadFunction<any>,
	display_venmo?: FieldPolicy<any> | FieldReadFunction<any>,
	is_visible?: FieldPolicy<any> | FieldReadFunction<any>,
	message_styles?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_intent?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SortFieldKeySpecifier = ('label' | 'value' | SortFieldKeySpecifier)[];
export type SortFieldFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SortFieldsKeySpecifier = ('default' | 'options' | SortFieldsKeySpecifier)[];
export type SortFieldsFieldPolicy = {
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreConfigKeySpecifier = ('absolute_footer' | 'allow_guests_to_write_product_reviews' | 'allow_items' | 'allow_order' | 'autocomplete_on_storefront' | 'base_currency_code' | 'base_link_url' | 'base_media_url' | 'base_static_url' | 'base_url' | 'braintree_3dsecure_allowspecific' | 'braintree_3dsecure_always_request_3ds' | 'braintree_3dsecure_specificcountry' | 'braintree_3dsecure_threshold_amount' | 'braintree_3dsecure_verify_3dsecure' | 'braintree_ach_direct_debit_vault_active' | 'braintree_applepay_merchant_name' | 'braintree_applepay_vault_active' | 'braintree_cc_vault_active' | 'braintree_cc_vault_cvv' | 'braintree_environment' | 'braintree_googlepay_btn_color' | 'braintree_googlepay_cctypes' | 'braintree_googlepay_merchant_id' | 'braintree_googlepay_vault_active' | 'braintree_local_payment_allowed_methods' | 'braintree_local_payment_fallback_button_text' | 'braintree_local_payment_redirect_on_fail' | 'braintree_merchant_account_id' | 'braintree_paypal_button_location_cart_type_credit_color' | 'braintree_paypal_button_location_cart_type_credit_label' | 'braintree_paypal_button_location_cart_type_credit_shape' | 'braintree_paypal_button_location_cart_type_credit_show' | 'braintree_paypal_button_location_cart_type_messaging_layout' | 'braintree_paypal_button_location_cart_type_messaging_logo' | 'braintree_paypal_button_location_cart_type_messaging_logo_position' | 'braintree_paypal_button_location_cart_type_messaging_show' | 'braintree_paypal_button_location_cart_type_messaging_text_color' | 'braintree_paypal_button_location_cart_type_paylater_color' | 'braintree_paypal_button_location_cart_type_paylater_label' | 'braintree_paypal_button_location_cart_type_paylater_shape' | 'braintree_paypal_button_location_cart_type_paylater_show' | 'braintree_paypal_button_location_cart_type_paypal_color' | 'braintree_paypal_button_location_cart_type_paypal_label' | 'braintree_paypal_button_location_cart_type_paypal_shape' | 'braintree_paypal_button_location_cart_type_paypal_show' | 'braintree_paypal_button_location_checkout_type_credit_color' | 'braintree_paypal_button_location_checkout_type_credit_label' | 'braintree_paypal_button_location_checkout_type_credit_shape' | 'braintree_paypal_button_location_checkout_type_credit_show' | 'braintree_paypal_button_location_checkout_type_messaging_layout' | 'braintree_paypal_button_location_checkout_type_messaging_logo' | 'braintree_paypal_button_location_checkout_type_messaging_logo_position' | 'braintree_paypal_button_location_checkout_type_messaging_show' | 'braintree_paypal_button_location_checkout_type_messaging_text_color' | 'braintree_paypal_button_location_checkout_type_paylater_color' | 'braintree_paypal_button_location_checkout_type_paylater_label' | 'braintree_paypal_button_location_checkout_type_paylater_shape' | 'braintree_paypal_button_location_checkout_type_paylater_show' | 'braintree_paypal_button_location_checkout_type_paypal_color' | 'braintree_paypal_button_location_checkout_type_paypal_label' | 'braintree_paypal_button_location_checkout_type_paypal_shape' | 'braintree_paypal_button_location_checkout_type_paypal_show' | 'braintree_paypal_button_location_productpage_type_credit_color' | 'braintree_paypal_button_location_productpage_type_credit_label' | 'braintree_paypal_button_location_productpage_type_credit_shape' | 'braintree_paypal_button_location_productpage_type_credit_show' | 'braintree_paypal_button_location_productpage_type_messaging_layout' | 'braintree_paypal_button_location_productpage_type_messaging_logo' | 'braintree_paypal_button_location_productpage_type_messaging_logo_position' | 'braintree_paypal_button_location_productpage_type_messaging_show' | 'braintree_paypal_button_location_productpage_type_messaging_text_color' | 'braintree_paypal_button_location_productpage_type_paylater_color' | 'braintree_paypal_button_location_productpage_type_paylater_label' | 'braintree_paypal_button_location_productpage_type_paylater_shape' | 'braintree_paypal_button_location_productpage_type_paylater_show' | 'braintree_paypal_button_location_productpage_type_paypal_color' | 'braintree_paypal_button_location_productpage_type_paypal_label' | 'braintree_paypal_button_location_productpage_type_paypal_shape' | 'braintree_paypal_button_location_productpage_type_paypal_show' | 'braintree_paypal_credit_uk_merchant_name' | 'braintree_paypal_display_on_shopping_cart' | 'braintree_paypal_merchant_country' | 'braintree_paypal_merchant_name_override' | 'braintree_paypal_require_billing_address' | 'braintree_paypal_send_cart_line_items' | 'braintree_paypal_vault_active' | 'cart_expires_in_days' | 'cart_summary_display_quantity' | 'catalog_default_sort_by' | 'category_fixed_product_tax_display_setting' | 'category_url_suffix' | 'check_money_order_enable_for_specific_countries' | 'check_money_order_enabled' | 'check_money_order_make_check_payable_to' | 'check_money_order_max_order_total' | 'check_money_order_min_order_total' | 'check_money_order_new_order_status' | 'check_money_order_payment_from_specific_countries' | 'check_money_order_send_check_to' | 'check_money_order_sort_order' | 'check_money_order_title' | 'cms_home_page' | 'cms_no_cookies' | 'cms_no_route' | 'code' | 'configurable_thumbnail_source' | 'contact_enabled' | 'copyright' | 'countries_with_required_region' | 'create_account_confirmation' | 'customer_access_token_lifetime' | 'default_country' | 'default_description' | 'default_display_currency_code' | 'default_keywords' | 'default_title' | 'demonotice' | 'display_state_if_optional' | 'front' | 'grid_per_page' | 'grid_per_page_values' | 'head_includes' | 'head_shortcut_icon' | 'header_logo_src' | 'id' | 'is_default_store' | 'is_default_store_group' | 'is_guest_checkout_enabled' | 'is_one_page_checkout_enabled' | 'list_mode' | 'list_per_page' | 'list_per_page_values' | 'locale' | 'logo_alt' | 'logo_height' | 'logo_width' | 'magento_wishlist_general_is_enabled' | 'max_items_in_order_summary' | 'minicart_display' | 'minicart_max_items' | 'minimum_password_length' | 'newsletter_enabled' | 'no_route' | 'optional_zip_countries' | 'order_cancellation_enabled' | 'order_cancellation_reasons' | 'payment_payflowpro_cc_vault_active' | 'product_fixed_product_tax_display_setting' | 'product_reviews_enabled' | 'product_url_suffix' | 'required_character_classes_number' | 'root_category_id' | 'root_category_uid' | 'sales_fixed_product_tax_display_setting' | 'secure_base_link_url' | 'secure_base_media_url' | 'secure_base_static_url' | 'secure_base_url' | 'send_friend' | 'shopping_cart_display_full_summary' | 'shopping_cart_display_grand_total' | 'shopping_cart_display_price' | 'shopping_cart_display_shipping' | 'shopping_cart_display_subtotal' | 'shopping_cart_display_tax_gift_wrapping' | 'shopping_cart_display_zero_tax' | 'show_cms_breadcrumbs' | 'store_code' | 'store_group_code' | 'store_group_name' | 'store_name' | 'store_sort_order' | 'timezone' | 'title_prefix' | 'title_separator' | 'title_suffix' | 'use_store_in_url' | 'website_code' | 'website_id' | 'website_name' | 'weight_unit' | 'welcome' | 'zero_subtotal_enable_for_specific_countries' | 'zero_subtotal_enabled' | 'zero_subtotal_new_order_status' | 'zero_subtotal_payment_action' | 'zero_subtotal_payment_from_specific_countries' | 'zero_subtotal_sort_order' | 'zero_subtotal_title' | StoreConfigKeySpecifier)[];
export type StoreConfigFieldPolicy = {
	absolute_footer?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_guests_to_write_product_reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_items?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_order?: FieldPolicy<any> | FieldReadFunction<any>,
	autocomplete_on_storefront?: FieldPolicy<any> | FieldReadFunction<any>,
	base_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	base_link_url?: FieldPolicy<any> | FieldReadFunction<any>,
	base_media_url?: FieldPolicy<any> | FieldReadFunction<any>,
	base_static_url?: FieldPolicy<any> | FieldReadFunction<any>,
	base_url?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_3dsecure_allowspecific?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_3dsecure_always_request_3ds?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_3dsecure_specificcountry?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_3dsecure_threshold_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_3dsecure_verify_3dsecure?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_ach_direct_debit_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_applepay_merchant_name?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_applepay_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_cc_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_cc_vault_cvv?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_environment?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_googlepay_btn_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_googlepay_cctypes?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_googlepay_merchant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_googlepay_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_local_payment_allowed_methods?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_local_payment_fallback_button_text?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_local_payment_redirect_on_fail?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_merchant_account_id?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_credit_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_credit_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_credit_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_credit_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_messaging_layout?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_messaging_logo?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_messaging_logo_position?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_messaging_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_messaging_text_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paylater_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paylater_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paylater_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paylater_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paypal_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paypal_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paypal_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_cart_type_paypal_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_credit_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_credit_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_credit_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_credit_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_messaging_layout?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_messaging_logo?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_messaging_logo_position?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_messaging_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_messaging_text_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paylater_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paylater_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paylater_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paylater_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paypal_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paypal_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paypal_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_checkout_type_paypal_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_credit_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_credit_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_credit_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_credit_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_messaging_layout?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_messaging_logo?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_messaging_logo_position?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_messaging_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_messaging_text_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paylater_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paylater_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paylater_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paylater_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paypal_color?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paypal_label?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paypal_shape?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_button_location_productpage_type_paypal_show?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_credit_uk_merchant_name?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_display_on_shopping_cart?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_merchant_country?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_merchant_name_override?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_require_billing_address?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_send_cart_line_items?: FieldPolicy<any> | FieldReadFunction<any>,
	braintree_paypal_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	cart_expires_in_days?: FieldPolicy<any> | FieldReadFunction<any>,
	cart_summary_display_quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	catalog_default_sort_by?: FieldPolicy<any> | FieldReadFunction<any>,
	category_fixed_product_tax_display_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	category_url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_enable_for_specific_countries?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_make_check_payable_to?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_max_order_total?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_min_order_total?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_new_order_status?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_payment_from_specific_countries?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_send_check_to?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	check_money_order_title?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_home_page?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_no_cookies?: FieldPolicy<any> | FieldReadFunction<any>,
	cms_no_route?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	configurable_thumbnail_source?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	countries_with_required_region?: FieldPolicy<any> | FieldReadFunction<any>,
	create_account_confirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_access_token_lifetime?: FieldPolicy<any> | FieldReadFunction<any>,
	default_country?: FieldPolicy<any> | FieldReadFunction<any>,
	default_description?: FieldPolicy<any> | FieldReadFunction<any>,
	default_display_currency_code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	default_title?: FieldPolicy<any> | FieldReadFunction<any>,
	demonotice?: FieldPolicy<any> | FieldReadFunction<any>,
	display_state_if_optional?: FieldPolicy<any> | FieldReadFunction<any>,
	front?: FieldPolicy<any> | FieldReadFunction<any>,
	grid_per_page?: FieldPolicy<any> | FieldReadFunction<any>,
	grid_per_page_values?: FieldPolicy<any> | FieldReadFunction<any>,
	head_includes?: FieldPolicy<any> | FieldReadFunction<any>,
	head_shortcut_icon?: FieldPolicy<any> | FieldReadFunction<any>,
	header_logo_src?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_store?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_store_group?: FieldPolicy<any> | FieldReadFunction<any>,
	is_guest_checkout_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	is_one_page_checkout_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	list_mode?: FieldPolicy<any> | FieldReadFunction<any>,
	list_per_page?: FieldPolicy<any> | FieldReadFunction<any>,
	list_per_page_values?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	logo_alt?: FieldPolicy<any> | FieldReadFunction<any>,
	logo_height?: FieldPolicy<any> | FieldReadFunction<any>,
	logo_width?: FieldPolicy<any> | FieldReadFunction<any>,
	magento_wishlist_general_is_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	max_items_in_order_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	minicart_display?: FieldPolicy<any> | FieldReadFunction<any>,
	minicart_max_items?: FieldPolicy<any> | FieldReadFunction<any>,
	minimum_password_length?: FieldPolicy<any> | FieldReadFunction<any>,
	newsletter_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	no_route?: FieldPolicy<any> | FieldReadFunction<any>,
	optional_zip_countries?: FieldPolicy<any> | FieldReadFunction<any>,
	order_cancellation_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	order_cancellation_reasons?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_payflowpro_cc_vault_active?: FieldPolicy<any> | FieldReadFunction<any>,
	product_fixed_product_tax_display_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	product_reviews_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	product_url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	required_character_classes_number?: FieldPolicy<any> | FieldReadFunction<any>,
	root_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	root_category_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_fixed_product_tax_display_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_link_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_media_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_static_url?: FieldPolicy<any> | FieldReadFunction<any>,
	secure_base_url?: FieldPolicy<any> | FieldReadFunction<any>,
	send_friend?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_full_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_grand_total?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_price?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_shipping?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_tax_gift_wrapping?: FieldPolicy<any> | FieldReadFunction<any>,
	shopping_cart_display_zero_tax?: FieldPolicy<any> | FieldReadFunction<any>,
	show_cms_breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	store_code?: FieldPolicy<any> | FieldReadFunction<any>,
	store_group_code?: FieldPolicy<any> | FieldReadFunction<any>,
	store_group_name?: FieldPolicy<any> | FieldReadFunction<any>,
	store_name?: FieldPolicy<any> | FieldReadFunction<any>,
	store_sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	title_prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	title_separator?: FieldPolicy<any> | FieldReadFunction<any>,
	title_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	use_store_in_url?: FieldPolicy<any> | FieldReadFunction<any>,
	website_code?: FieldPolicy<any> | FieldReadFunction<any>,
	website_id?: FieldPolicy<any> | FieldReadFunction<any>,
	website_name?: FieldPolicy<any> | FieldReadFunction<any>,
	weight_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	welcome?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_enable_for_specific_countries?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_new_order_status?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_payment_action?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_payment_from_specific_countries?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_sort_order?: FieldPolicy<any> | FieldReadFunction<any>,
	zero_subtotal_title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StorefrontPropertiesKeySpecifier = ('position' | 'use_in_layered_navigation' | 'use_in_product_listing' | 'use_in_search_results_layered_navigation' | 'visible_on_catalog_pages' | StorefrontPropertiesKeySpecifier)[];
export type StorefrontPropertiesFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	use_in_layered_navigation?: FieldPolicy<any> | FieldReadFunction<any>,
	use_in_product_listing?: FieldPolicy<any> | FieldReadFunction<any>,
	use_in_search_results_layered_navigation?: FieldPolicy<any> | FieldReadFunction<any>,
	visible_on_catalog_pages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribeEmailToNewsletterOutputKeySpecifier = ('status' | SubscribeEmailToNewsletterOutputKeySpecifier)[];
export type SubscribeEmailToNewsletterOutputFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchDataKeySpecifier = ('type' | 'value' | SwatchDataKeySpecifier)[];
export type SwatchDataFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchDataInterfaceKeySpecifier = ('value' | SwatchDataInterfaceKeySpecifier)[];
export type SwatchDataInterfaceFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchLayerFilterItemKeySpecifier = ('items_count' | 'label' | 'swatch_data' | 'value_string' | SwatchLayerFilterItemKeySpecifier)[];
export type SwatchLayerFilterItemFieldPolicy = {
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_data?: FieldPolicy<any> | FieldReadFunction<any>,
	value_string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchLayerFilterItemInterfaceKeySpecifier = ('swatch_data' | SwatchLayerFilterItemInterfaceKeySpecifier)[];
export type SwatchLayerFilterItemInterfaceFieldPolicy = {
	swatch_data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxItemKeySpecifier = ('amount' | 'rate' | 'title' | TaxItemKeySpecifier)[];
export type TaxItemFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextSwatchDataKeySpecifier = ('value' | TextSwatchDataKeySpecifier)[];
export type TextSwatchDataFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TierPriceKeySpecifier = ('discount' | 'final_price' | 'quantity' | TierPriceKeySpecifier)[];
export type TierPriceFieldPolicy = {
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	final_price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCartItemsOutputKeySpecifier = ('cart' | UpdateCartItemsOutputKeySpecifier)[];
export type UpdateCartItemsOutputFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProductsInWishlistOutputKeySpecifier = ('user_errors' | 'wishlist' | UpdateProductsInWishlistOutputKeySpecifier)[];
export type UpdateProductsInWishlistOutputFieldPolicy = {
	user_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UrlRewriteKeySpecifier = ('parameters' | 'url' | UrlRewriteKeySpecifier)[];
export type UrlRewriteFieldPolicy = {
	parameters?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'isActive' | 'kind' | 'name' | 'picture' | 'stage' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UspsKeySpecifier = ('id' | 'identity' | 'stage' | 'uspsMultiple' | UspsKeySpecifier)[];
export type UspsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	uspsMultiple?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UspsConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | UspsConnectionKeySpecifier)[];
export type UspsConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UspsEdgeKeySpecifier = ('cursor' | 'node' | UspsEdgeKeySpecifier)[];
export type UspsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidationRuleKeySpecifier = ('name' | 'value' | ValidationRuleKeySpecifier)[];
export type ValidationRuleFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VaultConfigOutputKeySpecifier = ('credit_card' | VaultConfigOutputKeySpecifier)[];
export type VaultConfigOutputFieldPolicy = {
	credit_card?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VaultCreditCardConfigKeySpecifier = ('is_vault_enabled' | 'sdk_params' | 'three_ds_mode' | VaultCreditCardConfigKeySpecifier)[];
export type VaultCreditCardConfigFieldPolicy = {
	is_vault_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	sdk_params?: FieldPolicy<any> | FieldReadFunction<any>,
	three_ds_mode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualCartItemKeySpecifier = ('customizable_options' | 'errors' | 'id' | 'is_available' | 'prices' | 'product' | 'quantity' | 'uid' | VirtualCartItemKeySpecifier)[];
export type VirtualCartItemFieldPolicy = {
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_available?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualProductKeySpecifier = ('activity' | 'attribute_set_id' | 'canonical_url' | 'categories' | 'category_gear' | 'climate' | 'collar' | 'color' | 'country_of_manufacture' | 'created_at' | 'crosssell_products' | 'custom_attributeV2' | 'custom_attributesV2' | 'description' | 'eco_collection' | 'erin_recommends' | 'features_bags' | 'format' | 'gender' | 'gift_message_available' | 'id' | 'image' | 'manufacturer' | 'material' | 'media_gallery' | 'media_gallery_entries' | 'meta_description' | 'meta_keyword' | 'meta_title' | 'name' | 'new' | 'new_from_date' | 'new_to_date' | 'only_x_left_in_stock' | 'options' | 'options_container' | 'pattern' | 'performance_fabric' | 'price' | 'price_range' | 'price_tiers' | 'product_links' | 'rating_summary' | 'redirect_code' | 'related_products' | 'relative_url' | 'review_count' | 'reviews' | 'sale' | 'short_description' | 'size' | 'sku' | 'sleeve' | 'small_image' | 'special_from_date' | 'special_price' | 'special_to_date' | 'stock_status' | 'strap_bags' | 'style_bags' | 'style_bottom' | 'style_general' | 'swatch_image' | 'thumbnail' | 'tier_price' | 'tier_prices' | 'type' | 'type_id' | 'uid' | 'updated_at' | 'upsell_products' | 'url_key' | 'url_path' | 'url_rewrites' | 'url_suffix' | 'websites' | VirtualProductKeySpecifier)[];
export type VirtualProductFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute_set_id?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical_url?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_gear?: FieldPolicy<any> | FieldReadFunction<any>,
	climate?: FieldPolicy<any> | FieldReadFunction<any>,
	collar?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	country_of_manufacture?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crosssell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	custom_attributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eco_collection?: FieldPolicy<any> | FieldReadFunction<any>,
	erin_recommends?: FieldPolicy<any> | FieldReadFunction<any>,
	features_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	gift_message_available?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	material?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	media_gallery_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_description?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_keyword?: FieldPolicy<any> | FieldReadFunction<any>,
	meta_title?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	new_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	new_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	only_x_left_in_stock?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	options_container?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	performance_fabric?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_range?: FieldPolicy<any> | FieldReadFunction<any>,
	price_tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	product_links?: FieldPolicy<any> | FieldReadFunction<any>,
	rating_summary?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_code?: FieldPolicy<any> | FieldReadFunction<any>,
	related_products?: FieldPolicy<any> | FieldReadFunction<any>,
	relative_url?: FieldPolicy<any> | FieldReadFunction<any>,
	review_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	short_description?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	sleeve?: FieldPolicy<any> | FieldReadFunction<any>,
	small_image?: FieldPolicy<any> | FieldReadFunction<any>,
	special_from_date?: FieldPolicy<any> | FieldReadFunction<any>,
	special_price?: FieldPolicy<any> | FieldReadFunction<any>,
	special_to_date?: FieldPolicy<any> | FieldReadFunction<any>,
	stock_status?: FieldPolicy<any> | FieldReadFunction<any>,
	strap_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bags?: FieldPolicy<any> | FieldReadFunction<any>,
	style_bottom?: FieldPolicy<any> | FieldReadFunction<any>,
	style_general?: FieldPolicy<any> | FieldReadFunction<any>,
	swatch_image?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_price?: FieldPolicy<any> | FieldReadFunction<any>,
	tier_prices?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	upsell_products?: FieldPolicy<any> | FieldReadFunction<any>,
	url_key?: FieldPolicy<any> | FieldReadFunction<any>,
	url_path?: FieldPolicy<any> | FieldReadFunction<any>,
	url_rewrites?: FieldPolicy<any> | FieldReadFunction<any>,
	url_suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	websites?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VirtualWishlistItemKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | VirtualWishlistItemKeySpecifier)[];
export type VirtualWishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebsiteKeySpecifier = ('code' | 'default_group_id' | 'id' | 'is_default' | 'name' | 'sort_order' | WebsiteKeySpecifier)[];
export type WebsiteFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	default_group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sort_order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishListUserInputErrorKeySpecifier = ('code' | 'message' | WishListUserInputErrorKeySpecifier)[];
export type WishListUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistKeySpecifier = ('id' | 'items' | 'items_count' | 'items_v2' | 'sharing_code' | 'updated_at' | WishlistKeySpecifier)[];
export type WishlistFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	items_v2?: FieldPolicy<any> | FieldReadFunction<any>,
	sharing_code?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistCartUserInputErrorKeySpecifier = ('code' | 'message' | 'wishlistId' | 'wishlistItemId' | WishlistCartUserInputErrorKeySpecifier)[];
export type WishlistCartUserInputErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistId?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistItemId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemKeySpecifier = ('added_at' | 'description' | 'id' | 'product' | 'qty' | WishlistItemKeySpecifier)[];
export type WishlistItemFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	qty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemInterfaceKeySpecifier = ('added_at' | 'customizable_options' | 'description' | 'id' | 'product' | 'quantity' | WishlistItemInterfaceKeySpecifier)[];
export type WishlistItemInterfaceFieldPolicy = {
	added_at?: FieldPolicy<any> | FieldReadFunction<any>,
	customizable_options?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemsKeySpecifier = ('items' | 'page_info' | WishlistItemsKeySpecifier)[];
export type WishlistItemsFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistOutputKeySpecifier = ('items' | 'items_count' | 'name' | 'sharing_code' | 'updated_at' | WishlistOutputKeySpecifier)[];
export type WishlistOutputFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	items_count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sharing_code?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AddBundleProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddBundleProductsToCartOutputKeySpecifier | (() => undefined | AddBundleProductsToCartOutputKeySpecifier),
		fields?: AddBundleProductsToCartOutputFieldPolicy,
	},
	AddConfigurableProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddConfigurableProductsToCartOutputKeySpecifier | (() => undefined | AddConfigurableProductsToCartOutputKeySpecifier),
		fields?: AddConfigurableProductsToCartOutputFieldPolicy,
	},
	AddDownloadableProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddDownloadableProductsToCartOutputKeySpecifier | (() => undefined | AddDownloadableProductsToCartOutputKeySpecifier),
		fields?: AddDownloadableProductsToCartOutputFieldPolicy,
	},
	AddProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProductsToCartOutputKeySpecifier | (() => undefined | AddProductsToCartOutputKeySpecifier),
		fields?: AddProductsToCartOutputFieldPolicy,
	},
	AddProductsToWishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProductsToWishlistOutputKeySpecifier | (() => undefined | AddProductsToWishlistOutputKeySpecifier),
		fields?: AddProductsToWishlistOutputFieldPolicy,
	},
	AddSimpleProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddSimpleProductsToCartOutputKeySpecifier | (() => undefined | AddSimpleProductsToCartOutputKeySpecifier),
		fields?: AddSimpleProductsToCartOutputFieldPolicy,
	},
	AddVirtualProductsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddVirtualProductsToCartOutputKeySpecifier | (() => undefined | AddVirtualProductsToCartOutputKeySpecifier),
		fields?: AddVirtualProductsToCartOutputFieldPolicy,
	},
	AddWishlistItemsToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddWishlistItemsToCartOutputKeySpecifier | (() => undefined | AddWishlistItemsToCartOutputKeySpecifier),
		fields?: AddWishlistItemsToCartOutputFieldPolicy,
	},
	Aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateKeySpecifier | (() => undefined | AggregateKeySpecifier),
		fields?: AggregateFieldPolicy,
	},
	Aggregation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationKeySpecifier | (() => undefined | AggregationKeySpecifier),
		fields?: AggregationFieldPolicy,
	},
	AggregationOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationOptionKeySpecifier | (() => undefined | AggregationOptionKeySpecifier),
		fields?: AggregationOptionFieldPolicy,
	},
	AggregationOptionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregationOptionInterfaceKeySpecifier | (() => undefined | AggregationOptionInterfaceKeySpecifier),
		fields?: AggregationOptionInterfaceFieldPolicy,
	},
	ApplePayConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplePayConfigKeySpecifier | (() => undefined | ApplePayConfigKeySpecifier),
		fields?: ApplePayConfigFieldPolicy,
	},
	AppliedCoupon?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppliedCouponKeySpecifier | (() => undefined | AppliedCouponKeySpecifier),
		fields?: AppliedCouponFieldPolicy,
	},
	ApplyCouponToCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplyCouponToCartOutputKeySpecifier | (() => undefined | ApplyCouponToCartOutputKeySpecifier),
		fields?: ApplyCouponToCartOutputFieldPolicy,
	},
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	AssetUpload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetUploadKeySpecifier | (() => undefined | AssetUploadKeySpecifier),
		fields?: AssetUploadFieldPolicy,
	},
	AssetUploadError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetUploadErrorKeySpecifier | (() => undefined | AssetUploadErrorKeySpecifier),
		fields?: AssetUploadErrorFieldPolicy,
	},
	AssetUploadRequestPostData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetUploadRequestPostDataKeySpecifier | (() => undefined | AssetUploadRequestPostDataKeySpecifier),
		fields?: AssetUploadRequestPostDataFieldPolicy,
	},
	AssignCompareListToCustomerOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignCompareListToCustomerOutputKeySpecifier | (() => undefined | AssignCompareListToCustomerOutputKeySpecifier),
		fields?: AssignCompareListToCustomerOutputFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AttributeMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeMetadataKeySpecifier | (() => undefined | AttributeMetadataKeySpecifier),
		fields?: AttributeMetadataFieldPolicy,
	},
	AttributeMetadataError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeMetadataErrorKeySpecifier | (() => undefined | AttributeMetadataErrorKeySpecifier),
		fields?: AttributeMetadataErrorFieldPolicy,
	},
	AttributeOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeOptionKeySpecifier | (() => undefined | AttributeOptionKeySpecifier),
		fields?: AttributeOptionFieldPolicy,
	},
	AttributeOptionMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeOptionMetadataKeySpecifier | (() => undefined | AttributeOptionMetadataKeySpecifier),
		fields?: AttributeOptionMetadataFieldPolicy,
	},
	AttributeSelectedOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeSelectedOptionKeySpecifier | (() => undefined | AttributeSelectedOptionKeySpecifier),
		fields?: AttributeSelectedOptionFieldPolicy,
	},
	AttributeSelectedOptionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeSelectedOptionInterfaceKeySpecifier | (() => undefined | AttributeSelectedOptionInterfaceKeySpecifier),
		fields?: AttributeSelectedOptionInterfaceFieldPolicy,
	},
	AttributeSelectedOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeSelectedOptionsKeySpecifier | (() => undefined | AttributeSelectedOptionsKeySpecifier),
		fields?: AttributeSelectedOptionsFieldPolicy,
	},
	AttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueKeySpecifier | (() => undefined | AttributeValueKeySpecifier),
		fields?: AttributeValueFieldPolicy,
	},
	AttributeValueInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueInterfaceKeySpecifier | (() => undefined | AttributeValueInterfaceKeySpecifier),
		fields?: AttributeValueInterfaceFieldPolicy,
	},
	AttributesFormOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributesFormOutputKeySpecifier | (() => undefined | AttributesFormOutputKeySpecifier),
		fields?: AttributesFormOutputFieldPolicy,
	},
	AttributesMetadataOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributesMetadataOutputKeySpecifier | (() => undefined | AttributesMetadataOutputKeySpecifier),
		fields?: AttributesMetadataOutputFieldPolicy,
	},
	AvailablePaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailablePaymentMethodKeySpecifier | (() => undefined | AvailablePaymentMethodKeySpecifier),
		fields?: AvailablePaymentMethodFieldPolicy,
	},
	AvailableShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailableShippingMethodKeySpecifier | (() => undefined | AvailableShippingMethodKeySpecifier),
		fields?: AvailableShippingMethodFieldPolicy,
	},
	BillingCartAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingCartAddressKeySpecifier | (() => undefined | BillingCartAddressKeySpecifier),
		fields?: BillingCartAddressFieldPolicy,
	},
	Breadcrumb?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BreadcrumbKeySpecifier | (() => undefined | BreadcrumbKeySpecifier),
		fields?: BreadcrumbFieldPolicy,
	},
	BundleCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleCartItemKeySpecifier | (() => undefined | BundleCartItemKeySpecifier),
		fields?: BundleCartItemFieldPolicy,
	},
	BundleCreditMemoItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleCreditMemoItemKeySpecifier | (() => undefined | BundleCreditMemoItemKeySpecifier),
		fields?: BundleCreditMemoItemFieldPolicy,
	},
	BundleInvoiceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleInvoiceItemKeySpecifier | (() => undefined | BundleInvoiceItemKeySpecifier),
		fields?: BundleInvoiceItemFieldPolicy,
	},
	BundleItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleItemKeySpecifier | (() => undefined | BundleItemKeySpecifier),
		fields?: BundleItemFieldPolicy,
	},
	BundleItemOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleItemOptionKeySpecifier | (() => undefined | BundleItemOptionKeySpecifier),
		fields?: BundleItemOptionFieldPolicy,
	},
	BundleOrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleOrderItemKeySpecifier | (() => undefined | BundleOrderItemKeySpecifier),
		fields?: BundleOrderItemFieldPolicy,
	},
	BundleProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleProductKeySpecifier | (() => undefined | BundleProductKeySpecifier),
		fields?: BundleProductFieldPolicy,
	},
	BundleShipmentItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleShipmentItemKeySpecifier | (() => undefined | BundleShipmentItemKeySpecifier),
		fields?: BundleShipmentItemFieldPolicy,
	},
	BundleWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleWishlistItemKeySpecifier | (() => undefined | BundleWishlistItemKeySpecifier),
		fields?: BundleWishlistItemFieldPolicy,
	},
	ButtonStyles?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ButtonStylesKeySpecifier | (() => undefined | ButtonStylesKeySpecifier),
		fields?: ButtonStylesFieldPolicy,
	},
	CancelOrderOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancelOrderOutputKeySpecifier | (() => undefined | CancelOrderOutputKeySpecifier),
		fields?: CancelOrderOutputFieldPolicy,
	},
	CancellationReason?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancellationReasonKeySpecifier | (() => undefined | CancellationReasonKeySpecifier),
		fields?: CancellationReasonFieldPolicy,
	},
	Card?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CardKeySpecifier | (() => undefined | CardKeySpecifier),
		fields?: CardFieldPolicy,
	},
	CardBin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CardBinKeySpecifier | (() => undefined | CardBinKeySpecifier),
		fields?: CardBinFieldPolicy,
	},
	CardPaymentSourceOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CardPaymentSourceOutputKeySpecifier | (() => undefined | CardPaymentSourceOutputKeySpecifier),
		fields?: CardPaymentSourceOutputFieldPolicy,
	},
	Cart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		fields?: CartFieldPolicy,
	},
	CartAddressCountry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddressCountryKeySpecifier | (() => undefined | CartAddressCountryKeySpecifier),
		fields?: CartAddressCountryFieldPolicy,
	},
	CartAddressInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddressInterfaceKeySpecifier | (() => undefined | CartAddressInterfaceKeySpecifier),
		fields?: CartAddressInterfaceFieldPolicy,
	},
	CartAddressRegion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddressRegionKeySpecifier | (() => undefined | CartAddressRegionKeySpecifier),
		fields?: CartAddressRegionFieldPolicy,
	},
	CartDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDiscountKeySpecifier | (() => undefined | CartDiscountKeySpecifier),
		fields?: CartDiscountFieldPolicy,
	},
	CartItemError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemErrorKeySpecifier | (() => undefined | CartItemErrorKeySpecifier),
		fields?: CartItemErrorFieldPolicy,
	},
	CartItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemInterfaceKeySpecifier | (() => undefined | CartItemInterfaceKeySpecifier),
		fields?: CartItemInterfaceFieldPolicy,
	},
	CartItemPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemPricesKeySpecifier | (() => undefined | CartItemPricesKeySpecifier),
		fields?: CartItemPricesFieldPolicy,
	},
	CartItemQuantity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemQuantityKeySpecifier | (() => undefined | CartItemQuantityKeySpecifier),
		fields?: CartItemQuantityFieldPolicy,
	},
	CartItemSelectedOptionValuePrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemSelectedOptionValuePriceKeySpecifier | (() => undefined | CartItemSelectedOptionValuePriceKeySpecifier),
		fields?: CartItemSelectedOptionValuePriceFieldPolicy,
	},
	CartItems?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemsKeySpecifier | (() => undefined | CartItemsKeySpecifier),
		fields?: CartItemsFieldPolicy,
	},
	CartPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartPricesKeySpecifier | (() => undefined | CartPricesKeySpecifier),
		fields?: CartPricesFieldPolicy,
	},
	CartTaxItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartTaxItemKeySpecifier | (() => undefined | CartTaxItemKeySpecifier),
		fields?: CartTaxItemFieldPolicy,
	},
	CartUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartUserInputErrorKeySpecifier | (() => undefined | CartUserInputErrorKeySpecifier),
		fields?: CartUserInputErrorFieldPolicy,
	},
	CatalogAttributeMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatalogAttributeMetadataKeySpecifier | (() => undefined | CatalogAttributeMetadataKeySpecifier),
		fields?: CatalogAttributeMetadataFieldPolicy,
	},
	CategoryInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryInterfaceKeySpecifier | (() => undefined | CategoryInterfaceKeySpecifier),
		fields?: CategoryInterfaceFieldPolicy,
	},
	CategoryProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryProductsKeySpecifier | (() => undefined | CategoryProductsKeySpecifier),
		fields?: CategoryProductsFieldPolicy,
	},
	CategoryResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryResultKeySpecifier | (() => undefined | CategoryResultKeySpecifier),
		fields?: CategoryResultFieldPolicy,
	},
	CategoryTree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTreeKeySpecifier | (() => undefined | CategoryTreeKeySpecifier),
		fields?: CategoryTreeFieldPolicy,
	},
	CheckoutAgreement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAgreementKeySpecifier | (() => undefined | CheckoutAgreementKeySpecifier),
		fields?: CheckoutAgreementFieldPolicy,
	},
	CheckoutUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutUserInputErrorKeySpecifier | (() => undefined | CheckoutUserInputErrorKeySpecifier),
		fields?: CheckoutUserInputErrorFieldPolicy,
	},
	CmsBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsBlockKeySpecifier | (() => undefined | CmsBlockKeySpecifier),
		fields?: CmsBlockFieldPolicy,
	},
	CmsBlocks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsBlocksKeySpecifier | (() => undefined | CmsBlocksKeySpecifier),
		fields?: CmsBlocksFieldPolicy,
	},
	CmsPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CmsPageKeySpecifier | (() => undefined | CmsPageKeySpecifier),
		fields?: CmsPageFieldPolicy,
	},
	ColorSwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ColorSwatchDataKeySpecifier | (() => undefined | ColorSwatchDataKeySpecifier),
		fields?: ColorSwatchDataFieldPolicy,
	},
	ComparableAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComparableAttributeKeySpecifier | (() => undefined | ComparableAttributeKeySpecifier),
		fields?: ComparableAttributeFieldPolicy,
	},
	ComparableItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComparableItemKeySpecifier | (() => undefined | ComparableItemKeySpecifier),
		fields?: ComparableItemFieldPolicy,
	},
	CompareList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompareListKeySpecifier | (() => undefined | CompareListKeySpecifier),
		fields?: CompareListFieldPolicy,
	},
	ComplexTextValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComplexTextValueKeySpecifier | (() => undefined | ComplexTextValueKeySpecifier),
		fields?: ComplexTextValueFieldPolicy,
	},
	ConditionAnd?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConditionAndKeySpecifier | (() => undefined | ConditionAndKeySpecifier),
		fields?: ConditionAndFieldPolicy,
	},
	ConditionNumber?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConditionNumberKeySpecifier | (() => undefined | ConditionNumberKeySpecifier),
		fields?: ConditionNumberFieldPolicy,
	},
	ConditionOr?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConditionOrKeySpecifier | (() => undefined | ConditionOrKeySpecifier),
		fields?: ConditionOrFieldPolicy,
	},
	ConditionText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConditionTextKeySpecifier | (() => undefined | ConditionTextKeySpecifier),
		fields?: ConditionTextFieldPolicy,
	},
	ConfigurableAttributeOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableAttributeOptionKeySpecifier | (() => undefined | ConfigurableAttributeOptionKeySpecifier),
		fields?: ConfigurableAttributeOptionFieldPolicy,
	},
	ConfigurableCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableCartItemKeySpecifier | (() => undefined | ConfigurableCartItemKeySpecifier),
		fields?: ConfigurableCartItemFieldPolicy,
	},
	ConfigurableOptionAvailableForSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableOptionAvailableForSelectionKeySpecifier | (() => undefined | ConfigurableOptionAvailableForSelectionKeySpecifier),
		fields?: ConfigurableOptionAvailableForSelectionFieldPolicy,
	},
	ConfigurableProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductKeySpecifier | (() => undefined | ConfigurableProductKeySpecifier),
		fields?: ConfigurableProductFieldPolicy,
	},
	ConfigurableProductOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionKeySpecifier | (() => undefined | ConfigurableProductOptionKeySpecifier),
		fields?: ConfigurableProductOptionFieldPolicy,
	},
	ConfigurableProductOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionValueKeySpecifier | (() => undefined | ConfigurableProductOptionValueKeySpecifier),
		fields?: ConfigurableProductOptionValueFieldPolicy,
	},
	ConfigurableProductOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionsKeySpecifier | (() => undefined | ConfigurableProductOptionsKeySpecifier),
		fields?: ConfigurableProductOptionsFieldPolicy,
	},
	ConfigurableProductOptionsSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionsSelectionKeySpecifier | (() => undefined | ConfigurableProductOptionsSelectionKeySpecifier),
		fields?: ConfigurableProductOptionsSelectionFieldPolicy,
	},
	ConfigurableProductOptionsValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableProductOptionsValuesKeySpecifier | (() => undefined | ConfigurableProductOptionsValuesKeySpecifier),
		fields?: ConfigurableProductOptionsValuesFieldPolicy,
	},
	ConfigurableVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableVariantKeySpecifier | (() => undefined | ConfigurableVariantKeySpecifier),
		fields?: ConfigurableVariantFieldPolicy,
	},
	ConfigurableWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurableWishlistItemKeySpecifier | (() => undefined | ConfigurableWishlistItemKeySpecifier),
		fields?: ConfigurableWishlistItemFieldPolicy,
	},
	ContactUsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactUsOutputKeySpecifier | (() => undefined | ContactUsOutputKeySpecifier),
		fields?: ContactUsOutputFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CreateGuestCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateGuestCartOutputKeySpecifier | (() => undefined | CreateGuestCartOutputKeySpecifier),
		fields?: CreateGuestCartOutputFieldPolicy,
	},
	CreatePayflowProTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePayflowProTokenOutputKeySpecifier | (() => undefined | CreatePayflowProTokenOutputKeySpecifier),
		fields?: CreatePayflowProTokenOutputFieldPolicy,
	},
	CreatePaymentOrderOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePaymentOrderOutputKeySpecifier | (() => undefined | CreatePaymentOrderOutputKeySpecifier),
		fields?: CreatePaymentOrderOutputFieldPolicy,
	},
	CreateProductReviewOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProductReviewOutputKeySpecifier | (() => undefined | CreateProductReviewOutputKeySpecifier),
		fields?: CreateProductReviewOutputFieldPolicy,
	},
	CreateVaultCardPaymentTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateVaultCardPaymentTokenOutputKeySpecifier | (() => undefined | CreateVaultCardPaymentTokenOutputKeySpecifier),
		fields?: CreateVaultCardPaymentTokenOutputFieldPolicy,
	},
	CreateVaultCardSetupTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateVaultCardSetupTokenOutputKeySpecifier | (() => undefined | CreateVaultCardSetupTokenOutputKeySpecifier),
		fields?: CreateVaultCardSetupTokenOutputFieldPolicy,
	},
	CreditMemo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoKeySpecifier | (() => undefined | CreditMemoKeySpecifier),
		fields?: CreditMemoFieldPolicy,
	},
	CreditMemoItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoItemKeySpecifier | (() => undefined | CreditMemoItemKeySpecifier),
		fields?: CreditMemoItemFieldPolicy,
	},
	CreditMemoItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoItemInterfaceKeySpecifier | (() => undefined | CreditMemoItemInterfaceKeySpecifier),
		fields?: CreditMemoItemInterfaceFieldPolicy,
	},
	CreditMemoTotal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditMemoTotalKeySpecifier | (() => undefined | CreditMemoTotalKeySpecifier),
		fields?: CreditMemoTotalFieldPolicy,
	},
	Currency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrencyKeySpecifier | (() => undefined | CurrencyKeySpecifier),
		fields?: CurrencyFieldPolicy,
	},
	CurrentCartId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentCartIdKeySpecifier | (() => undefined | CurrentCartIdKeySpecifier),
		fields?: CurrentCartIdFieldPolicy,
	},
	CurrentCompareUid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentCompareUidKeySpecifier | (() => undefined | CurrentCompareUidKeySpecifier),
		fields?: CurrentCompareUidFieldPolicy,
	},
	CustomAttributeMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomAttributeMetadataKeySpecifier | (() => undefined | CustomAttributeMetadataKeySpecifier),
		fields?: CustomAttributeMetadataFieldPolicy,
	},
	CustomAttributeMetadataInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomAttributeMetadataInterfaceKeySpecifier | (() => undefined | CustomAttributeMetadataInterfaceKeySpecifier),
		fields?: CustomAttributeMetadataInterfaceFieldPolicy,
	},
	CustomAttributeOptionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomAttributeOptionInterfaceKeySpecifier | (() => undefined | CustomAttributeOptionInterfaceKeySpecifier),
		fields?: CustomAttributeOptionInterfaceFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	CustomerAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressKeySpecifier | (() => undefined | CustomerAddressKeySpecifier),
		fields?: CustomerAddressFieldPolicy,
	},
	CustomerAddressAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressAttributeKeySpecifier | (() => undefined | CustomerAddressAttributeKeySpecifier),
		fields?: CustomerAddressAttributeFieldPolicy,
	},
	CustomerAddressRegion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressRegionKeySpecifier | (() => undefined | CustomerAddressRegionKeySpecifier),
		fields?: CustomerAddressRegionFieldPolicy,
	},
	CustomerAttributeMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAttributeMetadataKeySpecifier | (() => undefined | CustomerAttributeMetadataKeySpecifier),
		fields?: CustomerAttributeMetadataFieldPolicy,
	},
	CustomerDownloadableProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDownloadableProductKeySpecifier | (() => undefined | CustomerDownloadableProductKeySpecifier),
		fields?: CustomerDownloadableProductFieldPolicy,
	},
	CustomerDownloadableProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDownloadableProductsKeySpecifier | (() => undefined | CustomerDownloadableProductsKeySpecifier),
		fields?: CustomerDownloadableProductsFieldPolicy,
	},
	CustomerOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerOrderKeySpecifier | (() => undefined | CustomerOrderKeySpecifier),
		fields?: CustomerOrderFieldPolicy,
	},
	CustomerOrders?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerOrdersKeySpecifier | (() => undefined | CustomerOrdersKeySpecifier),
		fields?: CustomerOrdersFieldPolicy,
	},
	CustomerOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerOutputKeySpecifier | (() => undefined | CustomerOutputKeySpecifier),
		fields?: CustomerOutputFieldPolicy,
	},
	CustomerPaymentTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerPaymentTokensKeySpecifier | (() => undefined | CustomerPaymentTokensKeySpecifier),
		fields?: CustomerPaymentTokensFieldPolicy,
	},
	CustomerToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerTokenKeySpecifier | (() => undefined | CustomerTokenKeySpecifier),
		fields?: CustomerTokenFieldPolicy,
	},
	CustomizableAreaOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableAreaOptionKeySpecifier | (() => undefined | CustomizableAreaOptionKeySpecifier),
		fields?: CustomizableAreaOptionFieldPolicy,
	},
	CustomizableAreaValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableAreaValueKeySpecifier | (() => undefined | CustomizableAreaValueKeySpecifier),
		fields?: CustomizableAreaValueFieldPolicy,
	},
	CustomizableCheckboxOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableCheckboxOptionKeySpecifier | (() => undefined | CustomizableCheckboxOptionKeySpecifier),
		fields?: CustomizableCheckboxOptionFieldPolicy,
	},
	CustomizableCheckboxValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableCheckboxValueKeySpecifier | (() => undefined | CustomizableCheckboxValueKeySpecifier),
		fields?: CustomizableCheckboxValueFieldPolicy,
	},
	CustomizableDateOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDateOptionKeySpecifier | (() => undefined | CustomizableDateOptionKeySpecifier),
		fields?: CustomizableDateOptionFieldPolicy,
	},
	CustomizableDateValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDateValueKeySpecifier | (() => undefined | CustomizableDateValueKeySpecifier),
		fields?: CustomizableDateValueFieldPolicy,
	},
	CustomizableDropDownOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDropDownOptionKeySpecifier | (() => undefined | CustomizableDropDownOptionKeySpecifier),
		fields?: CustomizableDropDownOptionFieldPolicy,
	},
	CustomizableDropDownValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableDropDownValueKeySpecifier | (() => undefined | CustomizableDropDownValueKeySpecifier),
		fields?: CustomizableDropDownValueFieldPolicy,
	},
	CustomizableFieldOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFieldOptionKeySpecifier | (() => undefined | CustomizableFieldOptionKeySpecifier),
		fields?: CustomizableFieldOptionFieldPolicy,
	},
	CustomizableFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFieldValueKeySpecifier | (() => undefined | CustomizableFieldValueKeySpecifier),
		fields?: CustomizableFieldValueFieldPolicy,
	},
	CustomizableFileOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFileOptionKeySpecifier | (() => undefined | CustomizableFileOptionKeySpecifier),
		fields?: CustomizableFileOptionFieldPolicy,
	},
	CustomizableFileValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableFileValueKeySpecifier | (() => undefined | CustomizableFileValueKeySpecifier),
		fields?: CustomizableFileValueFieldPolicy,
	},
	CustomizableMultipleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableMultipleOptionKeySpecifier | (() => undefined | CustomizableMultipleOptionKeySpecifier),
		fields?: CustomizableMultipleOptionFieldPolicy,
	},
	CustomizableMultipleValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableMultipleValueKeySpecifier | (() => undefined | CustomizableMultipleValueKeySpecifier),
		fields?: CustomizableMultipleValueFieldPolicy,
	},
	CustomizableOptionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableOptionInterfaceKeySpecifier | (() => undefined | CustomizableOptionInterfaceKeySpecifier),
		fields?: CustomizableOptionInterfaceFieldPolicy,
	},
	CustomizableProductInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableProductInterfaceKeySpecifier | (() => undefined | CustomizableProductInterfaceKeySpecifier),
		fields?: CustomizableProductInterfaceFieldPolicy,
	},
	CustomizableRadioOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableRadioOptionKeySpecifier | (() => undefined | CustomizableRadioOptionKeySpecifier),
		fields?: CustomizableRadioOptionFieldPolicy,
	},
	CustomizableRadioValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomizableRadioValueKeySpecifier | (() => undefined | CustomizableRadioValueKeySpecifier),
		fields?: CustomizableRadioValueFieldPolicy,
	},
	DeleteCompareListOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCompareListOutputKeySpecifier | (() => undefined | DeleteCompareListOutputKeySpecifier),
		fields?: DeleteCompareListOutputFieldPolicy,
	},
	DeletePaymentTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePaymentTokenOutputKeySpecifier | (() => undefined | DeletePaymentTokenOutputKeySpecifier),
		fields?: DeletePaymentTokenOutputFieldPolicy,
	},
	Discount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountKeySpecifier | (() => undefined | DiscountKeySpecifier),
		fields?: DiscountFieldPolicy,
	},
	DownloadableCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableCartItemKeySpecifier | (() => undefined | DownloadableCartItemKeySpecifier),
		fields?: DownloadableCartItemFieldPolicy,
	},
	DownloadableCreditMemoItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableCreditMemoItemKeySpecifier | (() => undefined | DownloadableCreditMemoItemKeySpecifier),
		fields?: DownloadableCreditMemoItemFieldPolicy,
	},
	DownloadableInvoiceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableInvoiceItemKeySpecifier | (() => undefined | DownloadableInvoiceItemKeySpecifier),
		fields?: DownloadableInvoiceItemFieldPolicy,
	},
	DownloadableItemsLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableItemsLinksKeySpecifier | (() => undefined | DownloadableItemsLinksKeySpecifier),
		fields?: DownloadableItemsLinksFieldPolicy,
	},
	DownloadableOrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableOrderItemKeySpecifier | (() => undefined | DownloadableOrderItemKeySpecifier),
		fields?: DownloadableOrderItemFieldPolicy,
	},
	DownloadableProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableProductKeySpecifier | (() => undefined | DownloadableProductKeySpecifier),
		fields?: DownloadableProductFieldPolicy,
	},
	DownloadableProductLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableProductLinksKeySpecifier | (() => undefined | DownloadableProductLinksKeySpecifier),
		fields?: DownloadableProductLinksFieldPolicy,
	},
	DownloadableProductSamples?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableProductSamplesKeySpecifier | (() => undefined | DownloadableProductSamplesKeySpecifier),
		fields?: DownloadableProductSamplesFieldPolicy,
	},
	DownloadableWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableWishlistItemKeySpecifier | (() => undefined | DownloadableWishlistItemKeySpecifier),
		fields?: DownloadableWishlistItemFieldPolicy,
	},
	DynamicRow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DynamicRowKeySpecifier | (() => undefined | DynamicRowKeySpecifier),
		fields?: DynamicRowFieldPolicy,
	},
	DynamicRowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DynamicRowConnectionKeySpecifier | (() => undefined | DynamicRowConnectionKeySpecifier),
		fields?: DynamicRowConnectionFieldPolicy,
	},
	DynamicRowEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DynamicRowEdgeKeySpecifier | (() => undefined | DynamicRowEdgeKeySpecifier),
		fields?: DynamicRowEdgeFieldPolicy,
	},
	Entity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityKeySpecifier | (() => undefined | EntityKeySpecifier),
		fields?: EntityFieldPolicy,
	},
	EntityUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityUrlKeySpecifier | (() => undefined | EntityUrlKeySpecifier),
		fields?: EntityUrlFieldPolicy,
	},
	ErrorInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorInterfaceKeySpecifier | (() => undefined | ErrorInterfaceKeySpecifier),
		fields?: ErrorInterfaceFieldPolicy,
	},
	EstimateTotalsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EstimateTotalsOutputKeySpecifier | (() => undefined | EstimateTotalsOutputKeySpecifier),
		fields?: EstimateTotalsOutputFieldPolicy,
	},
	ExchangeRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExchangeRateKeySpecifier | (() => undefined | ExchangeRateKeySpecifier),
		fields?: ExchangeRateFieldPolicy,
	},
	FixedProductTax?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FixedProductTaxKeySpecifier | (() => undefined | FixedProductTaxKeySpecifier),
		fields?: FixedProductTaxFieldPolicy,
	},
	Footer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooterKeySpecifier | (() => undefined | FooterKeySpecifier),
		fields?: FooterFieldPolicy,
	},
	FooterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooterConnectionKeySpecifier | (() => undefined | FooterConnectionKeySpecifier),
		fields?: FooterConnectionFieldPolicy,
	},
	FooterEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooterEdgeKeySpecifier | (() => undefined | FooterEdgeKeySpecifier),
		fields?: FooterEdgeFieldPolicy,
	},
	GenerateCustomerTokenAsAdminOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenerateCustomerTokenAsAdminOutputKeySpecifier | (() => undefined | GenerateCustomerTokenAsAdminOutputKeySpecifier),
		fields?: GenerateCustomerTokenAsAdminOutputFieldPolicy,
	},
	GetPaymentSDKOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetPaymentSDKOutputKeySpecifier | (() => undefined | GetPaymentSDKOutputKeySpecifier),
		fields?: GetPaymentSDKOutputFieldPolicy,
	},
	GiftMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftMessageKeySpecifier | (() => undefined | GiftMessageKeySpecifier),
		fields?: GiftMessageFieldPolicy,
	},
	GooglePayButtonStyles?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GooglePayButtonStylesKeySpecifier | (() => undefined | GooglePayButtonStylesKeySpecifier),
		fields?: GooglePayButtonStylesFieldPolicy,
	},
	GooglePayConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GooglePayConfigKeySpecifier | (() => undefined | GooglePayConfigKeySpecifier),
		fields?: GooglePayConfigFieldPolicy,
	},
	GroupedProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupedProductKeySpecifier | (() => undefined | GroupedProductKeySpecifier),
		fields?: GroupedProductFieldPolicy,
	},
	GroupedProductItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupedProductItemKeySpecifier | (() => undefined | GroupedProductItemKeySpecifier),
		fields?: GroupedProductItemFieldPolicy,
	},
	GroupedProductWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupedProductWishlistItemKeySpecifier | (() => undefined | GroupedProductWishlistItemKeySpecifier),
		fields?: GroupedProductWishlistItemFieldPolicy,
	},
	HostedFieldsConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HostedFieldsConfigKeySpecifier | (() => undefined | HostedFieldsConfigKeySpecifier),
		fields?: HostedFieldsConfigFieldPolicy,
	},
	HostedProUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HostedProUrlKeySpecifier | (() => undefined | HostedProUrlKeySpecifier),
		fields?: HostedProUrlFieldPolicy,
	},
	HttpQueryParameter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HttpQueryParameterKeySpecifier | (() => undefined | HttpQueryParameterKeySpecifier),
		fields?: HttpQueryParameterFieldPolicy,
	},
	ImageSwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageSwatchDataKeySpecifier | (() => undefined | ImageSwatchDataKeySpecifier),
		fields?: ImageSwatchDataFieldPolicy,
	},
	InternalError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InternalErrorKeySpecifier | (() => undefined | InternalErrorKeySpecifier),
		fields?: InternalErrorFieldPolicy,
	},
	Invoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceKeySpecifier | (() => undefined | InvoiceKeySpecifier),
		fields?: InvoiceFieldPolicy,
	},
	InvoiceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceItemKeySpecifier | (() => undefined | InvoiceItemKeySpecifier),
		fields?: InvoiceItemFieldPolicy,
	},
	InvoiceItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceItemInterfaceKeySpecifier | (() => undefined | InvoiceItemInterfaceKeySpecifier),
		fields?: InvoiceItemInterfaceFieldPolicy,
	},
	InvoiceTotal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceTotalKeySpecifier | (() => undefined | InvoiceTotalKeySpecifier),
		fields?: InvoiceTotalFieldPolicy,
	},
	IsEmailAvailableOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IsEmailAvailableOutputKeySpecifier | (() => undefined | IsEmailAvailableOutputKeySpecifier),
		fields?: IsEmailAvailableOutputFieldPolicy,
	},
	ItemSelectedBundleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemSelectedBundleOptionKeySpecifier | (() => undefined | ItemSelectedBundleOptionKeySpecifier),
		fields?: ItemSelectedBundleOptionFieldPolicy,
	},
	ItemSelectedBundleOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemSelectedBundleOptionValueKeySpecifier | (() => undefined | ItemSelectedBundleOptionValueKeySpecifier),
		fields?: ItemSelectedBundleOptionValueFieldPolicy,
	},
	KeyValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValueKeySpecifier | (() => undefined | KeyValueKeySpecifier),
		fields?: KeyValueFieldPolicy,
	},
	LayerFilter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LayerFilterKeySpecifier | (() => undefined | LayerFilterKeySpecifier),
		fields?: LayerFilterFieldPolicy,
	},
	LayerFilterItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LayerFilterItemKeySpecifier | (() => undefined | LayerFilterItemKeySpecifier),
		fields?: LayerFilterItemFieldPolicy,
	},
	LayerFilterItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LayerFilterItemInterfaceKeySpecifier | (() => undefined | LayerFilterItemInterfaceKeySpecifier),
		fields?: LayerFilterItemInterfaceFieldPolicy,
	},
	M2RestCompanyDataCompanyCustomerInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | M2RestCompanyDataCompanyCustomerInterfaceKeySpecifier | (() => undefined | M2RestCompanyDataCompanyCustomerInterfaceKeySpecifier),
		fields?: M2RestCompanyDataCompanyCustomerInterfaceFieldPolicy,
	},
	M2RestCustomerDataAddressInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | M2RestCustomerDataAddressInterfaceKeySpecifier | (() => undefined | M2RestCustomerDataAddressInterfaceKeySpecifier),
		fields?: M2RestCustomerDataAddressInterfaceFieldPolicy,
	},
	M2RestCustomerDataCustomerExtensionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | M2RestCustomerDataCustomerExtensionInterfaceKeySpecifier | (() => undefined | M2RestCustomerDataCustomerExtensionInterfaceKeySpecifier),
		fields?: M2RestCustomerDataCustomerExtensionInterfaceFieldPolicy,
	},
	M2RestCustomerDataCustomerInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | M2RestCustomerDataCustomerInterfaceKeySpecifier | (() => undefined | M2RestCustomerDataCustomerInterfaceKeySpecifier),
		fields?: M2RestCustomerDataCustomerInterfaceFieldPolicy,
	},
	M2RestCustomerDataRegionInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | M2RestCustomerDataRegionInterfaceKeySpecifier | (() => undefined | M2RestCustomerDataRegionInterfaceKeySpecifier),
		fields?: M2RestCustomerDataRegionInterfaceFieldPolicy,
	},
	M2RestFrameworkAttributeInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | M2RestFrameworkAttributeInterfaceKeySpecifier | (() => undefined | M2RestFrameworkAttributeInterfaceKeySpecifier),
		fields?: M2RestFrameworkAttributeInterfaceFieldPolicy,
	},
	MediaGalleryEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaGalleryEntryKeySpecifier | (() => undefined | MediaGalleryEntryKeySpecifier),
		fields?: MediaGalleryEntryFieldPolicy,
	},
	MediaGalleryInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaGalleryInterfaceKeySpecifier | (() => undefined | MediaGalleryInterfaceKeySpecifier),
		fields?: MediaGalleryInterfaceFieldPolicy,
	},
	MessageStyleLogo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageStyleLogoKeySpecifier | (() => undefined | MessageStyleLogoKeySpecifier),
		fields?: MessageStyleLogoFieldPolicy,
	},
	MessageStyles?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageStylesKeySpecifier | (() => undefined | MessageStylesKeySpecifier),
		fields?: MessageStylesFieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NoSuchEntityUidError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoSuchEntityUidErrorKeySpecifier | (() => undefined | NoSuchEntityUidErrorKeySpecifier),
		fields?: NoSuchEntityUidErrorFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderAddressKeySpecifier | (() => undefined | OrderAddressKeySpecifier),
		fields?: OrderAddressFieldPolicy,
	},
	OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier),
		fields?: OrderItemFieldPolicy,
	},
	OrderItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemInterfaceKeySpecifier | (() => undefined | OrderItemInterfaceKeySpecifier),
		fields?: OrderItemInterfaceFieldPolicy,
	},
	OrderItemOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemOptionKeySpecifier | (() => undefined | OrderItemOptionKeySpecifier),
		fields?: OrderItemOptionFieldPolicy,
	},
	OrderPaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderPaymentMethodKeySpecifier | (() => undefined | OrderPaymentMethodKeySpecifier),
		fields?: OrderPaymentMethodFieldPolicy,
	},
	OrderShipment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderShipmentKeySpecifier | (() => undefined | OrderShipmentKeySpecifier),
		fields?: OrderShipmentFieldPolicy,
	},
	OrderTotal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderTotalKeySpecifier | (() => undefined | OrderTotalKeySpecifier),
		fields?: OrderTotalFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageConnectionKeySpecifier | (() => undefined | PageConnectionKeySpecifier),
		fields?: PageConnectionFieldPolicy,
	},
	PageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageEdgeKeySpecifier | (() => undefined | PageEdgeKeySpecifier),
		fields?: PageEdgeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PageLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLinkKeySpecifier | (() => undefined | PageLinkKeySpecifier),
		fields?: PageLinkFieldPolicy,
	},
	PageLinkConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLinkConnectionKeySpecifier | (() => undefined | PageLinkConnectionKeySpecifier),
		fields?: PageLinkConnectionFieldPolicy,
	},
	PageLinkEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLinkEdgeKeySpecifier | (() => undefined | PageLinkEdgeKeySpecifier),
		fields?: PageLinkEdgeFieldPolicy,
	},
	PayflowLinkToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayflowLinkTokenKeySpecifier | (() => undefined | PayflowLinkTokenKeySpecifier),
		fields?: PayflowLinkTokenFieldPolicy,
	},
	PayflowProResponseOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayflowProResponseOutputKeySpecifier | (() => undefined | PayflowProResponseOutputKeySpecifier),
		fields?: PayflowProResponseOutputFieldPolicy,
	},
	PayflowProToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayflowProTokenKeySpecifier | (() => undefined | PayflowProTokenKeySpecifier),
		fields?: PayflowProTokenFieldPolicy,
	},
	PaymentCommonConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCommonConfigKeySpecifier | (() => undefined | PaymentCommonConfigKeySpecifier),
		fields?: PaymentCommonConfigFieldPolicy,
	},
	PaymentConfigItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentConfigItemKeySpecifier | (() => undefined | PaymentConfigItemKeySpecifier),
		fields?: PaymentConfigItemFieldPolicy,
	},
	PaymentConfigOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentConfigOutputKeySpecifier | (() => undefined | PaymentConfigOutputKeySpecifier),
		fields?: PaymentConfigOutputFieldPolicy,
	},
	PaymentOrderOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentOrderOutputKeySpecifier | (() => undefined | PaymentOrderOutputKeySpecifier),
		fields?: PaymentOrderOutputFieldPolicy,
	},
	PaymentSDKParamsItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSDKParamsItemKeySpecifier | (() => undefined | PaymentSDKParamsItemKeySpecifier),
		fields?: PaymentSDKParamsItemFieldPolicy,
	},
	PaymentSourceDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSourceDetailsKeySpecifier | (() => undefined | PaymentSourceDetailsKeySpecifier),
		fields?: PaymentSourceDetailsFieldPolicy,
	},
	PaymentSourceOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSourceOutputKeySpecifier | (() => undefined | PaymentSourceOutputKeySpecifier),
		fields?: PaymentSourceOutputFieldPolicy,
	},
	PaymentToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentTokenKeySpecifier | (() => undefined | PaymentTokenKeySpecifier),
		fields?: PaymentTokenFieldPolicy,
	},
	PaypalExpressToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaypalExpressTokenKeySpecifier | (() => undefined | PaypalExpressTokenKeySpecifier),
		fields?: PaypalExpressTokenFieldPolicy,
	},
	PaypalExpressTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaypalExpressTokenOutputKeySpecifier | (() => undefined | PaypalExpressTokenOutputKeySpecifier),
		fields?: PaypalExpressTokenOutputFieldPolicy,
	},
	PaypalExpressUrlList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaypalExpressUrlListKeySpecifier | (() => undefined | PaypalExpressUrlListKeySpecifier),
		fields?: PaypalExpressUrlListFieldPolicy,
	},
	PhysicalProductInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhysicalProductInterfaceKeySpecifier | (() => undefined | PhysicalProductInterfaceKeySpecifier),
		fields?: PhysicalProductInterfaceFieldPolicy,
	},
	PickupLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PickupLocationKeySpecifier | (() => undefined | PickupLocationKeySpecifier),
		fields?: PickupLocationFieldPolicy,
	},
	PickupLocations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PickupLocationsKeySpecifier | (() => undefined | PickupLocationsKeySpecifier),
		fields?: PickupLocationsFieldPolicy,
	},
	PlaceOrderError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceOrderErrorKeySpecifier | (() => undefined | PlaceOrderErrorKeySpecifier),
		fields?: PlaceOrderErrorFieldPolicy,
	},
	PlaceOrderOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceOrderOutputKeySpecifier | (() => undefined | PlaceOrderOutputKeySpecifier),
		fields?: PlaceOrderOutputFieldPolicy,
	},
	Price?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceKeySpecifier | (() => undefined | PriceKeySpecifier),
		fields?: PriceFieldPolicy,
	},
	PriceAdjustment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceAdjustmentKeySpecifier | (() => undefined | PriceAdjustmentKeySpecifier),
		fields?: PriceAdjustmentFieldPolicy,
	},
	PriceDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceDetailsKeySpecifier | (() => undefined | PriceDetailsKeySpecifier),
		fields?: PriceDetailsFieldPolicy,
	},
	PriceRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceRangeKeySpecifier | (() => undefined | PriceRangeKeySpecifier),
		fields?: PriceRangeFieldPolicy,
	},
	ProductAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductAttributeKeySpecifier | (() => undefined | ProductAttributeKeySpecifier),
		fields?: ProductAttributeFieldPolicy,
	},
	ProductCustomAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCustomAttributesKeySpecifier | (() => undefined | ProductCustomAttributesKeySpecifier),
		fields?: ProductCustomAttributesFieldPolicy,
	},
	ProductDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDiscountKeySpecifier | (() => undefined | ProductDiscountKeySpecifier),
		fields?: ProductDiscountFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	ProductInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductInterfaceKeySpecifier | (() => undefined | ProductInterfaceKeySpecifier),
		fields?: ProductInterfaceFieldPolicy,
	},
	ProductLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLinksKeySpecifier | (() => undefined | ProductLinksKeySpecifier),
		fields?: ProductLinksFieldPolicy,
	},
	ProductLinksInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLinksInterfaceKeySpecifier | (() => undefined | ProductLinksInterfaceKeySpecifier),
		fields?: ProductLinksInterfaceFieldPolicy,
	},
	ProductMediaGalleryEntriesContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaGalleryEntriesContentKeySpecifier | (() => undefined | ProductMediaGalleryEntriesContentKeySpecifier),
		fields?: ProductMediaGalleryEntriesContentFieldPolicy,
	},
	ProductMediaGalleryEntriesVideoContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMediaGalleryEntriesVideoContentKeySpecifier | (() => undefined | ProductMediaGalleryEntriesVideoContentKeySpecifier),
		fields?: ProductMediaGalleryEntriesVideoContentFieldPolicy,
	},
	ProductPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPriceKeySpecifier | (() => undefined | ProductPriceKeySpecifier),
		fields?: ProductPriceFieldPolicy,
	},
	ProductPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPricesKeySpecifier | (() => undefined | ProductPricesKeySpecifier),
		fields?: ProductPricesFieldPolicy,
	},
	ProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewKeySpecifier | (() => undefined | ProductReviewKeySpecifier),
		fields?: ProductReviewFieldPolicy,
	},
	ProductReviewRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingKeySpecifier | (() => undefined | ProductReviewRatingKeySpecifier),
		fields?: ProductReviewRatingFieldPolicy,
	},
	ProductReviewRatingMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingMetadataKeySpecifier | (() => undefined | ProductReviewRatingMetadataKeySpecifier),
		fields?: ProductReviewRatingMetadataFieldPolicy,
	},
	ProductReviewRatingValueMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingValueMetadataKeySpecifier | (() => undefined | ProductReviewRatingValueMetadataKeySpecifier),
		fields?: ProductReviewRatingValueMetadataFieldPolicy,
	},
	ProductReviewRatingsMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewRatingsMetadataKeySpecifier | (() => undefined | ProductReviewRatingsMetadataKeySpecifier),
		fields?: ProductReviewRatingsMetadataFieldPolicy,
	},
	ProductReviews?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewsKeySpecifier | (() => undefined | ProductReviewsKeySpecifier),
		fields?: ProductReviewsFieldPolicy,
	},
	ProductTierPrices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTierPricesKeySpecifier | (() => undefined | ProductTierPricesKeySpecifier),
		fields?: ProductTierPricesFieldPolicy,
	},
	ProductVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVideoKeySpecifier | (() => undefined | ProductVideoKeySpecifier),
		fields?: ProductVideoFieldPolicy,
	},
	Products?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductsKeySpecifier | (() => undefined | ProductsKeySpecifier),
		fields?: ProductsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ReCaptchaConfigurationV3?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReCaptchaConfigurationV3KeySpecifier | (() => undefined | ReCaptchaConfigurationV3KeySpecifier),
		fields?: ReCaptchaConfigurationV3FieldPolicy,
	},
	RecentlyViewedProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecentlyViewedProductKeySpecifier | (() => undefined | RecentlyViewedProductKeySpecifier),
		fields?: RecentlyViewedProductFieldPolicy,
	},
	RecentlyViewedProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecentlyViewedProductsKeySpecifier | (() => undefined | RecentlyViewedProductsKeySpecifier),
		fields?: RecentlyViewedProductsFieldPolicy,
	},
	Region?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegionKeySpecifier | (() => undefined | RegionKeySpecifier),
		fields?: RegionFieldPolicy,
	},
	RemoveCouponFromCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveCouponFromCartOutputKeySpecifier | (() => undefined | RemoveCouponFromCartOutputKeySpecifier),
		fields?: RemoveCouponFromCartOutputFieldPolicy,
	},
	RemoveItemFromCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveItemFromCartOutputKeySpecifier | (() => undefined | RemoveItemFromCartOutputKeySpecifier),
		fields?: RemoveItemFromCartOutputFieldPolicy,
	},
	RemoveProductsFromWishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveProductsFromWishlistOutputKeySpecifier | (() => undefined | RemoveProductsFromWishlistOutputKeySpecifier),
		fields?: RemoveProductsFromWishlistOutputFieldPolicy,
	},
	ReorderItemsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReorderItemsOutputKeySpecifier | (() => undefined | ReorderItemsOutputKeySpecifier),
		fields?: ReorderItemsOutputFieldPolicy,
	},
	RevokeCustomerTokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeCustomerTokenOutputKeySpecifier | (() => undefined | RevokeCustomerTokenOutputKeySpecifier),
		fields?: RevokeCustomerTokenOutputFieldPolicy,
	},
	RichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RichTextKeySpecifier | (() => undefined | RichTextKeySpecifier),
		fields?: RichTextFieldPolicy,
	},
	RoutableInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoutableInterfaceKeySpecifier | (() => undefined | RoutableInterfaceKeySpecifier),
		fields?: RoutableInterfaceFieldPolicy,
	},
	RoutableUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoutableUrlKeySpecifier | (() => undefined | RoutableUrlKeySpecifier),
		fields?: RoutableUrlFieldPolicy,
	},
	RowBlogContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowBlogContentKeySpecifier | (() => undefined | RowBlogContentKeySpecifier),
		fields?: RowBlogContentFieldPolicy,
	},
	RowBlogContentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowBlogContentConnectionKeySpecifier | (() => undefined | RowBlogContentConnectionKeySpecifier),
		fields?: RowBlogContentConnectionFieldPolicy,
	},
	RowBlogContentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowBlogContentEdgeKeySpecifier | (() => undefined | RowBlogContentEdgeKeySpecifier),
		fields?: RowBlogContentEdgeFieldPolicy,
	},
	RowButtonLinkList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowButtonLinkListKeySpecifier | (() => undefined | RowButtonLinkListKeySpecifier),
		fields?: RowButtonLinkListFieldPolicy,
	},
	RowButtonLinkListConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowButtonLinkListConnectionKeySpecifier | (() => undefined | RowButtonLinkListConnectionKeySpecifier),
		fields?: RowButtonLinkListConnectionFieldPolicy,
	},
	RowButtonLinkListEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowButtonLinkListEdgeKeySpecifier | (() => undefined | RowButtonLinkListEdgeKeySpecifier),
		fields?: RowButtonLinkListEdgeFieldPolicy,
	},
	RowCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowCategoryKeySpecifier | (() => undefined | RowCategoryKeySpecifier),
		fields?: RowCategoryFieldPolicy,
	},
	RowCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowCategoryConnectionKeySpecifier | (() => undefined | RowCategoryConnectionKeySpecifier),
		fields?: RowCategoryConnectionFieldPolicy,
	},
	RowCategoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowCategoryEdgeKeySpecifier | (() => undefined | RowCategoryEdgeKeySpecifier),
		fields?: RowCategoryEdgeFieldPolicy,
	},
	RowColumnOne?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnOneKeySpecifier | (() => undefined | RowColumnOneKeySpecifier),
		fields?: RowColumnOneFieldPolicy,
	},
	RowColumnOneConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnOneConnectionKeySpecifier | (() => undefined | RowColumnOneConnectionKeySpecifier),
		fields?: RowColumnOneConnectionFieldPolicy,
	},
	RowColumnOneEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnOneEdgeKeySpecifier | (() => undefined | RowColumnOneEdgeKeySpecifier),
		fields?: RowColumnOneEdgeFieldPolicy,
	},
	RowColumnThree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnThreeKeySpecifier | (() => undefined | RowColumnThreeKeySpecifier),
		fields?: RowColumnThreeFieldPolicy,
	},
	RowColumnThreeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnThreeConnectionKeySpecifier | (() => undefined | RowColumnThreeConnectionKeySpecifier),
		fields?: RowColumnThreeConnectionFieldPolicy,
	},
	RowColumnThreeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnThreeEdgeKeySpecifier | (() => undefined | RowColumnThreeEdgeKeySpecifier),
		fields?: RowColumnThreeEdgeFieldPolicy,
	},
	RowColumnTwo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnTwoKeySpecifier | (() => undefined | RowColumnTwoKeySpecifier),
		fields?: RowColumnTwoFieldPolicy,
	},
	RowColumnTwoConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnTwoConnectionKeySpecifier | (() => undefined | RowColumnTwoConnectionKeySpecifier),
		fields?: RowColumnTwoConnectionFieldPolicy,
	},
	RowColumnTwoEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowColumnTwoEdgeKeySpecifier | (() => undefined | RowColumnTwoEdgeKeySpecifier),
		fields?: RowColumnTwoEdgeFieldPolicy,
	},
	RowContentLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowContentLinksKeySpecifier | (() => undefined | RowContentLinksKeySpecifier),
		fields?: RowContentLinksFieldPolicy,
	},
	RowContentLinksConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowContentLinksConnectionKeySpecifier | (() => undefined | RowContentLinksConnectionKeySpecifier),
		fields?: RowContentLinksConnectionFieldPolicy,
	},
	RowContentLinksEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowContentLinksEdgeKeySpecifier | (() => undefined | RowContentLinksEdgeKeySpecifier),
		fields?: RowContentLinksEdgeFieldPolicy,
	},
	RowHeroBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowHeroBannerKeySpecifier | (() => undefined | RowHeroBannerKeySpecifier),
		fields?: RowHeroBannerFieldPolicy,
	},
	RowHeroBannerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowHeroBannerConnectionKeySpecifier | (() => undefined | RowHeroBannerConnectionKeySpecifier),
		fields?: RowHeroBannerConnectionFieldPolicy,
	},
	RowHeroBannerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowHeroBannerEdgeKeySpecifier | (() => undefined | RowHeroBannerEdgeKeySpecifier),
		fields?: RowHeroBannerEdgeFieldPolicy,
	},
	RowLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowLinksKeySpecifier | (() => undefined | RowLinksKeySpecifier),
		fields?: RowLinksFieldPolicy,
	},
	RowLinksConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowLinksConnectionKeySpecifier | (() => undefined | RowLinksConnectionKeySpecifier),
		fields?: RowLinksConnectionFieldPolicy,
	},
	RowLinksEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowLinksEdgeKeySpecifier | (() => undefined | RowLinksEdgeKeySpecifier),
		fields?: RowLinksEdgeFieldPolicy,
	},
	RowProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowProductKeySpecifier | (() => undefined | RowProductKeySpecifier),
		fields?: RowProductFieldPolicy,
	},
	RowProductConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowProductConnectionKeySpecifier | (() => undefined | RowProductConnectionKeySpecifier),
		fields?: RowProductConnectionFieldPolicy,
	},
	RowProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowProductEdgeKeySpecifier | (() => undefined | RowProductEdgeKeySpecifier),
		fields?: RowProductEdgeFieldPolicy,
	},
	RowQuote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowQuoteKeySpecifier | (() => undefined | RowQuoteKeySpecifier),
		fields?: RowQuoteFieldPolicy,
	},
	RowQuoteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowQuoteConnectionKeySpecifier | (() => undefined | RowQuoteConnectionKeySpecifier),
		fields?: RowQuoteConnectionFieldPolicy,
	},
	RowQuoteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowQuoteEdgeKeySpecifier | (() => undefined | RowQuoteEdgeKeySpecifier),
		fields?: RowQuoteEdgeFieldPolicy,
	},
	RowServiceOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowServiceOptionsKeySpecifier | (() => undefined | RowServiceOptionsKeySpecifier),
		fields?: RowServiceOptionsFieldPolicy,
	},
	RowServiceOptionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowServiceOptionsConnectionKeySpecifier | (() => undefined | RowServiceOptionsConnectionKeySpecifier),
		fields?: RowServiceOptionsConnectionFieldPolicy,
	},
	RowServiceOptionsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowServiceOptionsEdgeKeySpecifier | (() => undefined | RowServiceOptionsEdgeKeySpecifier),
		fields?: RowServiceOptionsEdgeFieldPolicy,
	},
	RowSpecialBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowSpecialBannerKeySpecifier | (() => undefined | RowSpecialBannerKeySpecifier),
		fields?: RowSpecialBannerFieldPolicy,
	},
	RowSpecialBannerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowSpecialBannerConnectionKeySpecifier | (() => undefined | RowSpecialBannerConnectionKeySpecifier),
		fields?: RowSpecialBannerConnectionFieldPolicy,
	},
	RowSpecialBannerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RowSpecialBannerEdgeKeySpecifier | (() => undefined | RowSpecialBannerEdgeKeySpecifier),
		fields?: RowSpecialBannerEdgeFieldPolicy,
	},
	SDKParams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SDKParamsKeySpecifier | (() => undefined | SDKParamsKeySpecifier),
		fields?: SDKParamsFieldPolicy,
	},
	SalesCommentItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesCommentItemKeySpecifier | (() => undefined | SalesCommentItemKeySpecifier),
		fields?: SalesCommentItemFieldPolicy,
	},
	SalesItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesItemInterfaceKeySpecifier | (() => undefined | SalesItemInterfaceKeySpecifier),
		fields?: SalesItemInterfaceFieldPolicy,
	},
	ScheduledOperation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledOperationKeySpecifier | (() => undefined | ScheduledOperationKeySpecifier),
		fields?: ScheduledOperationFieldPolicy,
	},
	ScheduledRelease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledReleaseKeySpecifier | (() => undefined | ScheduledReleaseKeySpecifier),
		fields?: ScheduledReleaseFieldPolicy,
	},
	SearchResultPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultPageInfoKeySpecifier | (() => undefined | SearchResultPageInfoKeySpecifier),
		fields?: SearchResultPageInfoFieldPolicy,
	},
	SearchSuggestion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchSuggestionKeySpecifier | (() => undefined | SearchSuggestionKeySpecifier),
		fields?: SearchSuggestionFieldPolicy,
	},
	SelectedBundleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedBundleOptionKeySpecifier | (() => undefined | SelectedBundleOptionKeySpecifier),
		fields?: SelectedBundleOptionFieldPolicy,
	},
	SelectedBundleOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedBundleOptionValueKeySpecifier | (() => undefined | SelectedBundleOptionValueKeySpecifier),
		fields?: SelectedBundleOptionValueFieldPolicy,
	},
	SelectedConfigurableOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedConfigurableOptionKeySpecifier | (() => undefined | SelectedConfigurableOptionKeySpecifier),
		fields?: SelectedConfigurableOptionFieldPolicy,
	},
	SelectedCustomizableOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedCustomizableOptionKeySpecifier | (() => undefined | SelectedCustomizableOptionKeySpecifier),
		fields?: SelectedCustomizableOptionFieldPolicy,
	},
	SelectedCustomizableOptionValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedCustomizableOptionValueKeySpecifier | (() => undefined | SelectedCustomizableOptionValueKeySpecifier),
		fields?: SelectedCustomizableOptionValueFieldPolicy,
	},
	SelectedPaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedPaymentMethodKeySpecifier | (() => undefined | SelectedPaymentMethodKeySpecifier),
		fields?: SelectedPaymentMethodFieldPolicy,
	},
	SelectedShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedShippingMethodKeySpecifier | (() => undefined | SelectedShippingMethodKeySpecifier),
		fields?: SelectedShippingMethodFieldPolicy,
	},
	SendEmailToFriendOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendEmailToFriendOutputKeySpecifier | (() => undefined | SendEmailToFriendOutputKeySpecifier),
		fields?: SendEmailToFriendOutputFieldPolicy,
	},
	SendEmailToFriendRecipient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendEmailToFriendRecipientKeySpecifier | (() => undefined | SendEmailToFriendRecipientKeySpecifier),
		fields?: SendEmailToFriendRecipientFieldPolicy,
	},
	SendEmailToFriendSender?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendEmailToFriendSenderKeySpecifier | (() => undefined | SendEmailToFriendSenderKeySpecifier),
		fields?: SendEmailToFriendSenderFieldPolicy,
	},
	SendFriendConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendFriendConfigurationKeySpecifier | (() => undefined | SendFriendConfigurationKeySpecifier),
		fields?: SendFriendConfigurationFieldPolicy,
	},
	SetBillingAddressOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetBillingAddressOnCartOutputKeySpecifier | (() => undefined | SetBillingAddressOnCartOutputKeySpecifier),
		fields?: SetBillingAddressOnCartOutputFieldPolicy,
	},
	SetGuestEmailOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetGuestEmailOnCartOutputKeySpecifier | (() => undefined | SetGuestEmailOnCartOutputKeySpecifier),
		fields?: SetGuestEmailOnCartOutputFieldPolicy,
	},
	SetPaymentMethodOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetPaymentMethodOnCartOutputKeySpecifier | (() => undefined | SetPaymentMethodOnCartOutputKeySpecifier),
		fields?: SetPaymentMethodOnCartOutputFieldPolicy,
	},
	SetShippingAddressesOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetShippingAddressesOnCartOutputKeySpecifier | (() => undefined | SetShippingAddressesOnCartOutputKeySpecifier),
		fields?: SetShippingAddressesOnCartOutputFieldPolicy,
	},
	SetShippingMethodsOnCartOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetShippingMethodsOnCartOutputKeySpecifier | (() => undefined | SetShippingMethodsOnCartOutputKeySpecifier),
		fields?: SetShippingMethodsOnCartOutputFieldPolicy,
	},
	ShipmentItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemKeySpecifier | (() => undefined | ShipmentItemKeySpecifier),
		fields?: ShipmentItemFieldPolicy,
	},
	ShipmentItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemInterfaceKeySpecifier | (() => undefined | ShipmentItemInterfaceKeySpecifier),
		fields?: ShipmentItemInterfaceFieldPolicy,
	},
	ShipmentTracking?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentTrackingKeySpecifier | (() => undefined | ShipmentTrackingKeySpecifier),
		fields?: ShipmentTrackingFieldPolicy,
	},
	ShippingCartAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingCartAddressKeySpecifier | (() => undefined | ShippingCartAddressKeySpecifier),
		fields?: ShippingCartAddressFieldPolicy,
	},
	ShippingDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingDiscountKeySpecifier | (() => undefined | ShippingDiscountKeySpecifier),
		fields?: ShippingDiscountFieldPolicy,
	},
	ShippingHandling?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingHandlingKeySpecifier | (() => undefined | ShippingHandlingKeySpecifier),
		fields?: ShippingHandlingFieldPolicy,
	},
	SimpleCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleCartItemKeySpecifier | (() => undefined | SimpleCartItemKeySpecifier),
		fields?: SimpleCartItemFieldPolicy,
	},
	SimpleProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleProductKeySpecifier | (() => undefined | SimpleProductKeySpecifier),
		fields?: SimpleProductFieldPolicy,
	},
	SimpleWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleWishlistItemKeySpecifier | (() => undefined | SimpleWishlistItemKeySpecifier),
		fields?: SimpleWishlistItemFieldPolicy,
	},
	SmartButtonsConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmartButtonsConfigKeySpecifier | (() => undefined | SmartButtonsConfigKeySpecifier),
		fields?: SmartButtonsConfigFieldPolicy,
	},
	SortField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SortFieldKeySpecifier | (() => undefined | SortFieldKeySpecifier),
		fields?: SortFieldFieldPolicy,
	},
	SortFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SortFieldsKeySpecifier | (() => undefined | SortFieldsKeySpecifier),
		fields?: SortFieldsFieldPolicy,
	},
	StoreConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreConfigKeySpecifier | (() => undefined | StoreConfigKeySpecifier),
		fields?: StoreConfigFieldPolicy,
	},
	StorefrontProperties?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StorefrontPropertiesKeySpecifier | (() => undefined | StorefrontPropertiesKeySpecifier),
		fields?: StorefrontPropertiesFieldPolicy,
	},
	SubscribeEmailToNewsletterOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribeEmailToNewsletterOutputKeySpecifier | (() => undefined | SubscribeEmailToNewsletterOutputKeySpecifier),
		fields?: SubscribeEmailToNewsletterOutputFieldPolicy,
	},
	SwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchDataKeySpecifier | (() => undefined | SwatchDataKeySpecifier),
		fields?: SwatchDataFieldPolicy,
	},
	SwatchDataInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchDataInterfaceKeySpecifier | (() => undefined | SwatchDataInterfaceKeySpecifier),
		fields?: SwatchDataInterfaceFieldPolicy,
	},
	SwatchLayerFilterItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchLayerFilterItemKeySpecifier | (() => undefined | SwatchLayerFilterItemKeySpecifier),
		fields?: SwatchLayerFilterItemFieldPolicy,
	},
	SwatchLayerFilterItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchLayerFilterItemInterfaceKeySpecifier | (() => undefined | SwatchLayerFilterItemInterfaceKeySpecifier),
		fields?: SwatchLayerFilterItemInterfaceFieldPolicy,
	},
	TaxItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxItemKeySpecifier | (() => undefined | TaxItemKeySpecifier),
		fields?: TaxItemFieldPolicy,
	},
	TextSwatchData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextSwatchDataKeySpecifier | (() => undefined | TextSwatchDataKeySpecifier),
		fields?: TextSwatchDataFieldPolicy,
	},
	TierPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TierPriceKeySpecifier | (() => undefined | TierPriceKeySpecifier),
		fields?: TierPriceFieldPolicy,
	},
	UpdateCartItemsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCartItemsOutputKeySpecifier | (() => undefined | UpdateCartItemsOutputKeySpecifier),
		fields?: UpdateCartItemsOutputFieldPolicy,
	},
	UpdateProductsInWishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProductsInWishlistOutputKeySpecifier | (() => undefined | UpdateProductsInWishlistOutputKeySpecifier),
		fields?: UpdateProductsInWishlistOutputFieldPolicy,
	},
	UrlRewrite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UrlRewriteKeySpecifier | (() => undefined | UrlRewriteKeySpecifier),
		fields?: UrlRewriteFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Usps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UspsKeySpecifier | (() => undefined | UspsKeySpecifier),
		fields?: UspsFieldPolicy,
	},
	UspsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UspsConnectionKeySpecifier | (() => undefined | UspsConnectionKeySpecifier),
		fields?: UspsConnectionFieldPolicy,
	},
	UspsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UspsEdgeKeySpecifier | (() => undefined | UspsEdgeKeySpecifier),
		fields?: UspsEdgeFieldPolicy,
	},
	ValidationRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidationRuleKeySpecifier | (() => undefined | ValidationRuleKeySpecifier),
		fields?: ValidationRuleFieldPolicy,
	},
	VaultConfigOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VaultConfigOutputKeySpecifier | (() => undefined | VaultConfigOutputKeySpecifier),
		fields?: VaultConfigOutputFieldPolicy,
	},
	VaultCreditCardConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VaultCreditCardConfigKeySpecifier | (() => undefined | VaultCreditCardConfigKeySpecifier),
		fields?: VaultCreditCardConfigFieldPolicy,
	},
	VirtualCartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualCartItemKeySpecifier | (() => undefined | VirtualCartItemKeySpecifier),
		fields?: VirtualCartItemFieldPolicy,
	},
	VirtualProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualProductKeySpecifier | (() => undefined | VirtualProductKeySpecifier),
		fields?: VirtualProductFieldPolicy,
	},
	VirtualWishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VirtualWishlistItemKeySpecifier | (() => undefined | VirtualWishlistItemKeySpecifier),
		fields?: VirtualWishlistItemFieldPolicy,
	},
	Website?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebsiteKeySpecifier | (() => undefined | WebsiteKeySpecifier),
		fields?: WebsiteFieldPolicy,
	},
	WishListUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishListUserInputErrorKeySpecifier | (() => undefined | WishListUserInputErrorKeySpecifier),
		fields?: WishListUserInputErrorFieldPolicy,
	},
	Wishlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistKeySpecifier | (() => undefined | WishlistKeySpecifier),
		fields?: WishlistFieldPolicy,
	},
	WishlistCartUserInputError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistCartUserInputErrorKeySpecifier | (() => undefined | WishlistCartUserInputErrorKeySpecifier),
		fields?: WishlistCartUserInputErrorFieldPolicy,
	},
	WishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemKeySpecifier | (() => undefined | WishlistItemKeySpecifier),
		fields?: WishlistItemFieldPolicy,
	},
	WishlistItemInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemInterfaceKeySpecifier | (() => undefined | WishlistItemInterfaceKeySpecifier),
		fields?: WishlistItemInterfaceFieldPolicy,
	},
	WishlistItems?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemsKeySpecifier | (() => undefined | WishlistItemsKeySpecifier),
		fields?: WishlistItemsFieldPolicy,
	},
	WishlistOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistOutputKeySpecifier | (() => undefined | WishlistOutputKeySpecifier),
		fields?: WishlistOutputFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;