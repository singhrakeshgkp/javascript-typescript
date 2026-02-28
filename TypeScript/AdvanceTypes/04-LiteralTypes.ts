/* 1. used to restrict variable value ex. lets say i have a variable name quantity and want it to be either 20 or 30 only */

/* let quantity:20 | 30 = 30; */
//OR
type QUANTITY =  20 | 30;
let quantity: QUANTITY = 20;

/* 2. apply same literal type in string */
type TemperatureUnit = 'Celsius' | 'Fahrenheit' | 'Kelvin';
let temperatureUnit : TemperatureUnit = 'Celsius';

