import React from "react"
import { AppProps } from "next/app"
import "@styles/global.scss"
import "@styles/reset.scss"
import { RecoilRoot } from "recoil"
import 'react-credit-cards/lib/styles.scss';
import { CreateExhibitionForm } from "@components"
import { HeadingStrong } from "@components/heading-strong"
import { TemplatePage } from "@components/template-page"
import { Unauthorized } from "@components/unauthorized"
import { isLoggedIn } from "axios-jwt"
import Link from "next/link"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      {/* <TemplatePage>
         {isLoggedIn() ? 
                    <>
                    <Link to='/' label='Retour à la connexion' classname={styles.link} />
                    <div className={styles.background} />
                        
                        
                        <div className={styles.heading}>
                        <HeadingStrong elementColor="success" color="black" content="Création d'une oeuvre" size="md" />
                        </div>
                    <CreateExhibitionForm />
         </>
                     :
                <Unauthorized />} 
  </TemplatePage> */}
    </RecoilRoot>
  )
}

export default MyApp
