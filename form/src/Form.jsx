import React, { useState } from 'react';

function Form () {
    const [input, setInput] = useState(
        {
            nome: "",
            cognome: "",
            email: "",
            password: ""
        }
    );
    const [errors, setErrors] = useState({});

    const validateInput = () => {
        let formErrors = {};
        let isValid = true;
    
        // Controllo se il campo nome è vuoto
        if (!input.nome) {
          isValid = false;
          formErrors['nome'] = 'Il campo nome è obbligatorio';
        } else if (/^(.)\1*$/.test(input.nome)){
            isValid = false
            formErrors['nome'] = "Il nome non puo avere questa serie di caratteri";
        }
    
        // Controllo se il campo cognome è vuoto
        if (!input.cognome) {
          isValid = false;
          formErrors['cognome'] = 'Il campo cognome è obbligatorio';
        } else if (/^(.)\1*$/.test(input.cognome)){
            isValid = false
            formErrors['cognome'] = "Il cognome non puo avere questa serie di caratteri";
        }
    
        // Controllo se l'email è vuota o non è valida
        if (!input.email) {
          isValid = false;
          formErrors['email'] = 'Il campo email è obbligatorio';
        } 
    
        // Controllo se la password è vuota
        if (!input.password) {
          isValid = false;
          formErrors['password'] = 'Il campo password è obbligatorio';
        } else if (input.password.length < 6) {
          isValid = false;
          formErrors['password'] = 'La password deve essere lunga almeno 6 caratteri';
        }
    
        setErrors(formErrors);
        return isValid;
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value,  // Aggiorna il campo specifico nello stato
        });
        setErrors({ ...errors, [name]: '' });
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        if (validateInput()) {
            console.log('Dati validi:', input);
          } else {
            console.log('Errore nei dati', errors);
          }
      }

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              value={input.nome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="cognome">Cognome:</label>
            <input
              type="text"
              name="cognome"
              value={input.cognome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              required 
            />
          </div>
          <button type="submit">Invia</button>
        </form>
      );
}

export default Form;