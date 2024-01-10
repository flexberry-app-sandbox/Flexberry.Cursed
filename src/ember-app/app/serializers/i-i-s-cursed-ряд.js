import { Serializer as РядSerializer } from
  '../mixins/regenerated/serializers/i-i-s-cursed-ряд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РядSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
