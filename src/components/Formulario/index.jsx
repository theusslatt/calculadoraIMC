import { useState } from "react"
import styles from "./Formulario.module.css";

const Formulario = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    const calculaImc = () => {
        const imc = peso / (altura * altura)
        const imcFormatado = imc.toFixed(2);
        return setResultado(+imcFormatado);
    };

    const reset = () => {
        setPeso("");
        setAltura("");
    }

    if (altura === null) return null;

    return (
        <form className={styles.form}>
            <h1>Calcule o seu IMC</h1>
                <h2 className={styles.titulo}>Peso:</h2>
                <input
                    className={styles.input}
                    value={peso}
                    onChange={(e) => setPeso(+e.target.value)}
                    type="number"
                    placeholder="60kg"
                />
                <h2 className={styles.titulo}>Altura:</h2>
                <input
                    className={styles.input}
                    value={altura}
                    onChange={(e) => setAltura(+e.target.value)}
                    type="number"
                    placeholder="1,70"
                />
            <div className={styles.btnContainer}>
                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        calculaImc();
                    }}
                >
                    Calcular
                </button>
                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        reset();
                    }}
                >
                    Resetar
                </button>
            </div>

            {peso && altura && peso && altura > 0 ? (
                <p className={styles.resultado}>seu IMC é de: {resultado}</p>
            ) : (
                <p className={styles.resultado}>
                    Digite os valores para aperecer o resultado
                </p>
            )}
        </form>
    )
}

export default Formulario