import { JwtPayload } from 'jsonwebtoken';

declare module 'hono' {
    interface HonoRequest {
        user?: string | JwtPayload;
    }
}

export type Bindings = {
    DATABASE_URL: string
    JWT_SECRET_KEY: string
    CLIENT_URL:string
}

