import Airtable from 'airtable';
import { config } from '../config';

export const base = Airtable.base(config.get('airtable.base') || '');

export const orders = base.table(config.get('airtable.tables.orders') || 'orders');
