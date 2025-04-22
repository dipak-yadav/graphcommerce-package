/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type ConditionNumberFragment = { __typename: 'ConditionNumber', property: string, operator: Types.DynamicRowConditionNumberOperator, numberValue: number };

export type ConditionTextFragment = { __typename: 'ConditionText', property: string, stringValue: string };

export type ConditionOrFragment = { __typename: 'ConditionOr', conditions: Array<{ __typename: 'ConditionNumber', property: string, operator: Types.DynamicRowConditionNumberOperator, numberValue: number } | { __typename: 'ConditionText', property: string, stringValue: string }> };

export type ConditionAndFragment = { __typename: 'ConditionAnd', conditions: Array<{ __typename: 'ConditionNumber', property: string, operator: Types.DynamicRowConditionNumberOperator, numberValue: number } | { __typename: 'ConditionOr', conditions: Array<{ __typename: 'ConditionNumber', property: string, operator: Types.DynamicRowConditionNumberOperator, numberValue: number } | { __typename: 'ConditionText', property: string, stringValue: string }> } | { __typename: 'ConditionText', property: string, stringValue: string }> };
