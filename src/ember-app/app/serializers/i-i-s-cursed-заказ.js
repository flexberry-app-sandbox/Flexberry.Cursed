import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-cursed-заказ';
import ДокументSerializer from './i-i-s-cursed-документ';

export default ДокументSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
