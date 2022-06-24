import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { TemplatePage, HeadingStrong, Stepper, Link, Input, Artwork  } from "@components"
import { IStep } from "../../src/components/stepper"
import styles from './index.module.scss'
import image from '../../src/assets/images/artwork.png'
=======
import { TemplatePage, Text, HeadingStrong, Stepper, Link  } from "@components"
import { IStep } from "../../src/components/stepper"
import styles from './index.module.scss'
>>>>>>> 88e7ba0 (passe d alexanne)
=======
import { TemplatePage, HeadingStrong, Stepper, Link, Input, Artwork  } from "@components"
import { IStep } from "../../src/components/stepper"
import styles from './index.module.scss'
import image from '../../src/assets/images/artwork.png'
>>>>>>> a66858c (ADD Inputs and artwork component)
=======
import { TemplatePage, HeadingStrong, Stepper, Link, Input, Artwork, CreateExhibitionForm  } from "@components"
import { IStep } from "../../src/components/stepper"
import styles from './index.module.scss'
>>>>>>> 6586fea (added create-exhibition, ( je crois que c'est bon je suis pas sur les amis))

const STEPS = [
    {
        id: 1,
        label: "Step 1",
        number: 1,
        completed: false,
    },
    {
        id: 2,
        label: "Step 2",
        number: 2,
        completed: false,
    },
    {
        id: 3,
        label: "Step 3",
        number: 3,
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
return (
    <TemplatePage isLogged={true}>
        {/* PAGE CONTENT */}
         <Link to='/' label='Retour à la connexion' classname={styles.link2}/>
        <div className={styles.test2}>
            <HeadingStrong elementColor="success" color="black" content="Création d'une oeuvre" size="md" />
            <Stepper activeStep={activeStep} steps={steps} completeOne={completeStep}/>

            <Artwork src={image} alt={"test"} size={"small"}/>

            <label htmlFor="exhibitionTitle">Titre de l'exposition</label>
            <Input type='text' placeholder='Ex : La méduse sur le radeau' id={"exhibitionTitle"} value={"Titre"} register={undefined}/>

            <label htmlFor="exhibitionDescription">Descriptif de l'exposition</label>
            <Input type='text' placeholder='Deescription de mon exposition' id={"exhibitionDescription"} value={"Titre"} register={undefined}/> 
            <HeadingStrong elementColor="success" color="black" content="Création d'une oeuvre" size="md" /> 
        </div>
         <CreateExhibitionForm />
    </TemplatePage>
)
}

export default CreateExhibition;