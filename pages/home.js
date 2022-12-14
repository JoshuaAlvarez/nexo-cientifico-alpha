import Image from 'next/image'
import React from 'react'
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Head from 'next/head';
import { getProviders, signIn } from 'next-auth/react'

function Home({ providers }) {
  return (
    <div className='space-y-10 relative'>
      <Head>
        <title>Nexo Científico - Acceso</title>
        <meta name="description" content="Accede a tu cuenta en el mejor sitio de divulgación de ciencia en español" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex justify-around items-center py-4'>
        <div className='relative w-36 h-10'>
          <Image
            src='https://www.svgrepo.com/show/61264/science.svg'
            layout='fill'
            objectFit='contain'
            alt='logo'
          />
        </div>
        <div className='flex items-center sm:divide-x divide-gray-400'>
          <div className='hidden sm:flex space-x-8 pr-4'>
            <HeaderLink Icon={ExploreIcon} text="Explora el Nexo" />
            <HeaderLink Icon={GroupIcon} text="Divulgadores" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Recursos" />
            <HeaderLink Icon={BusinessCenterIcon} text="Eventos" />
          </div>

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className='pl-4'>
                <button
                  className='text-blue-700 font-semibold rounded-full border border-blue-800 px-5 py-1.5 transition-all hover:border-2'
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Inicia sesión
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className='flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto'>
        <div className='space-y-6 xl:space-y-10'>
          <h1 className='text-3xl md:text-5x1 text-amber-800/80 max-w-xl !leading-snug pl-4 x1:pl-0'>
            Bienvenido al mejor sitio para divulgadores de ciencia en español
          </h1>
          <div className='space-y-4'>
            <div className='intent'>
              <h2 className='text-x1'>Busca un evento cercano</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-800' />
            </div>
            <div className='intent'>
              <h2 className='text-x1'>Encuentra a un divulgador</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-800' />
            </div>
            <div className='intent'>
              <h2 className='text-x1'>Explora los temas de investigación</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-800' />
            </div>
          </div>
        </div>

        <div className='relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5'>
          <Image src='https://www.svgrepo.com/show/91776/photographer.svg' layout='fill' alt='' priority />
        </div>
      </main>
    </div>
  );
}

export default Home

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}