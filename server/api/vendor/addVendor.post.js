import knex from "~/server/knex.config";

export default defineEventHandler(async (event) => {
  
  try {

    const {
      bookName: nama,
      bookSynopsis: sinopsis,
      bookAuthor: pengarang,
    } = await readBody(event);

    if(!nama || !pengarang){
      return{
        statusCode: 400,
        message: "Nama dan Pengarang harus didisi",
      };
    }

    const insertBook = await knex
    .connect("book")
    .insert({
      bookName: nama,
      bookSynopsis: sinopsis,
      bookAuthor: pengarang,
    });

    // const user = await knex
    // .connect("user")
    // .insert()

  return {
    statusCode: 200,
    message: "Data Berjaya ditambah",
    data: insertBook,
  };
  } catch (error) {
      result = {
        message: "Error ni boh",
      }
  }

});
