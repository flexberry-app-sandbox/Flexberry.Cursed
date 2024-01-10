import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISCursedДокументLForm from './forms/i-i-s-cursed-документ-l';
import IISCursedЗаказLForm from './forms/i-i-s-cursed-заказ-l';
import IISCursedНакладнаяLForm from './forms/i-i-s-cursed-накладная-l';
import IISCursedРядLForm from './forms/i-i-s-cursed-ряд-l';
import IISCursedСкладLForm from './forms/i-i-s-cursed-склад-l';
import IISCursedСотрудникLForm from './forms/i-i-s-cursed-сотрудник-l';
import IISCursedТоварLForm from './forms/i-i-s-cursed-товар-l';
import IISCursedЭтажLForm from './forms/i-i-s-cursed-этаж-l';
import IISCursedЯчейкаLForm from './forms/i-i-s-cursed-ячейка-l';
import IISCursedДокументEForm from './forms/i-i-s-cursed-документ-e';
import IISCursedЗаказEForm from './forms/i-i-s-cursed-заказ-e';
import IISCursedНакладнаяEForm from './forms/i-i-s-cursed-накладная-e';
import IISCursedРядEForm from './forms/i-i-s-cursed-ряд-e';
import IISCursedСкладEForm from './forms/i-i-s-cursed-склад-e';
import IISCursedСотрудникEForm from './forms/i-i-s-cursed-сотрудник-e';
import IISCursedТоварEForm from './forms/i-i-s-cursed-товар-e';
import IISCursedЭтажEForm from './forms/i-i-s-cursed-этаж-e';
import IISCursedЯчейкаEForm from './forms/i-i-s-cursed-ячейка-e';
import IISCursedДокументModel from './models/i-i-s-cursed-документ';
import IISCursedЗаказModel from './models/i-i-s-cursed-заказ';
import IISCursedЗаписьВНакладнойModel from './models/i-i-s-cursed-запись-в-накладной';
import IISCursedНакладнаяModel from './models/i-i-s-cursed-накладная';
import IISCursedРядModel from './models/i-i-s-cursed-ряд';
import IISCursedСкладModel from './models/i-i-s-cursed-склад';
import IISCursedСотрудникModel from './models/i-i-s-cursed-сотрудник';
import IISCursedСтрокаЗаказаModel from './models/i-i-s-cursed-строка-заказа';
import IISCursedТоварНаСкладеModel from './models/i-i-s-cursed-товар-на-складе';
import IISCursedТоварModel from './models/i-i-s-cursed-товар';
import IISCursedЭтажModel from './models/i-i-s-cursed-этаж';
import IISCursedЯчейкаModel from './models/i-i-s-cursed-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-cursed-документ': IISCursedДокументModel,
    'i-i-s-cursed-заказ': IISCursedЗаказModel,
    'i-i-s-cursed-запись-в-накладной': IISCursedЗаписьВНакладнойModel,
    'i-i-s-cursed-накладная': IISCursedНакладнаяModel,
    'i-i-s-cursed-ряд': IISCursedРядModel,
    'i-i-s-cursed-склад': IISCursedСкладModel,
    'i-i-s-cursed-сотрудник': IISCursedСотрудникModel,
    'i-i-s-cursed-строка-заказа': IISCursedСтрокаЗаказаModel,
    'i-i-s-cursed-товар-на-складе': IISCursedТоварНаСкладеModel,
    'i-i-s-cursed-товар': IISCursedТоварModel,
    'i-i-s-cursed-этаж': IISCursedЭтажModel,
    'i-i-s-cursed-ячейка': IISCursedЯчейкаModel
  },

  'application-name': 'Cursed',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Cursed',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Cursed',
          title: 'Cursed'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        cursed: {
          caption: 'Cursed',
          title: 'Cursed',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-cursed-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          'информация-о-заказе': {
            caption: 'Информация о заказе',
            title: 'Информация о заказе',
            'i-i-s-cursed-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-cursed-документ-l': {
              caption: 'Документ',
              title: ''
            },
            'i-i-s-cursed-накладная-l': {
              caption: 'Накладная',
              title: ''
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-cursed-товар-l': {
              caption: 'Товар',
              title: ''
            },
            'i-i-s-cursed-склад-l': {
              caption: 'Склад',
              title: ''
            },
            'i-i-s-cursed-ряд-l': {
              caption: 'Ряд',
              title: ''
            },
            'i-i-s-cursed-этаж-l': {
              caption: 'Этаж',
              title: ''
            },
            'i-i-s-cursed-ячейка-l': {
              caption: 'Ячейка',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-cursed-документ-l': IISCursedДокументLForm,
    'i-i-s-cursed-заказ-l': IISCursedЗаказLForm,
    'i-i-s-cursed-накладная-l': IISCursedНакладнаяLForm,
    'i-i-s-cursed-ряд-l': IISCursedРядLForm,
    'i-i-s-cursed-склад-l': IISCursedСкладLForm,
    'i-i-s-cursed-сотрудник-l': IISCursedСотрудникLForm,
    'i-i-s-cursed-товар-l': IISCursedТоварLForm,
    'i-i-s-cursed-этаж-l': IISCursedЭтажLForm,
    'i-i-s-cursed-ячейка-l': IISCursedЯчейкаLForm,
    'i-i-s-cursed-документ-e': IISCursedДокументEForm,
    'i-i-s-cursed-заказ-e': IISCursedЗаказEForm,
    'i-i-s-cursed-накладная-e': IISCursedНакладнаяEForm,
    'i-i-s-cursed-ряд-e': IISCursedРядEForm,
    'i-i-s-cursed-склад-e': IISCursedСкладEForm,
    'i-i-s-cursed-сотрудник-e': IISCursedСотрудникEForm,
    'i-i-s-cursed-товар-e': IISCursedТоварEForm,
    'i-i-s-cursed-этаж-e': IISCursedЭтажEForm,
    'i-i-s-cursed-ячейка-e': IISCursedЯчейкаEForm
  },

});

export default translations;
