const booksTable = require("../model/book.model.js");
const db = require("../db/index.js");
const { eq } = require("drizzle-orm");
exports.getAllBooks = async function (req, res) {
  const books = await db.select().from(booksTable);
  res.status(201).json(books);
};

exports.getBookById = async function (req, res) {
  const id = req.params.id;
  const [book] = await db
    .select()
    .from(booksTable)
    .where((table) => eq(table.id, id))
    .limit(1);
  if (!book) {
    return res
      .status(404)
      .json({ message: `Book with this id ${id} does not exist` });
  }
  return res.json(book);
};

exports.createBook = async function (req, res) {
  const { title, description, authorId } = req.body;
  if (!title || title === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const [result] = await db
    .insert(booksTable)
    .values({
      title,
      authorId,
      description,
    })
    .returning({
      id: booksTable.id,
    });
  return res
    .status(201)
    .json({ message: "Book created successfully", id: result.id });
};

exports.deleteBookById = async function (req, res) {
  const id = req.params.id;
  const [result] = await db.delete(booksTable).where(eq(booksTable.id,id));
  if (result.length === 0) {
  return res.status(404).json({ message: "Book not found" });
}
  return res.status(200).json({ message: "Book deleted successfully" });
};
