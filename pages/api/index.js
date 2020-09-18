import nc from 'next-connect'

const handler = nc()
   .get((req, res) => {
      res.json({ message: 'GET' })
   })
   .post((req, res) => {
      res.json({ message: 'POST' })
   })

export default handler
