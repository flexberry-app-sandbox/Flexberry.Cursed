import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-cursed-ряд', 'Unit | Serializer | i-i-s-cursed-ряд', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-cursed-ряд',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-cursed-состояние-заказа',
    'transform:i-i-s-cursed-состояние-накладной',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
