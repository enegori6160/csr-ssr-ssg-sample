export default function RichTextOnlyContent({ post }) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
  
        {[...Array(5)].map((_, i) => (
          <section key={i}>
            <h2>セクション {i + 1}</h2>
            <p>
              このセクションはFCP/LCP計測のためのダミーテキストです。
              ユーザー体験における描画タイミングを明確に比較できるよう、
              長めのテキストを複数含めています。これが表示されるまでの速度で
              描画方式ごとの違いを把握できます。
            </p>
            <ul>
              <li>これはリスト項目A</li>
              <li>これはリスト項目B</li>
              <li>これはリスト項目C</li>
            </ul>
          </section>
        ))}
  
        <footer>
          <p>※ CSRの場合は、これらのコンテンツが useEffect 経由で後から描画されます。</p>
        </footer>
      </div>
    )
  }
  