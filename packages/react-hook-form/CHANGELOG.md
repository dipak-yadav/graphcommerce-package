# Change Log

## 9.0.4

## 9.0.3

## 9.0.3-canary.0

## 9.0.2

### Patch Changes

- [`c40c559`](https://github.com/graphcommerce-org/graphcommerce/commit/c40c5596bcc8f3c2e1e15c9e6ad85bfa1f9154b0) - Solve an issue where the payment submission would remain in a spinning state when placing an order failed: `useFormGql` will now set `root` error on the form when there is an error response on the GraphQL operation, an error is thrown in onBeforeSubmit and in onSuccess. ([@paales](https://github.com/paales))

## 9.0.2-canary.0

### Patch Changes

- [`c40c559`](https://github.com/graphcommerce-org/graphcommerce/commit/c40c5596bcc8f3c2e1e15c9e6ad85bfa1f9154b0) - Solve an issue where the payment submission would remain in a spinning state when placing an order failed: `useFormGql` will now set `root` error on the form when there is an error response on the GraphQL operation, an error is thrown in onBeforeSubmit and in onSuccess. ([@paales](https://github.com/paales))

## 9.0.1

## 9.0.1-canary.1

## 9.0.0

### Major Changes

- [#2234](https://github.com/graphcommerce-org/graphcommerce/pull/2234) [`530076e`](https://github.com/graphcommerce-org/graphcommerce/commit/530076e3664703cb8b577b7fcf1998a420819f60) - Big INP improvments: Moved all usages of `useFormPersist` to the `<FormPersist/>` component to prevent rerenders. ([@FrankHarland](https://github.com/FrankHarland))

### Patch Changes

- [#2341](https://github.com/graphcommerce-org/graphcommerce/pull/2341) [`16e2980`](https://github.com/graphcommerce-org/graphcommerce/commit/16e2980da4b72330642e59e8c82d1acde387e4fc) - `useFormGql` and it's derived hooks now have a new `skipUnchanged` prop. The form will only be submitted when there are fields dirty in a form. This reduces the amount of queries ran in the checkout greatly. ([@Giovanni-Schroevers](https://github.com/Giovanni-Schroevers))

- [#2234](https://github.com/graphcommerce-org/graphcommerce/pull/2234) [`43bd04a`](https://github.com/graphcommerce-org/graphcommerce/commit/43bd04a777c5800cc7e01bee1e123a5aad82f194) - Added deprecation warnings for `useFormMuiRegister`. Refactored `useFormPersist` to use `useWatch` and added a separate `<FormPersist />` component to prevent rerenders. ([@FrankHarland](https://github.com/FrankHarland))

- [#2325](https://github.com/graphcommerce-org/graphcommerce/pull/2325) [`058fb17`](https://github.com/graphcommerce-org/graphcommerce/commit/058fb1777bdaa51ded6d37529e59a3cc5f0eac06) - Solve an issue where `onBeforeSubmit` and `onComplete` would become an 'stale closure' where variables inside wouldn't be updated. By wrapping `onBeforeSubmit` and `onComplete` in `useEventCallback` these functions are updated when outside values get changed. ([@Giovanni-Schroevers](https://github.com/Giovanni-Schroevers))

- [#2391](https://github.com/graphcommerce-org/graphcommerce/pull/2391) [`c1fa10f`](https://github.com/graphcommerce-org/graphcommerce/commit/c1fa10f995f562741b7574d465580e5405982a70) - Prevent overwriting custom context in useFormGqlMutation by merging operationOptions before execution. ([@wimvdputten](https://github.com/wimvdputten))

- [#2341](https://github.com/graphcommerce-org/graphcommerce/pull/2341) [`1d6512d`](https://github.com/graphcommerce-org/graphcommerce/commit/1d6512d4118cfb46602aa1f2432c3566fdb3261d) - Rename `experimental_useV2` prop to `deprecated_useV1` in `useFromGql` and enable it by default. ([@Giovanni-Schroevers](https://github.com/Giovanni-Schroevers))

- [#2234](https://github.com/graphcommerce-org/graphcommerce/pull/2234) [`0767bc4`](https://github.com/graphcommerce-org/graphcommerce/commit/0767bc40f7b596209f24ca4e745ff0441f3275c9) - Upgrade input components to no longer use `muiRegister`, which improves INP scores. ([@FrankHarland](https://github.com/FrankHarland))

- [#2341](https://github.com/graphcommerce-org/graphcommerce/pull/2341) [`af45239`](https://github.com/graphcommerce-org/graphcommerce/commit/af452399eaab59ee4e13484fdc9cb0a7660da531) - When a `useFormGql` throws an error in the `onBeforeSubmit` method or `onComplete` method it will be set as an ApolloError with the message, allowing it to be displayed somewhere. The `<PaymentMethodButton />` will now render this as an `<ErrorSnackbar />`. ([@Giovanni-Schroevers](https://github.com/Giovanni-Schroevers))

- [#2421](https://github.com/graphcommerce-org/graphcommerce/pull/2421) [`d500643`](https://github.com/graphcommerce-org/graphcommerce/commit/d500643138799b6db1610cb10a1d065d6219d8ea) - Resolve peer dependency issues so we get a clean install ([@paales](https://github.com/paales))

- [#2314](https://github.com/graphcommerce-org/graphcommerce/pull/2314) [`490bbfb`](https://github.com/graphcommerce-org/graphcommerce/commit/490bbfb5d88a7f58e83fa9c8b7f475c277a0eda3) - Added missing dependencies of `lodash` and `@types/lodash`. ([@paales](https://github.com/paales))

- [#2305](https://github.com/graphcommerce-org/graphcommerce/pull/2305) [`77e8297`](https://github.com/graphcommerce-org/graphcommerce/commit/77e82976816994336c616208a651cb18ce9ea270) - Fix bug with persist not applying saved changes by moving `<FromPersist/>` below the form components. ([@Giovanni-Schroevers](https://github.com/Giovanni-Schroevers))

- [#2234](https://github.com/graphcommerce-org/graphcommerce/pull/2234) [`1a6d0c4`](https://github.com/graphcommerce-org/graphcommerce/commit/1a6d0c4a3584b1e404b444f1ca44c68eaad56cb7) - Mark `useFormValidFields` as deprecated: Please use `<TextInputElement />`, `<SelectElement />`, etc. with the `showValid` prop. ([@FrankHarland](https://github.com/FrankHarland))

## 8.0.5

### Patch Changes

- [#2237](https://github.com/graphcommerce-org/graphcommerce/pull/2237) [`60f387d`](https://github.com/graphcommerce-org/graphcommerce/commit/60f387d4a037736aa8105fa45728ee481bdaf887) - Solve an issue where the checkout address form wouldn't be automatically submitted on change. ([@bramvanderholst](https://github.com/bramvanderholst))

## 8.0.3

### Patch Changes

- [#2206](https://github.com/graphcommerce-org/graphcommerce/pull/2206) [`855ab09`](https://github.com/graphcommerce-org/graphcommerce/commit/855ab097b9ea204a7c73c6550b7a5e9e2290f378) - Cleanup `<FormAutoSubmit/>` and remove internal hook. ([@paales](https://github.com/paales))

- [#2212](https://github.com/graphcommerce-org/graphcommerce/pull/2212) [`7c9f5da`](https://github.com/graphcommerce-org/graphcommerce/commit/7c9f5da1d458a19b0316c556c75415ff28bc5b2d) - Added noValidate prop so we can use the FormAutoSubmit component to submit partial forms ([@paales](https://github.com/paales))

## 8.0.0

### Patch Changes

- [#2093](https://github.com/graphcommerce-org/graphcommerce/pull/2093) [`112b041`](https://github.com/graphcommerce-org/graphcommerce/commit/112b041f01a33fbd521ce3eb3955844f96b29917) - Created a new experimental mutation abort feature inside `useFormGql`. This will allow redundant mutations to be canceled. This is enabled when the `experimental_useV2` prop on the `useFormGql` hook is used. ([@mikekeehnen](https://github.com/mikekeehnen))

- [#2007](https://github.com/graphcommerce-org/graphcommerce/pull/2007) [`f59c276`](https://github.com/graphcommerce-org/graphcommerce/commit/f59c276605f9ed649d1197a9ba0e3f12d7c6d026) - Crosssell behavior now properly shows for the latest added product. Added latest submitted variables to be retrieved when using the useFormGql hook. ([@JoshuaS98](https://github.com/JoshuaS98))

## 7.0.1

### Patch Changes

- [#2047](https://github.com/graphcommerce-org/graphcommerce/pull/2047) [`136580b39`](https://github.com/graphcommerce-org/graphcommerce/commit/136580b39e3cffdd07e3fa087e049bd532c3e8f1) - Updated all dependencies to the latest version where possible. ([@paales](https://github.com/paales))

## 7.0.0

### Major Changes

- [`e55d8c390`](https://github.com/graphcommerce-org/graphcommerce/commit/e55d8c390d90b4bb7bab11c6a99027ac72bd7e3e) - Created a new sidebar layout system, can be configured with productFiltersLayout in the graphcommerce.config.js ([@paales](https://github.com/paales))

### Patch Changes

- [#1960](https://github.com/graphcommerce-org/graphcommerce/pull/1960) [`f78caf5a8`](https://github.com/graphcommerce-org/graphcommerce/commit/f78caf5a83683f1ae4b901fb94bd22d50943fa2f) - Updated packages: `next`, `@apollo/client`, `react-hook-form`, `@emotion/*`, `@lingui/*`, `@mui/*` and various others. ([@paales](https://github.com/paales))

- [#2012](https://github.com/graphcommerce-org/graphcommerce/pull/2012) [`1dbb3ae13`](https://github.com/graphcommerce-org/graphcommerce/commit/1dbb3ae13553992ee1ed77f375375560f28c418c) - Upgrade graphql to 16.7.1, add graphql as peer dependency ([@Giovanni-Schroevers](https://github.com/Giovanni-Schroevers))

## 6.0.1

### Patch Changes

- [#1859](https://github.com/graphcommerce-org/graphcommerce/pull/1859) [`08ea612a1`](https://github.com/graphcommerce-org/graphcommerce/commit/08ea612a1d26166b8e55f20525c1004642cc85aa) - Resolved multiple onSubmitSuccessful callbacks in ComposedForm, when we have multiple ComposedForm Components on a page ([@mikekeehnen](https://github.com/mikekeehnen))

## 5.1.0

### Patch Changes

- [#1752](https://github.com/graphcommerce-org/graphcommerce/pull/1752) [`2a6a4d9ec`](https://github.com/graphcommerce-org/graphcommerce/commit/2a6a4d9ecfa1b58a66ba9b9d00016d6feda9aa95) - Updated dependencies to latest versions, except for nextjs; Solve tons of peer dependency issues.

  - Updated the @mui/material package
  - Removed dependencies on react-hook-form-mui and @playwright/test
  - Upgraded dependencies including type-fest and graphql-mesh
  - Solved peer dependency issues ([@paales](https://github.com/paales))

## 5.0.0

### Major Changes

- [#1734](https://github.com/graphcommerce-org/graphcommerce/pull/1734) [`e4c7fe17e`](https://github.com/graphcommerce-org/graphcommerce/commit/e4c7fe17e413e37362ceae92e67f1b3a5f62d398) - Bump major version of all packages ([@github-actions](https://github.com/apps/github-actions))

## 4.30.0

### Patch Changes

- [#1702](https://github.com/graphcommerce-org/graphcommerce/pull/1702) [`abb15ef4a`](https://github.com/graphcommerce-org/graphcommerce/commit/abb15ef4a79b12eddb32cc006e5d1d31dd06ac2d) Thanks [@paales](https://github.com/paales)! - Added canary releases to GraphCommerce

## 3.3.5

### Patch Changes

- [#1665](https://github.com/graphcommerce-org/graphcommerce/pull/1665) [`1f2e14ba8`](https://github.com/graphcommerce-org/graphcommerce/commit/1f2e14ba8b674b87257a123e8cb215157890eb22) Thanks [@paales](https://github.com/paales)! - Make sure the onComplete callback also sends the variables

## 3.3.4

### Patch Changes

- [#1660](https://github.com/graphcommerce-org/graphcommerce/pull/1660) [`75ae24a93`](https://github.com/graphcommerce-org/graphcommerce/commit/75ae24a93bd74e3b9b7efda21ec7ba6fbe9a3a75) Thanks [@paales](https://github.com/paales)! - Remove heuristicEncode for GraphQL input objects provided by react-hook-form

## 3.3.3

### Patch Changes

- [#1629](https://github.com/graphcommerce-org/graphcommerce/pull/1629) [`662f510c2`](https://github.com/graphcommerce-org/graphcommerce/commit/662f510c21fc44a63036e5c7a0726ccb33c31600) Thanks [@paales](https://github.com/paales)! - The submit button would remain in a loading state when all composed forms were invalid

## 3.3.2

### Patch Changes

- [#1573](https://github.com/graphcommerce-org/graphcommerce/pull/1573) [`02023d8d8`](https://github.com/graphcommerce-org/graphcommerce/commit/02023d8d89c8138144243edce67290bd79ff49a7) Thanks [@paales](https://github.com/paales)! - useGqlDocumentHandler would not encode array items correctly

## 3.3.1

### Patch Changes

- [#1553](https://github.com/graphcommerce-org/graphcommerce/pull/1553) [`4a4579bb2`](https://github.com/graphcommerce-org/graphcommerce/commit/4a4579bb2f7da378f3fcc504405caf2560dc10f6) Thanks [@NickdeK](https://github.com/NickdeK)! - When using a useFormGqlMutation or useFormGqlQuery and defaultValues change, the form values will update for fields that aren't dirty.

## 3.3.0

### Minor Changes

- [#1544](https://github.com/graphcommerce-org/graphcommerce/pull/1544) [`5f927ebdc`](https://github.com/graphcommerce-org/graphcommerce/commit/5f927ebdc6f0331833e02b96e4f169bfe475ac6b) Thanks [@mikekeehnen](https://github.com/mikekeehnen)! - Fixed hydration errors on account, cart and wishlist

## 3.2.2

### Patch Changes

- [#1490](https://github.com/graphcommerce-org/graphcommerce/pull/1490) [`d311ef48b`](https://github.com/graphcommerce-org/graphcommerce/commit/d311ef48bb3e97806d992af5516d6b7f183ec9cb) Thanks [@paales](https://github.com/paales)! - upgraded packages

## 3.2.1

### Patch Changes

- [#1495](https://github.com/graphcommerce-org/graphcommerce/pull/1495) [`ffec8800a`](https://github.com/graphcommerce-org/graphcommerce/commit/ffec8800a50ff2fe9b9fc5feeb5a0a878b573f0e) Thanks [@paales](https://github.com/paales)! - solve issue where useLazyQueryPromise didn’t always resolve

## 3.2.0

### Minor Changes

- [#1496](https://github.com/graphcommerce-org/graphcommerce/pull/1496) [`858a3b3a3`](https://github.com/graphcommerce-org/graphcommerce/commit/858a3b3a3601cd00491219daf45557c2f1cc804b) Thanks [@FrankHarland](https://github.com/FrankHarland)! - Only submit dirty forms, allow passing false to onSubmit

## 3.1.3

### Patch Changes

- [#1451](https://github.com/graphcommerce-org/graphcommerce/pull/1451) [`50188e378`](https://github.com/graphcommerce-org/graphcommerce/commit/50188e378b4c77561ebc600958ea11cd114fa61a) Thanks [@paales](https://github.com/paales)! - Loosen node requirement

## 3.1.2

### Patch Changes

- [#1426](https://github.com/graphcommerce-org/graphcommerce/pull/1426) [`100f4c38c`](https://github.com/graphcommerce-org/graphcommerce/commit/100f4c38c8fcda4bc6e0425e38028b550b60adc2) Thanks [@paales](https://github.com/paales)! - Upgrade packages

## 3.1.1

### Patch Changes

- [#1399](https://github.com/graphcommerce-org/graphcommerce/pull/1399) [`fb277d8e1`](https://github.com/graphcommerce-org/graphcommerce/commit/fb277d8e1e3612c5e9cf890a30d19cfd1ff70542) Thanks [@paales](https://github.com/paales)! - Now using [@graphql-yoga](https://github.com/dotansimha/graphql-yoga) for GraphQL which has full support for [envelop](https://www.envelop.dev/) plugins.

* [#1399](https://github.com/graphcommerce-org/graphcommerce/pull/1399) [`fb277d8e1`](https://github.com/graphcommerce-org/graphcommerce/commit/fb277d8e1e3612c5e9cf890a30d19cfd1ff70542) Thanks [@paales](https://github.com/paales)! - Added a new @graphcommerce/cli package to generate the mesh so it can be generated _inside_ the @graphcommerce/graphql-mesh package to allow for better future extensibility.

- [#1399](https://github.com/graphcommerce-org/graphcommerce/pull/1399) [`da0ae7d02`](https://github.com/graphcommerce-org/graphcommerce/commit/da0ae7d0236e4908ba0bf0fa16656be516e841d4) Thanks [@paales](https://github.com/paales)! - Updated dependencies

## 3.1.0

### Minor Changes

- [#1379](https://github.com/graphcommerce-org/graphcommerce/pull/1379) [`104abd14e`](https://github.com/graphcommerce-org/graphcommerce/commit/104abd14e1585ef0d8de77937d25156b8fa1e201) Thanks [@paales](https://github.com/paales)! - useFormPersist no accepts a persist array to persist values even if they aren’t dirty anymore

* [#1379](https://github.com/graphcommerce-org/graphcommerce/pull/1379) [`2a125b1f9`](https://github.com/graphcommerce-org/graphcommerce/commit/2a125b1f98bb9272d96c3577f21d6c984caad892) Thanks [@paales](https://github.com/paales)! - ComposedSubmit uses the result of form.trigger() method to check if fomrs are valid before atempting to submit any form in the composition

## 3.0.7

### Patch Changes

- [#1378](https://github.com/graphcommerce-org/graphcommerce/pull/1378) [`22ff9df16`](https://github.com/graphcommerce-org/graphcommerce/commit/22ff9df1677742ae8e07d9b7e5b12fbb487580dc) Thanks [@paales](https://github.com/paales)! - upgrade to latest versions of packages

## 3.0.6

### Patch Changes

- [#1369](https://github.com/graphcommerce-org/graphcommerce/pull/1369) [`ae6449502`](https://github.com/graphcommerce-org/graphcommerce/commit/ae64495024a455bbe5188588604368c1542840c9) Thanks [@paales](https://github.com/paales)! - Upgraded dependencies

## 3.0.5

### Patch Changes

- [#1312](https://github.com/ho-nl/m2-pwa/pull/1312) [`4e1fd4d9f`](https://github.com/ho-nl/m2-pwa/commit/4e1fd4d9fda2109de378be7e39382f7014a7ab54) Thanks [@paales](https://github.com/paales)! - upgraded dependencies

## 3.0.4

### Patch Changes

- [#1307](https://github.com/ho-nl/m2-pwa/pull/1307) [`bd10506d3`](https://github.com/ho-nl/m2-pwa/commit/bd10506d32fdbc91d01dadc29a12ebd1e0943655) Thanks [@paales](https://github.com/paales)! - All default exports are now named exports internally and all `index.tsx` are renamed to the component name.

* [#1307](https://github.com/ho-nl/m2-pwa/pull/1307) [`27cb1f2d8`](https://github.com/ho-nl/m2-pwa/commit/27cb1f2d8dbfb8f1b301ce56fb6a2b6c1fc6a5ef) Thanks [@paales](https://github.com/paales)! - upgrade dependencies

## 3.0.3

### Patch Changes

- [`973ff8645`](https://github.com/ho-nl/m2-pwa/commit/973ff86452a70ade9f4db13fdda6e963d7220e96) Thanks [@paales](https://github.com/paales)! - made packages public

* [#1278](https://github.com/ho-nl/m2-pwa/pull/1278) [`81ea406d5`](https://github.com/ho-nl/m2-pwa/commit/81ea406d54d6b5c662c030a7fea444abc4117a20) Thanks [@ErwinOtten](https://github.com/ErwinOtten)! - Upgraded dependencies to the latest version

## 3.0.2

### Patch Changes

- [#1274](https://github.com/ho-nl/m2-pwa/pull/1274) [`381e4c86a`](https://github.com/ho-nl/m2-pwa/commit/381e4c86a8321ce96e1fa5c7d3c0a0c0ff3e02c7) Thanks [@paales](https://github.com/paales)! - Moved `ApolloErrorAlert`, `ApolloErrorFullPage` and `ApolloErrorSnackbar` to the ecommerce-ui package.

  Created `ComposedSubmitButton` and `ComposedSubmitLinkOrButton` to reduce complexity from `magento-graphcms` example.

  Removed dependency an `@graphcommerce/react-hook-form` from `magento-graphcms` example.

  Added dependency `@graphcommerce/ecommerce-ui` from `magento-graphcms` example.

* [#1276](https://github.com/ho-nl/m2-pwa/pull/1276) [`ce09388e0`](https://github.com/ho-nl/m2-pwa/commit/ce09388e0d7ef33aee660612340f6fbae15ceec2) Thanks [@paales](https://github.com/paales)! - We've moved lots of internal packages from `dependencies` to `peerDependencies`. The result of this is that there will be significantly less duplicate packages in the node_modules folders.

- [#1276](https://github.com/ho-nl/m2-pwa/pull/1276) [`52a45bba4`](https://github.com/ho-nl/m2-pwa/commit/52a45bba4dc6dd6df3c81f5023df7d23ed8a534d) Thanks [@paales](https://github.com/paales)! - Upgraded to [NextJS 12.1](https://nextjs.org/blog/next-12-1)! This is just for compatibility, but we'll be implementing [On-demand Incremental Static Regeneration](https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta) soon.

  This will greatly reduce the requirement to rebuid stuff and we'll add a management UI on the frontend to be able to revalidate pages manually.

## 3.0.1

### Patch Changes

- [`0cbaa878b`](https://github.com/ho-nl/m2-pwa/commit/0cbaa878b8a844d5abbeb1797b625a33130e6514) Thanks [@paales](https://github.com/paales)! - Added homepage and repository package.json files, so that the packages link to back to the website and repository

## 3.0.0

### Major Changes

- [#1258](https://github.com/ho-nl/m2-pwa/pull/1258) [`ad36382a4`](https://github.com/ho-nl/m2-pwa/commit/ad36382a4d55d83d9e47b7eb6a02671a2a631a05) Thanks [@paales](https://github.com/paales)! - Upgraded to Material UI 5

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.104.1](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.104.0...@graphcommerce/react-hook-form@2.104.1) (2021-12-03)

### Bug Fixes

- make the headerHeight properly configurable ([c39c942](https://github.com/ho-nl/m2-pwa/commit/c39c942a62a9bb9687ea553be28e37fb49a6b065))

# [2.104.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.103.1...@graphcommerce/react-hook-form@2.104.0) (2021-11-12)

### Features

- added tons of translations ([9bb0ac7](https://github.com/ho-nl/m2-pwa/commit/9bb0ac709b58df6ea6141e92e4923a5ca9ae2963))

# [2.103.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.102.14...@graphcommerce/react-hook-form@2.103.0) (2021-11-03)

### Bug Fixes

- add x-recaptcha header to apollo link context when using mutations ([380fe52](https://github.com/ho-nl/m2-pwa/commit/380fe52ebd283df034d8a2c6a4f6a3713955bdd3))
- **use-form-gql:** context type ([f355495](https://github.com/ho-nl/m2-pwa/commit/f3554951697fe394a76dd75ecf119f038f8d9bbc))

### Features

- google recaptcha v3 integration ([a9fcc16](https://github.com/ho-nl/m2-pwa/commit/a9fcc16f93951e61378c99a2e183e2d754da1d50))

## [2.102.1](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.102.0...@graphcommerce/react-hook-form@2.102.1) (2021-09-27)

**Note:** Version bump only for package @graphcommerce/react-hook-form

# 2.102.0 (2021-09-27)

### Bug Fixes

- disable isValid form checkout on submit ([b20110d](https://github.com/ho-nl/m2-pwa/commit/b20110d93327ff2678296acc47b1075b4fb3a85a))
- ignore md files from triggering version updates ([4f98392](https://github.com/ho-nl/m2-pwa/commit/4f9839250b3a32d3070da5290e5efcc5e2243fba))
- input checkmarks ([279c1c1](https://github.com/ho-nl/m2-pwa/commit/279c1c112ada46fdea102024298e8293d1a23293))
- make sure ComposedForm actually submits correctly ([c6499d9](https://github.com/ho-nl/m2-pwa/commit/c6499d9d36f874cd65b310cbf7f63f5a88fa86cd))
- make sure the checkout address fields are working as expected ([e88aae9](https://github.com/ho-nl/m2-pwa/commit/e88aae9afa3c60457b8e8c87ba52e8ae2dec4a3e))
- make sure useFormGqlQuery uses the new useLazyQueryPromise ([f0cf831](https://github.com/ho-nl/m2-pwa/commit/f0cf83191dbbc2da222682b053db8b8c374add69))
- **react-hook-form:** assertFormGqlOperation ([ce09fa5](https://github.com/ho-nl/m2-pwa/commit/ce09fa50f73f6d06b2caa15b1223ba7470a7ea96))
- **react-hook-form:** form autosubmit is stuck in a loop if the request fails ([c74e3e0](https://github.com/ho-nl/m2-pwa/commit/c74e3e0cbf146887c3ef5447dcbba46746971e2a))
- **react-hook-form:** handle ComposedForm network errors ([e028ae0](https://github.com/ho-nl/m2-pwa/commit/e028ae06f49fea5d4e4dbdf58f803b365c902404))
- **react-hook-form:** make sure we don’t overuse useFormPersist ([b28efde](https://github.com/ho-nl/m2-pwa/commit/b28efde79dad1fb9bf9e8d7f9cc5cf32648acdf1))
- **react-hook-form:** not not always submit ComposedForm ([642833f](https://github.com/ho-nl/m2-pwa/commit/642833fe8b311b20db2ccdd57f0492b8429c0e81))
- **react-hook-form:** Object(…) is not a function ([ebc32e4](https://github.com/ho-nl/m2-pwa/commit/ebc32e402c1db185785f1e29c21a705d38a6743d))
- **react-hook-form:** solve issue where form would oversubmit/not-submit ([89f0619](https://github.com/ho-nl/m2-pwa/commit/89f0619051228c08a61aafeeddb67b95e99727ff))
- **react-hook-form:** the wrong form would submit if the component didn’t rerender ([32d4cf1](https://github.com/ho-nl/m2-pwa/commit/32d4cf13ffc2967cc41e50a14ad872d289d4eb43))
- **react-hook-form:** validate if the previous request succeeds before moving on to the next request ([1985d09](https://github.com/ho-nl/m2-pwa/commit/1985d0938cd509532fa3b6bc801a3399c2baae09))
- remove cyclic dependencies ([8a59389](https://github.com/ho-nl/m2-pwa/commit/8a5938943a97634cce57c68bb369c6e77e7a0288))
- show form checkmarks when field is valid ([7df8cad](https://github.com/ho-nl/m2-pwa/commit/7df8cadd5292c7d8a1d1e4c981d51adf7b5b8119))
- use form auto submit should submit with prefilled data ([9957ef6](https://github.com/ho-nl/m2-pwa/commit/9957ef67ee39e30873f528ffae4da7c0dcfbb6fa))
- useformautosubmit initial submit ([a06cb60](https://github.com/ho-nl/m2-pwa/commit/a06cb60996f83788a95bcd3995407539b2acfd46))
- useFormAutoSubmit modes ([9180bf2](https://github.com/ho-nl/m2-pwa/commit/9180bf21a140f5741078007c42972ded433c277c))

### Features

- created stacked-pages package ([d86008e](https://github.com/ho-nl/m2-pwa/commit/d86008ee659ccb25b194a41d624b394a1ddbd088))
- implemented checkmo payment method ([18525b2](https://github.com/ho-nl/m2-pwa/commit/18525b2f4efe9bd0eea12a7a992d284f341e0c68))
- implemented purchase order ([3a40033](https://github.com/ho-nl/m2-pwa/commit/3a40033cd4d6712a17bb9c41a8841ebf7aa2f025))
- introduced SheetShell as a shared layout component ([eb64f28](https://github.com/ho-nl/m2-pwa/commit/eb64f28fd05b69efbf14fa850c70b0f1da5c4237))
- next.js 11 ([7d61407](https://github.com/ho-nl/m2-pwa/commit/7d614075a778f488045034f74be4f75b93f63c43))
- **playwright:** added new playwright package to enable browser testing ([6f49ec7](https://github.com/ho-nl/m2-pwa/commit/6f49ec7595563775b96ebf21c27e39da1282e8d9))
- **react-hook-form:** added buttonState to ComposedSubmit ([57e77c2](https://github.com/ho-nl/m2-pwa/commit/57e77c29f17720f7f3ee3b63be82779c0e5d8714))
- **react-hook-form:** added ComposedForm component to handle the submission of multiple forms ([1172ec5](https://github.com/ho-nl/m2-pwa/commit/1172ec5abcb0e1b72bb362b977bf0c22997bac9a))
- **react-hook-form:** pass useFormGql operation options ([ddb6f75](https://github.com/ho-nl/m2-pwa/commit/ddb6f750432c0a6ed8468ae08e522a774c261f8f))
- **react-hook-form:** updated readme ([aede77a](https://github.com/ho-nl/m2-pwa/commit/aede77ab6d30fe5ca47b9d08bbdadca9b371713c))
- renamed all packages to use [@graphcommerce](https://github.com/graphcommerce) instead of [@reachdigital](https://github.com/reachdigital) ([491e4ce](https://github.com/ho-nl/m2-pwa/commit/491e4cec9a2686472dac36b79f999257c0811ffe))
- search result page wip ([4ecaf34](https://github.com/ho-nl/m2-pwa/commit/4ecaf34deaa0ff6d24e03d72e74fd045bb7ee269))
- solve issue where the order couldn’t be submitted ([ec0d357](https://github.com/ho-nl/m2-pwa/commit/ec0d3579a1277976e2dc515f420996cf716f83a6))
- submit composed form sequentially ([890d839](https://github.com/ho-nl/m2-pwa/commit/890d8393d635c3777aa17cfa8d4dafc13c2e6cdc))
- upgrade to node 14 ([d079a75](https://github.com/ho-nl/m2-pwa/commit/d079a751e9bfd8dc7f5009d2c9f31c336a0c96ab))
- useFormMutationCart and simpler imports ([012f090](https://github.com/ho-nl/m2-pwa/commit/012f090e8f54d09f35d393c61ad1e2319f5a90ff))

### Reverts

- Revert "chore: upgrade @apollo/client" ([55ff24e](https://github.com/ho-nl/m2-pwa/commit/55ff24ede0e56c85b8095edadadd1ec5e0b1b8d2))

# Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.101.4](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.101.3...@graphcommerce/react-hook-form@2.101.4) (2021-08-09)

### Reverts

- Revert "chore: upgrade @apollo/client" ([55ff24e](https://github.com/ho-nl/m2-pwa/commit/55ff24ede0e56c85b8095edadadd1ec5e0b1b8d2))

## [2.101.3](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.101.2...@graphcommerce/react-hook-form@2.101.3) (2021-07-29)

### Bug Fixes

- **react-hook-form:** validate if the previous request succeeds before moving on to the next request ([1985d09](https://github.com/ho-nl/m2-pwa/commit/1985d0938cd509532fa3b6bc801a3399c2baae09))

# [2.101.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/react-hook-form@2.100.10...@graphcommerce/react-hook-form@2.101.0) (2021-07-26)

### Bug Fixes

- ignore md files from triggering version updates ([4f98392](https://github.com/ho-nl/m2-pwa/commit/4f9839250b3a32d3070da5290e5efcc5e2243fba))

### Features

- **playwright:** added new playwright package to enable browser testing ([6f49ec7](https://github.com/ho-nl/m2-pwa/commit/6f49ec7595563775b96ebf21c27e39da1282e8d9))
