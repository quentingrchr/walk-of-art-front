import React from 'react';
import { isLoggedIn } from 'axios-jwt'
import { TemplatePage, HeadingStrong, CreateExhibitionForm, Link, Input, Artwork, Unauthorized  } from "@components"
import { IStep } from "../../../src/components/stepper"
import styles from './index.module.scss'
import { windowIsNotReady } from '../../../src/utility'

const STEPS = [
        {
          id: 1,
          label: "Identification",
          number: 1,
          completed: false,
        },
        {
          id: 2,
          label: "Fichiers",
          number: 2,
          completed: false,
        },
        {
          id: 3,
          label: "Récapitulatif",
          number: 3,
          completed: false,
        },
        {
            id: 4,
            label: "Identification",
            number: 4,
            completed: false,
          },
          {
            id: 5,
            label: "Identification",
            number: 5,
            completed: false,
          },
    
]

const CreateExhibition: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState<number>(0)
    const [steps, setSteps] = React.useState<IStep[]>(STEPS)

    const completeStep = (index: number) => {
        setSteps(steps.map((step, i) => {
            if (i === index) {
                return {
                    ...step,
                    completed: true,
                }
            }
            return step
        }))
    }

    if(windowIsNotReady()) {
        return null
    }

    return (
        <TemplatePage>
            {isLoggedIn() ? 
                    <>
                    <Link to='/' label='Retour à la connexion' classname={styles.link} />
                    <div className={styles.background} />
                        
                        <div className={styles.heading}>
                        <HeadingStrong elementColor="success" color="black" content="Création d'une oeuvre" size="md" />
                        </div>
                    <CreateExhibitionForm activeStep={activeStep} steps={steps} completeOne={completeStep} setActiveStep={setActiveStep} />
                    </>
                     :
                <Unauthorized />}
        </TemplatePage>
    )
}

export default CreateExhibition