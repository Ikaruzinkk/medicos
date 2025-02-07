import styles from "./agendamento.module.css";

export default function paciente() {
  return (
    <div className={styles.medicosConteiner}>
      <h1 className={styles.medicosTitulo}>Lista Agendação</h1>
      <button className={styles.medicoBotao}>Buscar Medico</button>
      <button className={styles.medicoBotao}>Buscar Agenda</button>
      <table className={styles.medicosTabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Medico</th>
            <th>Especialidade</th>
            <th>Paciente</th>
            <th>Tipo</th>
          </tr>
          </thead>
        <tbody>

        <tr><td>1</td>
        <td>Dr. João Silva</td>
        <td>Clínica Geral</td>
        <td>Carlos Menezes</td>
        <td>Plano de Saúde</td>
        </tr>

        <tr><td>2</td>
        <td>Dra. Maria Oliveira</td>
        <td>Pediatria</td>
        <td>Mariana Rocha</td>
        <td>Particular</td>
        </tr>

        <tr><td>3</td>
        <td>Dr. Pedro Santos</td>
        <td>Cardiologia</td>
        <td>Felipe Nogueira</td>
        <td>Plano de Saúde</td>
        </tr>

        <tr><td>4</td>
        <td>Dra. Ana Souza</td>
        <td>Pediatria</td>
        <td>Ana Clara Martins</td>
        <td>Particular</td>
        </tr>

        <tr><td>5</td>
        <td>Dr. Ricardo Lima</td>
        <td>Ortopedia</td>
        <td>Rafael Souza</td>
        <td>Plano de Saúde</td>
        </tr>

        <tr><td>6</td>
        <td>Dra. Beatriz Mendes</td>
        <td>Pediatria</td>
        <td>Juliana Alves</td>
        <td>Particular</td>
        </tr>

        <tr><td>7</td>
        <td>Dr. Lucas Ferreira</td>
        <td>Cardiologia</td>
        <td>Bruno Lima</td>
        <td>Plano de Saúde</td>
        </tr>

        <tr><td>8</td>
        <td>Dra. Carolina Ramos</td>
        <td>Clínica Geral</td>
        <td>Camila Ferreira</td>
        <td>Particular</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
}

