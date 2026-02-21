const { integer, pgTable, varchar, uuid, text } =  require("drizzle-orm/pg-core")
const authorTable = require("./author.model.js")

const booksTable = pgTable('books',{
   id: uuid().primaryKey().defaultRandom(),
   title: varchar({length: 255}).notNull(),
   description: text(),  
   authorId: uuid().references(()=>authorTable.id,{onDelete:"cascade"}).notNull()
})

module.exports = booksTable