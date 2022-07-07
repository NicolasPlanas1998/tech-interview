function FindWordStartingWith (book, query) {

  const text = book.text.toLowerCase() // Para que sea case insensitive
  const result = []

  for(let i = 0 ; i < text.length ; i ++){
    // me va a ir cortando para poder comparar con query
    const sliced = text.slice(i, i+ query.length) 
   //Pongo estas condiciones porque solo quiero saber de aquellas palabras que arrancan con ese query
    if(sliced === query && (text[i -1] === " " || i === 0)) result.push(i)
    
  }
  return result
}

const book = {
  id: 1,
  text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas",
};

console.log(FindWordStartingWith(book, "un"))

module.exports = FindWordStartingWith
