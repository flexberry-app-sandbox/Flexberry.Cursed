import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-cursed-сотрудник', 'Unit | Model | i-i-s-cursed-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-cursed-документ',
    'model:i-i-s-cursed-заказ',
    'model:i-i-s-cursed-запись-в-накладной',
    'model:i-i-s-cursed-накладная',
    'model:i-i-s-cursed-ряд',
    'model:i-i-s-cursed-склад',
    'model:i-i-s-cursed-сотрудник',
    'model:i-i-s-cursed-строка-заказа',
    'model:i-i-s-cursed-товар-на-складе',
    'model:i-i-s-cursed-товар',
    'model:i-i-s-cursed-этаж',
    'model:i-i-s-cursed-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
