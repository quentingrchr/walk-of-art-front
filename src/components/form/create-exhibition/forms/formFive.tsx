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

export const FormFive: React.FC<IProps> = ({ handleStepSubmit, defaultValues = [] }) => {

  const [orientation, setOrientation] = useState<string>('landscape')
  const [cardInfos, setCardInfos] = useState( {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })

  const handleInputFocus = (event) => {
    setCardInfos((previousState) => {
      const newCardState = { ...previousState };
      newCardState.focus = event.target.name;
      return newCardState;
 })
  }

  const handleInputChange = (event) => {
    const value = event.target;

    setCardInfos((previousState) => {
      const newCardState = { ...previousState };
      newCardState.name = value;
      return newCardState;
 })
  }


  const {
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
      <InputDropdown control={undefined} id={"cardType"} placeholder={"Sélectionner la carte"} required={false} />


      <img src="../../../../assets/images/BankCard.png" alt="" />

      <InputGroup
        placeholder="John Doe"
        id="description"
        type="text"
        label="Nom du titulaire de la carte"
        guidance={null}
      />

      <InputGroup
        placeholder="0000 - 0000 - 0000 - 0000"
        id="description"
        type="text"
        label="Numéros de carte"
        guidance={null}
      />

      <div>
        <InputGroup
          placeholder="00/0000"
          id="description"
          type="text"
          label="Date d’expiration"
          guidance={null}
        />

        <InputGroup
          placeholder="000"
          id="description"
          type="text"
          label="CVC"
          guidance={null}
        />
      </div>

      <div id="PaymentForm">
        <Cards
          cvc={cardState.cvc}
          expiry={cardState.expiry}
          focused={cardState.focus}
          name={cardState.name}
          number={cardState.number}
        />

        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          ...
        </form>
      </div>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
