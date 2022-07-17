import React from "react";
import st from "./index.module.scss";
import { useForm } from "react-hook-form";
import { InputGroup } from "@components";

export type IProps = {};

export const EditProfile: React.FC<IProps> = (props: IProps) => {
  // useform
  const { register, handleSubmit  } = useForm();


  return (
    <div className={st.container}>
      <h1 className={st.title}>Bonjour prénom</h1>
      <img className={st.avatar} src="https://via.placeholder.com/150" />
      <div className={st.form}>
        <div className={st.formCol}>
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
        <div className={st.formCol}>
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
