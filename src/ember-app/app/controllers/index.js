import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.cursed.caption'),
          title: i18n.t('forms.application.sitemap.cursed.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.cursed.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.cursed.сотрудники.title'),
            children: [{
              link: 'i-i-s-cursed-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.cursed.сотрудники.i-i-s-cursed-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.сотрудники.i-i-s-cursed-сотрудник-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.caption'),
            title: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.title'),
            children: [{
              link: 'i-i-s-cursed-заказ-l',
              caption: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.i-i-s-cursed-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.i-i-s-cursed-заказ-l.title'),
              children: null
            }, {
              link: 'i-i-s-cursed-документ-l',
              caption: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.i-i-s-cursed-документ-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.i-i-s-cursed-документ-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-cursed-накладная-l',
              caption: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.i-i-s-cursed-накладная-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.информация-о-заказе.i-i-s-cursed-накладная-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.cursed.товар-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.cursed.товар-на-складе.title'),
            children: [{
              link: 'i-i-s-cursed-товар-l',
              caption: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-товар-l.title'),
              children: null
            }, {
              link: 'i-i-s-cursed-склад-l',
              caption: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-склад-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-cursed-ряд-l',
              caption: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-ряд-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-ряд-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-cursed-этаж-l',
              caption: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-этаж-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-этаж-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-cursed-ячейка-l',
              caption: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-ячейка-l.caption'),
              title: i18n.t('forms.application.sitemap.cursed.товар-на-складе.i-i-s-cursed-ячейка-l.title'),
              icon: 'book',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})