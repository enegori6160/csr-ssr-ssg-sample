import { useEffect, useState } from 'react'
import RichTextOnlyContent from '../components/RichTextOnlyContent'

export default function CSR() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then(setPost)
  }, [])

  if (!post) return <p>Loading...</p>

  return <RichTextOnlyContent post={post} />
}
