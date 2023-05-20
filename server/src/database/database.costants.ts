import * as os from 'os'
const systemOs =  os.type()

export const dataBaseConstants  = {
    db: "postgres" as "postgres",
    hostProd: "db",
    hostDev: systemOs === "Windows_NT"? "localhost":"db",
    port: 5432,
    user: "user01",
    password: "qwertyui",
    nameDb: "test",


}