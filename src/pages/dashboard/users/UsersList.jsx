import { Hamburger, UserTable, SEO } from '@/components'

const UsersList = () => {

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
        data={[]}
        isLoading={false}
      />
    </>
  )
}

export default UsersList