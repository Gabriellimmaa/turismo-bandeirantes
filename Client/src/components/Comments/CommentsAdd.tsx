import React, { useEffect, useState } from 'react'
import './styles.css'
import { IoIosSend } from 'react-icons/io'

export function CommentsAdd() {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    // const addComment = async () => {
    //     const result = await fetch(`/api/articles/${articleName}/add-comment`, {
    //         method: 'post',
    //         body: JSON.stringify({ username, text: commentText }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });
    //     const body = await result.json();
    //     setArticleInfo(body);
    //     setUsername('');
    //     setCommentText('');
    // }

    return (
        <div className="add-comment-form">
            <label>
                Nome:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Insira seu nome"/>
            </label>
            <label>
                Comentário:
                <textarea rows={4} cols={50} value={commentText} onChange={(event) => setCommentText(event.target.value)} placeholder="Digite aqui seu comentário ou crítica construtiva" />
            </label>
            <button><IoIosSend className='mr-2' size={20} /> Enviar</button>
        </div>
    );
}