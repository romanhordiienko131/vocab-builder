import { Logo } from '../components/common/Logo.tsx';
import { RegisterForm } from '../components/forms/RegisterForm.tsx';
import { LoginForm } from '../components/forms/LoginForm.tsx';
import clsx from 'clsx';
import { Container } from '../components/common/Container.tsx';
import { AuthMetaData } from '../components/common/AuthMetaData.tsx';

interface AuthPageProps {
  type: 'register' | 'login';
}

export default function AuthPage({ type }: AuthPageProps) {
  const renderForm = () => {
    return type === 'register' ? <RegisterForm /> : <LoginForm />;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Container>
        <div className="tb:pt-6 pt-4">
          <Logo />
        </div>
      </Container>

      <main className="max-dt:items-center max-tb:justify-end tb:bg-[url(/images/auth-bg.webp)] flex grow flex-col bg-bottom-right bg-no-repeat pt-3">
        {/* mobile */}
        <div className="tb:hidden w-full">
          <div className={type === 'login' ? 'mb-[2.688rem]' : 'mb-2'}>
            <img
              aria-hidden={true}
              src="/images/auth-mob-1x.webp"
              alt=""
              srcSet="/images/auth-mob-1x.webp 1x, /images/auth-mob-2x.webp 2x"
              className={clsx('mx-auto', type === 'login' && 'mb-4')}
            />
            {type === 'login' && <AuthMetaData />}
          </div>

          {renderForm()}
        </div>

        {/* tablet */}
        <div className="tb:block dt:hidden hidden pt-[8.75rem] pb-6">
          <div className="mb-24.5 max-w-[39.313rem]">{renderForm()}</div>
          <AuthMetaData />
        </div>

        {/* desktop */}
        <div
          className={clsx(
            'dt:block hidden',
            type === 'register' ? 'pt-16' : 'pt-[7.125rem]',
          )}
        >
          <Container>
            <div className="flex gap-20">
              <div className="max-w-[39.313rem]">{renderForm()}</div>

              <div
                className={clsx(
                  type === 'register' ? 'pt-[2.438rem]' : 'pb-[3.375rem]',
                )}
              >
                <img
                  aria-hidden={true}
                  src="/images/auth-desk-1x.webp"
                  alt=""
                  srcSet="/images/auth-desk-1x.webp 1x, /images/auth-desk-2x.webp 2x"
                  className="mb-4"
                />
                <AuthMetaData />
              </div>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}
