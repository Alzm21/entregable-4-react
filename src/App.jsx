import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'
import { LuPlus } from "react-icons/lu";

function App() {

  const urlBase = ('https://users-crud.academlo.tech/')

  const [isOpen, setIsOpen] = useState(false)
  const [updateUser, setUpdateUser] = useState() // This state is in App bc we are doing a bridge between the sons across the father
  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase)
  
  useEffect(() => {
    const path = 'users'
    getUsers(path)
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }
  console.log(users)
  
  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>Project 4 - Harry Potter Users</h1>
        <button className='create_btn' onClick={handleOpen}><LuPlus /> Create new user</button>
      </header>
      <UserForm
        createUser = {createUser}
        updateUser={updateUser}
        editUser={editUser}
        setUpdateUser={setUpdateUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='app__container'>
        {
          users?.map((user) => (
            
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdateUser={setUpdateUser}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App

