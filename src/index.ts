import 'reflect-metadata';
import {connect} from './config/typeorm'
import {start} from './app'
import cors from 'cors'

async function main(){
    connect();
    const app = await start();
    app.use(cors);
    app.listen(4000)
    console.log('Server on port', 4000);
}

main();