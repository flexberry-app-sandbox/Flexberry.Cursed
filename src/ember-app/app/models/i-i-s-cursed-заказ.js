import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-cursed-заказ';

import ДокументModel from './i-i-s-cursed-документ';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-cursed-документ';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ДокументModel.extend(ЗаказMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
