import RichTextOnlyContent from '../components/RichTextOnlyContent'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post = await res.json()
  return { props: { post } }
}

export default function SSG({ post }) {
  return <RichTextOnlyContent post={post} />
}

