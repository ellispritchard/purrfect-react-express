import dotenv from 'dotenv';
import convict from 'convict';

dotenv.config();

export const config = convict({
    server: {
        port: {
            format: 'port',
            default: 3000,
            env: 'PORT',
        },
    },
    airtable: {
        base: {
            format: String,
            env: 'AIRTABLE_BASE',
            default: null,
        },
        apiKey: {
            format: String,
            env: 'AIRTABLE_API_KEY',
            default: null,
        },
        tables: {
            orders: {
                format: String,
                env: 'AIRTABLE_TABLE_ORDERS',
                default: 'orders',
            },
        }
    }
});
