import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-cursed-документ-l');
  this.route('i-i-s-cursed-документ-e',
  { path: 'i-i-s-cursed-документ-e/:id' });
  this.route('i-i-s-cursed-документ-e.new',
  { path: 'i-i-s-cursed-документ-e/new' });
  this.route('i-i-s-cursed-заказ-l');
  this.route('i-i-s-cursed-заказ-e',
  { path: 'i-i-s-cursed-заказ-e/:id' });
  this.route('i-i-s-cursed-заказ-e.new',
  { path: 'i-i-s-cursed-заказ-e/new' });
  this.route('i-i-s-cursed-накладная-l');
  this.route('i-i-s-cursed-накладная-e',
  { path: 'i-i-s-cursed-накладная-e/:id' });
  this.route('i-i-s-cursed-накладная-e.new',
  { path: 'i-i-s-cursed-накладная-e/new' });
  this.route('i-i-s-cursed-ряд-l');
  this.route('i-i-s-cursed-ряд-e',
  { path: 'i-i-s-cursed-ряд-e/:id' });
  this.route('i-i-s-cursed-ряд-e.new',
  { path: 'i-i-s-cursed-ряд-e/new' });
  this.route('i-i-s-cursed-склад-l');
  this.route('i-i-s-cursed-склад-e',
  { path: 'i-i-s-cursed-склад-e/:id' });
  this.route('i-i-s-cursed-склад-e.new',
  { path: 'i-i-s-cursed-склад-e/new' });
  this.route('i-i-s-cursed-сотрудник-l');
  this.route('i-i-s-cursed-сотрудник-e',
  { path: 'i-i-s-cursed-сотрудник-e/:id' });
  this.route('i-i-s-cursed-сотрудник-e.new',
  { path: 'i-i-s-cursed-сотрудник-e/new' });
  this.route('i-i-s-cursed-товар-l');
  this.route('i-i-s-cursed-товар-e',
  { path: 'i-i-s-cursed-товар-e/:id' });
  this.route('i-i-s-cursed-товар-e.new',
  { path: 'i-i-s-cursed-товар-e/new' });
  this.route('i-i-s-cursed-этаж-l');
  this.route('i-i-s-cursed-этаж-e',
  { path: 'i-i-s-cursed-этаж-e/:id' });
  this.route('i-i-s-cursed-этаж-e.new',
  { path: 'i-i-s-cursed-этаж-e/new' });
  this.route('i-i-s-cursed-ячейка-l');
  this.route('i-i-s-cursed-ячейка-e',
  { path: 'i-i-s-cursed-ячейка-e/:id' });
  this.route('i-i-s-cursed-ячейка-e.new',
  { path: 'i-i-s-cursed-ячейка-e/new' });
});

export default Router;
