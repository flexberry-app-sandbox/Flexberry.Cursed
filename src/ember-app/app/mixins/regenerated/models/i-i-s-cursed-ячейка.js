import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('string'),
  этаж: DS.belongsTo('i-i-s-cursed-этаж', { inverse: null, async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-cursed-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-cursed-ячейка.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-cursed-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    этаж: belongsTo('i-i-s-cursed-этаж', 'Этаж', {
      номерЭтажа: attr('Номер этажа', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерЭтажа' })
  });

  modelClass.defineProjection('ЯчейкаL', 'i-i-s-cursed-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    этаж: belongsTo('i-i-s-cursed-этаж', 'Номер этажа', {
      номерЭтажа: attr('Номер этажа', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
