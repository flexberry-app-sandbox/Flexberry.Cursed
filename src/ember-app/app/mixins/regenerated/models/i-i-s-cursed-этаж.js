import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЭтажа: DS.attr('number'),
  ряд: DS.belongsTo('i-i-s-cursed-ряд', { inverse: null, async: false })
});

export let ValidationRules = {
  номерЭтажа: {
    descriptionKey: 'models.i-i-s-cursed-этаж.validations.номерЭтажа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ряд: {
    descriptionKey: 'models.i-i-s-cursed-этаж.validations.ряд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЭтажE', 'i-i-s-cursed-этаж', {
    номерЭтажа: attr('Номер этажа', { index: 0 }),
    ряд: belongsTo('i-i-s-cursed-ряд', 'Ряд', {
      номерРяда: attr('Номер ряда', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерРяда' })
  });

  modelClass.defineProjection('ЭтажL', 'i-i-s-cursed-этаж', {
    номерЭтажа: attr('Номер этажа', { index: 0 }),
    ряд: belongsTo('i-i-s-cursed-ряд', 'Номер ряда', {
      номерРяда: attr('Номер ряда', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
