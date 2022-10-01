import './styles.css'
import {BiCalendar} from 'react-icons/bi'
import Modal from '../Modal'


interface ModalAgendamentoProps {
    modalAddIsOpen: boolean
    handleToggleAddOpenModalDelete: () => void
}

interface CardAgendaProps{
    titulo: string
    descricao: string
    data: string
    imagem: string
    onClick: () => void
}


export function ModalDeleteAccount({
    modalAddIsOpen,
    handleToggleAddOpenModalDelete,
}: ModalAgendamentoProps) {
    return (
        <Modal isOpen={modalAddIsOpen} setIsOpen={handleToggleAddOpenModalDelete}>
            <div className='modal-delete-header'>
                <h3>Deletar Conta - {localStorage.getItem("email")}</h3>
                <button type="button" onClick={handleToggleAddOpenModalDelete}>
                    <b>X</b>
                </button>
            </div>
            <p>Você tem certeza que deseja deletar sua conta?</p>
            <form className="modal-delete-form">
                <input
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    type="password"
                />
                <span id="status" className='text-yellow-500'></span>
                <input
                    id="submit"
                    name="submit"
                    type="submit"
                    value="EXCLUIR CONTA"
                />
            </form>
        </Modal>
    )
}

export function CardAgenda({ titulo, descricao, data, imagem, onClick }: CardAgendaProps) {
    return (
        <div className="card-agenda w-full hover:cursor-pointer hover:shadow-lg hover:bg-gray-100 transition-all" onClick={onClick}>
            <div className='card-agenda-container'>
                <div className='flex justify-center w-full'>
                    <img src={imagem} />
                </div>
                <div className='overflow-auto'>
                    <h1>{titulo}</h1>
                    <p><BiCalendar size={20} /> {data}</p>
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    )
}
