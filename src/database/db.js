import { readFileSync } from 'fs'
import { join } from 'path'
import Database from 'better-sqlite3'

const db = new Database('db.sqlite')

const schemaPath = join('src', 'database', 'schema.sql')
const schema = readFileSync(schemaPath, 'utf-8')
db.exec(schema)

export default db
