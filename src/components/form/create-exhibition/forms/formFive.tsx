import React, { useState } from "react";
import Cards from 'react-credit-cards';
import styles from "./formFive.module.scss";
import cx from "classnames";
import { Button, InputGroup, InputDropdown, Icon, Text, InputCard} from "@components";
import { useForm } from "react-hook-form";

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  onClick: (any) => void;
  defaultValues?: any;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}

export const FormFive: React.FC<IProps> = ({ handleStepSubmit, defaultValues = {} }) => {

  const [orientation, setOrientation] = useState<string>('landscape')
  const [cardNumber, setCardNumber] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardName, setCardName] = useState('')

  // const handleInputFocus = (event) => {
  //   setCardInfos((previousState) => {
  //     const newCardState = { ...previousState };
  //     newCardState.focus = event.target.name;
  //     return newCardState;
  //    })
  // }


  const handleNumberChange = (e) => {
    console.log(cardCvc)
    setCardNumber(e.target.value)
  }
  const handleCvcChange = (e) => {
    setCardCvc(e.target.value)
  }
  const handleExpiryChange = (e) => {
    setCardExpiry(e.target.value)
  }
  const handleNameChange = (e) => {
    setCardName(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (event: any) => {
    event.preventDefault();

    handleSubmit((data) => {
      handleStepSubmit(data);
    })(event);
  };



  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <div className={styles.board}>
        <p className={styles.board__text}> 
          Montant à régler:
        </p>
        <p className={styles.board__price}>127,05€</p>
      </div>

      <label htmlFor="cardType">Liste des cartes enregistrées</label>
      {/* <InputDropdown control={undefined} id={"cardType"} placeholder={"Sélectionner la carte"} required={false} /> */}


      <img src="../../../../assets/images/BankCard.png" alt="" />

      <div id="PaymentForm">
        <Cards
          cvc={cardCvc}
          expiry={cardExpiry}
          focused={true}
          name={cardName}
          number={cardNumber}
        />
        
      </div>
      <form className={styles.form}>

  
      {/* id, name, placeholder, type, register, required, label, onChangeMethod */}
      <InputCard
        id={1}
        name="CardName"
        placeholder="John Doe"
        type="text"
        // register={register}
        required={true}
        label={"Nom du titulaire de la carte"}
        onChangeMethod={handleNameChange}
      />


<InputCard
        id={1}
        type="number"
        name="CardNumber"
        placeholder="0000000000000000"
        // register={register}
        required={true}
        label={"Numéros de carte"}
        onChangeMethod={handleNameChange}
      />
  

      <div className={styles.flexWrapper}>
      <InputCard
        id={1}
        type="number"
        name="CardNumber"
        placeholder="0000000000000000"
        // register={register}
        required={true}
        label={"Numéros de carte"}
        onChangeMethod={handleNameChange}
      />
      <InputCard
      id={1}
      type="number"
      name="CardNumber"
      placeholder="0000000000000000"
      // register={register}
      required={true}
      label={"Date d’expiration"}
      onChangeMethod={handleExpiryChange}
    />
      </div>


        </form>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
