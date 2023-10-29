import React from 'react'

const Detail = () => {
  return (
    <div>
      {posts.length === 0 ? <p>carregando....</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>Nome: {post.title}</h2>
          </div>
        ))

      )}
    </div>
  )
}

export default Detail;