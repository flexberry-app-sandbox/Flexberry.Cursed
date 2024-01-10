import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-cursed-накладная';

import ДокументModel from './i-i-s-cursed-документ';

let Model = ДокументModel.extend(НакладнаяMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
