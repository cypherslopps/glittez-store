import { Hamburger, SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'

const Settings = () => {
  const { data: emailData, handleChange: emailHandler, errors: emailErrors } = useForm({
    email: ""
  });
  const { data: passwordData, handleChange: passwordHandler, errors: passwordErrors } = useForm({
    old_password: "",
    new_password: "",
    confirm_new_password: ""
  });
  
  return (
    <>
      <SEO 
        title="Settings"
        description="User Configuration Settings"
      />

      <main>
        <header className='flex items-center justify-between mb-7'>
          <h1 className='text-xl font-extrabold uppercase tracking-tight'>Settings</h1>
          <Hamburger />
        </header>

        <section className='border border-gray-400/30 px-5 py-3.5 rounded-xl shadow-sm shadow-black/10 space-y-4 mb-7'>
          <h4 className='text-md font-bold'>Change Email</h4>

          <form className='flex flex-col gap-y-2.5'>
            <Input 
              type="email"
              label="Email"
              name="email"
              value={emailData.email}
              onChange={emailHandler}
              error={emailErrors.email}
            />

            <Button className="w-max">Update email</Button>
          </form>
        </section>

        <section className='border border-gray-400/30 px-5 py-3.5 rounded-xl shadow-sm shadow-black/10 space-y-4'>
          <h4 className='text-md font-bold'>Change Password</h4>

          <form className='flex flex-col gap-y-3.5'>
            <Input 
              type="password"
              label="Old Password"
              name="old_password"
              value={passwordData.old_password}
              onChange={passwordHandler}
              error={passwordErrors.old_password}
            />

            <Input 
              type="password"
              label="New Password"
              name="new_password"
              value={passwordData.new_password}
              onChange={passwordHandler}
              error={passwordErrors.new_password}
            />

            <Input 
              type="password"
              label="Confirm New Password"
              name="confirm_new_password"
              value={passwordData.confirm_new_password}
              onChange={passwordHandler}
              error={passwordErrors.confirm_new_password}
            />

            <Button className="w-max">Update password</Button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Settings