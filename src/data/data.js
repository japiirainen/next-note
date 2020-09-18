const notes = new Array(15).fill(1).map((_, i) => ({
   id: Date.now() + i,
   title: `My note number: ${i}`,
}))

module.exports = notes
