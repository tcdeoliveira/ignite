import { Client } from "faunadb";

export const fauna = new Client(
    {
        secret:process.env.FOUNA_DB_KEY
    }
);