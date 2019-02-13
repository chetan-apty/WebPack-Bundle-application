import { add, mul, sub } from './nav';
import { logger, addHTMLElement } from './foo';
import './foo.css';

console.log('Process', process.env.NODE_ENV);

addHTMLElement('button');

addHTMLElement('p');
addHTMLElement('div')


logger('Hello Webpack! Chaitanya!!!', sub(1,2));