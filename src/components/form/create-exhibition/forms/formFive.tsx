import React, { useState } from "react";
import Cards from 'react-credit-cards';
import styles from "./index.module.scss";
import { Button, InputGroup, InputDropdown, Input } from "@components";
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
      <div className={styles.boardOrientation}>
        <p>
          Montant à régler
        </p>
        <p>Montant</p>
      </div>

      <label htmlFor="cardType">Liste des cartes enregistrées</label>
      {/* <InputDropdown control={undefined} id={"cardType"} placeholder={"Sélectionner la carte"} required={false} /> */}


      <img src="../../../../assets/images/BankCard.png" alt="" />

      <div id="PaymentForm" className={styles.display}>
        <Cards
          cvc={cardCvc}
          expiry={cardExpiry}
          focused={true}
          name={cardName}
          number={cardNumber}
        />
        
      </div>
      <form>
          <Input
            type="number"
            name="Cardnumber"
            placeholder="Card Number"
            onChange={handleNumberChange}
            register={() => {}}
          />
          {/* <Input
            type="number"
            name="Cardcvc"
            placeholder="Card Cvc"
            onChange={handleCvcChange}
          />
          <Input
            type="number"
            name="Cardexpiry"
            placeholder="Card Expiry"
            onChange={handleExpiryChange}
          />
          <Input
            type="text"
            name="Cardname"
            placeholder="Card Name"
            onChange={handleNameChange}
          /> */}
        </form>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
