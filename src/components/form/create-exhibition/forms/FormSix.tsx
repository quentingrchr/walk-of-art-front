
import React from "react";
import styles from "./formSix.module.scss";
import { Button } from "@components";

export const FormSix: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Votre paiement a été validé !</h1>
                <p className={styles.subtitle}>
                    Retournez à l’accueil ou allez dans “Expositions”
                    pour voir l’exposition que vous venez de créer
                </p>
            </div>

            <div className={styles.buttonContainer}>
                <Button
                    label={"Retour à l'accueil"}
                    color="white"
                    bg="dark"
                    type="submit"
                    to={'/dashboard'}
                />
            </div>

        </div>
    )
}
