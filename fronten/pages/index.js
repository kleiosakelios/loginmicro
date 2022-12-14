import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
      <div>
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" className="logo" alt="logo" />
        </a>
        
      </div>
      <h1>SISTEMA LOGIN CON MICROSOFT</h1>
      <div className="card">
        <button
          onClick={() => {
            const popup = window.open(
              "http://localhost:3000/auth/microsoft",
              "targetWindow",
              `toolbar=no,
                 location=no,
                 status=no,
                 menubar=no,
                 scrollbars=yes,
                 resizable=yes,
                 width=620,
                 height=700`
            );

            window.addEventListener("message", (event) => {
              if (event.origin === "http://localhost:3000") {
                if (event.data) {
                  sessionStorage.setItem("user", JSON.stringify(event.data));
                  popup.close();
                }
              }
            });
          }}
        >
          login
        </button>
      </div>
    </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
