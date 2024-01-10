import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-cursed-сотрудник', { inverse: null, async: false }),
  товарНаСкладе: DS.hasMany('i-i-s-cursed-товар-на-складе', { inverse: 'склад', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-cursed-склад.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-cursed-склад.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товарНаСкладе: {
    descriptionKey: 'models.i-i-s-cursed-склад.validations.товарНаСкладе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-cursed-склад', {
    номер: attr('Номер', { index: 0 }),
    сотрудник: belongsTo('i-i-s-cursed-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фамилия' }),
    товарНаСкладе: hasMany('i-i-s-cursed-товар-на-складе', 'Товар на складе', {
      количество: attr('Количество', { index: 0 }),
      ячейка: belongsTo('i-i-s-cursed-ячейка', 'Ячейка', {
        номерЯчейки: attr('Номер ячейки', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'номерЯчейки' }),
      товар: belongsTo('i-i-s-cursed-товар', 'Товар', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-cursed-склад', {
    номер: attr('Номер', { index: 0 }),
    сотрудник: belongsTo('i-i-s-cursed-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
