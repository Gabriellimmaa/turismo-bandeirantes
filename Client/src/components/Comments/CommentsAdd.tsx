import React, { useEffect, useState } from 'react'
import './styles.css'
import { IoIosSend } from 'react-icons/io'
import apiLocal from '../../services/apiLocal'
import axios from 'axios'

interface CommentsAddProps {
    type: "turismo" | "hotel" | "restaurante"
    id: string | number | undefined,
    setInfo: any

}

export function CommentsAdd({ type, id, setInfo }: CommentsAddProps) {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');
    const [body, setBody] = useState({});

    const addComment = async () => {        
        const result = await fetch(`http://localhost:8000/api/${type}/${id}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <div className="add-comment-form">
            <label>
                Nome:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Insira seu nome" />
            </label>
            <label>
                Comentário:
                <textarea rows={4} cols={50} value={commentText} onChange={(event) => setCommentText(event.target.value)} placeholder="Digite aqui seu comentário ou crítica construtiva" />
            </label>
            <button onClick={() => addComment()}><IoIosSend className='mr-2' size={20} /> Enviar</button>
        </div>
    );
}