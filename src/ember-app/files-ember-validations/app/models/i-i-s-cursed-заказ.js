import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-cursed-заказ';

import ДокументModel from './i-i-s-cursed-документ';

let Model = ДокументModel.extend(ЗаказMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
