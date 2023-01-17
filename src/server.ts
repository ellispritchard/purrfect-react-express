import { app } from './app';
import { config } from  './config';

config.validate();

const PORT = config.get('server.port');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});
