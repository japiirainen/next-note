/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NoteId = () => {
   const router = useRouter()
   const { id } = router.query

   return (
      <div sx={{ variant: 'containers.page' }}>
         <h1>Note: {id} </h1>
      </div>
   )
}

export async function getServerSideProps({ params, req, res }) {
   const response = await fetch(`http://localhost:3000/api/notes/${params.id}`)

   if (!response.ok) {
      res.writeHead()
   }
   const note = await response.json()
   return {
      props: {
         note,
      },
   }
}

export default NoteId
