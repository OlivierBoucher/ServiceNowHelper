import Angular from 'angular';
import Router from 'angular-route';
import Config from './config'
import LoginController from './controllers/login.controller';
import NowService from './services/now.service';

var app = Angular.module('app', [Router])
    .config(Config)
    .controller('LoginController', LoginController)
    .service('NowService', NowService.NowFactory);


