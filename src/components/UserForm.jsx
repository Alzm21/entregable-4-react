import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/useForm.css'


const UserForm = ({createUser, updateUser, editUser, setUpdateUser, isOpen, setIsOpen}) => {
    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
            setIsOpen(true)
        }
    }, [updateUser])
    

    const submit = data => {
        if (updateUser) {
            editUser('users', data, updateUser.id)
            setUpdateUser()
        } else {
            createUser('users', data)
        }
        setIsOpen(false)
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }

    const handleClose = () => {
        setIsOpen(false)
        setUpdateUser()
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }
  return (
    <div className={`form__back ${isOpen && 'active'}`}>
        <form className='form' onSubmit={handleSubmit(submit)}>

            <button onClick={handleClose} type='button' className='form__close'>X</button>
            <h2 className='form__title'> New user</h2>
            <div className='form__item'>
                <label htmlFor="first_name">First name</label>
                <input {...register('first_name')} id='first_name' type="text" placeholder='First name*'/>
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">Last name</label>
                <input {...register('last_name')}  id='last_name' type="text" placeholder='Last name*'/>
            </div>
            <div className='form__item'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="text" placeholder='Email*'/>
            </div>
            <div className='form__item'>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id='password' type="password" placeholder='Password*'/>
            </div>
            <div className='form__item'> 
                <label htmlFor="birthday">Birthday</label>
                <input {...register('birthday')}  id='birthday' type="date" />
            </div>
            {
            updateUser ? (
                    <button className='form__btn'>Save changes</button>
                ) : (
                    <button className='form__btn'>Add new user</button>
                )
            }
        </form>
    </div>
  )
}

export default UserForm