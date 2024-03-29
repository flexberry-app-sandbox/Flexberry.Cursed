import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  нДС: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  товар: DS.belongsTo('i-i-s-cursed-товар', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-cursed-заказ', { inverse: 'строкаЗаказа', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-cursed-строка-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  нДС: {
    descriptionKey: 'models.i-i-s-cursed-строка-заказа.validations.нДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-cursed-строка-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-cursed-строка-заказа.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-cursed-строка-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаЗаказаE', 'i-i-s-cursed-строка-заказа', {
    нДС: attr('НДС', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    товар: belongsTo('i-i-s-cursed-товар', 'Товар', {
      название: attr('Название', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'название' })
  });
};
