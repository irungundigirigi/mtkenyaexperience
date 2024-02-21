import Link from 'next/link';
import styles from './nav.module.css';
import {auth,  signIn, signOut } from '../../auth';
import Image from 'next/image';

function SignOut() {
  return (
    <form action={async () => {
      'use server';
      await signOut()
    }}>
      <button className={styles.signOutButton} type="submit">Signout</button>
    </form>
  )
}

function SignIn() {
  return (
    <form action={async () => {
      'use server';
      await signIn()
    }}>
      <button className={styles.signInButton} type="submit">SignIn</button>
    </form>
  )
}

const Navbar = async() => {
  const session =  await auth();

  const handleSignIn = async () => {
    await signIn();
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <Link href="/">
          <span className={styles.logoText}>Mt Kenya Experience </span>
        </Link>
      </div>
      <div className={styles.signIn}>
        {
          session?.user ? (<div className={styles.signOutDiv}> <Image className={styles.userImg} src={session.user.image} width='30' height='30' /> {session.user.name} <SignOut /> </div>) : (
        <SignIn />
        )
        }

      </div>
    </div>
  );
};

export default Navbar;