
import React, {  useState } from "react";
import styles from "./index.module.scss";
import { Button,  InputGroup,  InputCustomDouble, Tooltip } from "@components";
import { useForm } from "react-hook-form";

const toolTipText = "Toutes les informations qui figurent dans ces champs ont été prises sur le profil. Si vous voulez les modifier, merci de vous rendre sur votre profil"
export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
  amountOfAdditionalLinks: Array<string>;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}

export const FormTwo: React.FC<IProps> = ({
    handleStepSubmit,
    defaultValues = {},
  }: IProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ mode: "onBlur", defaultValues });

    const [amountOfAdditionalLinks, setAmountOfAdditionalLinks] = useState<any>([])
    const handleAddLink = () => {
     setAmountOfAdditionalLinks([...amountOfAdditionalLinks, `id-${amountOfAdditionalLinks.length + 1}`])
    }
    const handleRemoveLink = (idFieldValue: string, e: any) => {    
         console.log('this is ==== id' , idFieldValue);
          setAmountOfAdditionalLinks(amountOfAdditionalLinks.filter(value => value !== idFieldValue))
      }

    
    const onSubmit = (e: any) => {
      e.preventDefault();
  
      handleSubmit((d) => {
        console.log(d);
        handleStepSubmit(d);
      })(e);
    };
  
    return (
      <>
        <div className={styles.toolTip}>
          <Tooltip text={toolTipText} icon="info" type="info" />
        </div>
        <form className={styles.formContainer} onSubmit={onSubmit}>

          <InputGroup
            placeholder="https://facebook.com/mon-profil"
            register={register}
            required={true}
            id="title"
            type="text"
            label="URL de mon profil Facebook"
            guidance={
              errors.title
                ? {
                    type: "error",
                    message:
                      "Le titre doit être rempli pour passer à l’étape suivante",
                  }
                : null
            }
          />
          <InputGroup
            placeholder="https://twitter.com/mon-profil"
            register={register}
            id="description"
            type="text"
            label="URL de mon profil Twitter"
            guidance={null}
          />
          <InputGroup
            placeholder="https://mon-site-personnel.com/"
            register={register}
            id="description"
            type="text"
            label="URL de mon site personnel"
            guidance={null}
          />
            <InputGroup
              placeholder="https://mon-portoflio.com/"
              register={register}
              id="description"
              type="text"
              label="URL de mon portfolio"
              guidance={null}
            />
          <InputGroup
            placeholder="https://ma-boutique-en-ligne.com/"
            register={register}
            id="description"
            type="text"
            label="URL de ma boutique en ligne"
            guidance={null}
          />

      {
        amountOfAdditionalLinks.length > 0 && 
        amountOfAdditionalLinks.map((el, indexInLinks) => {
          return (
            <>
              <InputCustomDouble
                key={indexInLinks}
                customInputTitle="Lien personnel additionnel"
                idDescription={`description-${indexInLinks}`}
                placeholder="Intitulé du lien/"
                idFieldValue={amountOfAdditionalLinks[indexInLinks]}
                fieldValuePlaceHolder="https://lien-personnel.com/"
                register={register}
                handleRemoveLink={handleRemoveLink}            
              />
        </>
      )
        })
      }
      <Button label={"Ajouter un lien personnel"} color="black" bg="light" type="button" onClick={handleAddLink}/>


          <div className={styles.ctaContainer}>
            <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
            <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
          </div>
        </form>
      </>
    );
  };