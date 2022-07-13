import React, { useState } from "react";
import Cards from 'react-credit-cards';
<<<<<<< HEAD
import styles from "./formFive.module.scss";
import cx from "classnames";
import { Button, InputGroup, InputDropdown, Icon, Text, InputCard} from "@components";
=======
import styles from "./index.module.scss";
import { Button, InputGroup, InputDropdown, Input } from "@components";
>>>>>>> bf79556 (ADD selectedWork)
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

  const [cardNumber, setCardNumber] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardName, setCardName] = useState('')



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


const selectOptions = [{
  label: "test",
  value: "test value"
}]
  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <div className={styles.board}>
        <p className={styles.board__text}> 
          Montant à régler:
        </p>
        <p className={styles.board__price}>127,05€</p>
      
      </div>

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
      <div className={styles.form}>

  
      {/* id, name, placeholder, type, register, required, label, onChangeMethod */}
      <InputCard
        id={'test'}
        register={register}
        name="CardName"
        placeholder="John Doe"
        type="text"
        // register={register}
        required={true}
        label={"Nom du titulaire de la carte"}
        onChangeMethod={handleNameChange}
      />

      <InputCard
          id={'test'}
          register={register}
          type="number"
          name="CardNumber"
          placeholder="0000000000000000"
          // register={register}
          required={true}
          label={"Numéros de carte"}
          onChangeMethod={handleNumberChange}
      />
  
      <div className={styles.flexWrapper}>
          <InputCard
            register={register}
            id={'test'}
            type="number"
            name="CardExpiry"
            placeholder="00/0000"
            // register={register}
            required={true}
            label={"Date d’expiration"}
            onChangeMethod={handleExpiryChange}
          />
          <InputCard
            register={register}
            id={'test'}
            type="number"
            name="CardCvc"
            placeholder="000"
            // register={register}
            required={true}
            label={"CVC"}
            onChangeMethod={handleCvcChange}
        />
      </div>
        </div>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
