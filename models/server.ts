import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors';
import db from '../db/conexion';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/Usuarios',
        productos: '/api/productos',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConection(); 
        this.middlewares(); 

        this.routes();
    }

    async dbConection() { 
        try {
            await db.authenticate();
            console.log('Database Online');
        } catch (error: any) { 
            console.error('Error connecting to the database:', error.message);
            throw new Error(error.message);
        }
    }

    middlewares() { 
        
        this.app.use(cors());

      
        this.app.use(express.json());

       
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!!! ' + this.port);
        });
    }
}

export default Server;
