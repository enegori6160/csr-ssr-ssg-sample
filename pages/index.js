import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>比較用トップページ</h1>
      <ul>
        <li><Link href="/ssg">SSGページ</Link></li>
        <li><Link href="/ssr">SSRページ</Link></li>
        <li><Link href="/csr">CSRページ</Link></li>
      </ul>
    </div>
  )
}
