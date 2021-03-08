import config from '../../../config';
import OfflineCoffeeService from './OfflineCoffeeService';
import OnlineCoffeeService from './OnlineCoffeeService';

export const coffeeService = config.online && config.hubdb ? new OnlineCoffeeService() : new OfflineCoffeeService();
