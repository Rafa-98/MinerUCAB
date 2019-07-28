import keys from './key';
import pg from 'pg';

const pg_d = new pg.Client(keys.database);

pg_d.connect().then(response => {
    console.log('DataBase is connected');
});

export default pg_d;