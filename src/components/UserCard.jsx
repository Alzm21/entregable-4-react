import React from 'react'
import './styles/useCard.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { FiGift } from "react-icons/fi";


const UserCard = ({user, deleteUser, setUpdateUser}) => {

    const handleDelete = () => {
        deleteUser('users', user.id)
    }

    const handleEdit = () => {
        setUpdateUser(user)
    }

/*   console.log(user) */
    return (
    <section className='user'>
        <h2 className='user__name'> {user.first_name} {user.last_name}</h2>
        <hr className='user__line'/>
        <ul className='user__list'>
            <li className='user__item'><span>EMAIL: </span>{user.email}<span></span></li>
            <li className='user__item'><span>BIRTHDAY: </span>{user.birthday}<span></span></li>
        </ul>
        <hr className='user__line'/>
        <div className='user__buttons'>
            <button className='user__btn' onClick={handleDelete}> <RiDeleteBinLine className='icon_del'/></button>
            <button className='user__btn' onClick={handleEdit}><MdModeEdit className='icon_edi'/></button>
        </div>
    </section>
  )
}

export default UserCard