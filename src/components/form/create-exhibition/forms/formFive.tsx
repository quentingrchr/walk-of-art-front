import React, { useState } from "react";
import Cards from 'react-credit-cards';
import styles from "./formThree.module.scss";
import { Button, InputGroup, InputDropdown } from "@components";
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
      <div className={styles.boardOrientation}>
        <p>
          Montant à régler
        </p>
        <p>Montant</p>
      </div>

      <label htmlFor="cardType">Liste des cartes enregistrées</label>
      {/* <InputDropdown control={undefined} id={"cardType"} placeholder={"Sélectionner la carte"} required={false} /> */}


      <img src="../../../../assets/images/BankCard.png" alt="" />

      {/* <InputGroup
        placeholder="John Doe"
        register={register}
        id="description"
        type="text"
        label="Nom du titulaire de la carte"
        guidance={null}
      />

      <InputGroup
        placeholder="0000 - 0000 - 0000 - 0000"
        register={register}
        id="description"
        type="text"
        label="Numéros de carte"
        guidance={null}
      /> */}

      {/* <div>
        <InputGroup
          placeholder="00/0000"
          register={register}
          id="description"
          type="text"
          label="Date d’expiration"
          guidance={null}
        />

        <InputGroup
          placeholder="000"
          register={register}
          id="description"
          type="text"
          label="CVC"
          guidance={null}
        />
      </div> */}
  {/* // LES ID COMME CA EN REACT C'EST NON DANS 99% DES CAS */}
      <div id="PaymentForm">
        <Cards
          cvc={cardCvc}
          expiry={cardExpiry}
          focused={true}
          name={cardName}
          number={cardNumber}
        />
        
      </div>
      <form>
          <input
            type="number"
            name="Cardnumber"
            placeholder="Card Number"
            onChange={handleNumberChange}
          />
          <input
            type="number"
            name="Cardcvc"
            placeholder="Card Cvc"
            onChange={handleCvcChange}
          />
          <input
            type="number"
            name="Cardexpiry"
            placeholder="Card Expiry"
            onChange={handleExpiryChange}
          />
          <input
            type="number"
            name="Cardname"
            placeholder="Card Name"
            onChange={handleNameChange}
          />
        </form>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
