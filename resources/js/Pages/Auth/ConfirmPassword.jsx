import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders a password confirmation form within a guest layout.
 * The user is required to confirm their password to access secure areas
 * of the application. The form submission triggers a password confirmation
 * request. Displays input errors if the password is incorrect.
 */

/*******  657901ff-dc90-43fb-abbb-5065a87557ba  *******/ import { useEffect } from 'react';

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('password.confirm'));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Card>
          <CardHeader>
            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
              Plannify<span className="text-red-500">.</span>
            </Link>
            <h2 className="text-left text-lg font-medium leading-9 tracking-tight text-muted-foreground">
              This is a secure area of the application. Please confirm your password before continuing.
            </h2>
          </CardHeader>
          <CardContent>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={submit}>
                {/* form */}

                <div>
                  <InputLabel htmlFor="password" value="Password" />
                  <TextInput
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('password', e.target.value)}
                    onErrors={errors.password && <InputError message={errors.password} className="mt-2" />}
                  />
                </div>

                <div>
                  <Button type="submit" variant="red" className="w-full" disabled={processing}>
                    Confirm
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

ConfirmPassword.layout = (page) => <GuestLayout children={page} title="Confirm Password" />;
