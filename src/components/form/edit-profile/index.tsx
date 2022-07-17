import React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { InputGroup } from "@components";

export type IProps = {};

export const EditProfile: React.FC<IProps> = (props: IProps) => {
  // useform
  const { register, handleSubmit  } = useForm();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bonjour l'artiste</h1>
      <img className={styles.avatar} src="https://via.placeholder.com/150" />
      <div className={styles.form}>
        <div className={styles.formCol}>
          <InputGroup
            id="firstName"
            guidance={null}
            label="Prénom"
            placeholder="Prénom"
            type="text"
            register={register}
          />
          <InputGroup
            id="lastNamme"
            guidance={null}
            label="Nom de famille"
            placeholder="Nom de famille"
            type="text"
            register={register}
          />
          <InputGroup
            id="email"
            guidance={null}
            label="Email"
            placeholder="Email"
            type="email"
            register={register}
          />
          <InputGroup
            id="password"
            guidance={null}
            label="Mot de passe"
            placeholder="Mot de passe"
            type="password"
            register={register}
          />
        </div>
        <div className={styles.formCol}>
          <InputGroup
            id="address"
            guidance={null}
            label="Adresse de facturation"
            placeholder="Adresse de facturation"
            type="text"
            register={register}
          />
        </div>
      </div>
    </div>
  );
};
