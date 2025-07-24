import RichTextOnlyContent from '../components/RichTextOnlyContent'

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post = await res.json()
  return { props: { post } }
}

export default function SSR({ post }) {
  return <RichTextOnlyContent post={post} />
}
