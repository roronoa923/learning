const { pgTable, varchar, uuid, } =  require("drizzle-orm/pg-core")
const authorTable = pgTable('authors',{
    id: uuid().primaryKey().defaultRandom(),
    firstName: varchar({length: 55}).notNull(),
    lastName: varchar({length: 55}),
    email: varchar({length: 55}).unique().notNull()
})

module.exports = authorTable