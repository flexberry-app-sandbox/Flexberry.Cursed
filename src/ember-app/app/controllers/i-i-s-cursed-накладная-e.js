import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-cursed-накладная-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-cursed-запись-в-накладной+товар':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'товар',
            projection: 'ТоварL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
