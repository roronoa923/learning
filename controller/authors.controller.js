const authorTable = require("../model/author.model.js");
const booksTable = require("../model/book.model.js");
const db = require("../db/index.js");
const { eq } = require("drizzle-orm");

exports.getAllAuthors = async function (req, res) {
  const authors = await db.select().from(authorTable);
  return res.status(200).json(authors);
};

exports.getAuthorById = async function (req, res) {
  const id = req.params.id;
  const [author] = await db
    .select()
    .from(authorTable)
    .where(eq(authorTable.id, id));
  return res.status(200).json(author);
};

exports.createAuthor = async function (req, res) {
  const { firstName, lastName, email } = req.body;
  const [result] = await db
    .insert(authorTable)
    .values({
      firstName,
      lastName,
      email,
    })
    .returning({
      authorId: authorTable.id,
    });
  return res
    .status(201)
    .json({
      message: "Author created successfully",
      authorId: result.authorId,
    });
};

exports.deleteBookById = async function (req, res) {
  const id = req.params.id;

  await db.delete(authorTable).where(eq(authorTable.id, id));

  return res.status(200).json({
    message: "Author and all related books deleted successfully",
  });
};

exports.getAllAuthorBooks = async function (req, res) {
  const id = req.params.id;
  const [books] = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.authorId, id));
  return res.status(200).json({ books });
};
