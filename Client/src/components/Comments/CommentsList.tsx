import React from 'react'
import './styles.css'

export function CommentsList({ comments }: any) {
  return (
    <>
      <h3>Comentários:</h3>
      {comments.map(
        (
          comment: { username: string; text: string },
          key: React.Key | null | undefined,
        ) => (
          <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
        ),
      )}
    </>
  )
}
