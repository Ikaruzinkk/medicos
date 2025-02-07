import styles from "./pacientes.module.css";

export default function paciente() {
  return (
    <div className={styles.medicosConteiner}>
      <h1 className={styles.medicosTitulo}>Lista Pacientes</h1>
      <button className={styles.medicoBotao}>Buscar Paciente</button>
      <table className={styles.medicosTabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
          </tr>
          </thead>
        <tbody>
          <tr>
          <td>1</td>
          <td>Carlos Menezes</td>
          <td>(21) 98888-1234</td>
          <td>carlos.menezes@email.com</td>
          <td>123.456.789-01</td>
          </tr>

          <tr><td>2</td>
          <td>Mariana Rocha</td>
          <td>(11) 97777-5678</td>
          <td>mariana.rocha@email.com</td>
          <td>234.567.890-12</td>
          </tr>

          <tr><td>3</td>
          <td>Felipe Nogueira</td>
          <td>(31) 96666-8765</td>
          <td>felipe.nogueira@email.com</td>
          <td>345.678.901-23</td>
          </tr>

          <tr><td>4</td>
          <td>Ana Clara Martins</td>
          <td>(41) 95555-4321</td>
          <td>ana.martins@email.com</td>
          <td>456.789.012-34</td>
          </tr>

          <tr><td>5</td>
          <td>Rafael Souza</td>
          <td>(51) 94444-9876</td>
          <td>rafael.souza@email.com</td>
          <td>567.890.123-45</td>
          </tr>

          <tr><td>6</td>
          <td>Juliana Alves</td>
          <td>(61) 93333-6543</td>
          <td>juliana.alves@email.com</td>
          <td>678.901.234-56</td>
          </tr>

          <tr><td>7</td>
          <td>Bruno Lima</td>
          <td>(71) 92222-3210</td>
          <td>bruno.lima@email.com</td>
          <td>789.012.345-67</td>
          </tr>

          <tr><td>8</td>
          <td>Camila Ferreira</td>
          <td>(81) 91111-2468</td>
          <td>camila.ferreira@email.com</td>
          <td>890.123.456-78</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

