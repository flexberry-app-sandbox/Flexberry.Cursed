import {
  defineNamespace,
  defineProjections,
  Model as РядMixin
} from '../mixins/regenerated/models/i-i-s-cursed-ряд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РядMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
