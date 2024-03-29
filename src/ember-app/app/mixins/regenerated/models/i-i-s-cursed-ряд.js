import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерРяда: DS.attr('number')
});

export let ValidationRules = {
  номерРяда: {
    descriptionKey: 'models.i-i-s-cursed-ряд.validations.номерРяда.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РядE', 'i-i-s-cursed-ряд', {
    номерРяда: attr('Номер ряда', { index: 0 })
  });

  modelClass.defineProjection('РядL', 'i-i-s-cursed-ряд', {
    номерРяда: attr('Номер ряда', { index: 0 })
  });
};
