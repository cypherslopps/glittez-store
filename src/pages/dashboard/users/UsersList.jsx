import { Hamburger, UserTable, SEO } from '@/components'
import axios from '@/lib/axios';
import { useEffect, useState } from 'react'

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const request = await axios("/users");
        const response = request.data;
        setUsers(prev => ([
          ...prev,
          ...response
        ]))
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <SEO 
        title="Products"
        description="Products Overview"
      />

      <header className='flex items-center justify-between mb-7'>
        <h1 className='text-xl font-extrabold uppercase tracking-tight'>Users</h1>
        <Hamburger />
      </header>

      <UserTable 
        data={users}
        isLoading={isLoading}
      />
    </>
  )
}

export default UsersList