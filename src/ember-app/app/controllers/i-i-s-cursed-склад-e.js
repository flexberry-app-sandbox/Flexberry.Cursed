import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-cursed-склад-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-cursed-товар-на-складе+ячейка':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерЯчейки',
            required: true,
            relationName: 'ячейка',
            projection: 'ЯчейкаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-cursed-товар-на-складе+товар':
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
