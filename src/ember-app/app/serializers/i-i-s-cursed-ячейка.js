import { Serializer as ЯчейкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-cursed-ячейка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЯчейкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
