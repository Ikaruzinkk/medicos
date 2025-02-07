import styles from "./medicos.module.css";

export default function medicos() {
  return (
    <div className={styles.medicosConteiner}>
      <h1 className={styles.medicosTitulo}>Lista Medicos</h1>
      <button className={styles.medicoBotao}>Buscar Medicos</button>
      <table className={styles.medicosTabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Especialidade</th>
            </tr></thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. João Silva</td>
                <td>(11) 99999-0001</td>
                <td>joao.silva@email.com</td>
                <td>Clínica Geral</td>

                </tr><tr><td>2</td>
                <td>Dra. Maria Oliveira</td>
                <td>(11) 99999-0002</td>
                <td>maria.oliveira@email.com</td>
                <td>Pediatria</td>

                </tr><tr><td>3</td>
                <td>Dr. Pedro Santos</td>
                <td>(11) 99999-0003</td>
                <td>pedro.santos@email.com</td>
                <td>Cardiologia</td>

                </tr><tr><td>4</td>
                <td>Dra. Ana Souza</td>
                <td>(11) 99999-0004</td>
                <td>ana.souza@email.com</td>
                <td>Pediatria</td>

                </tr><tr><td>5</td>
                <td>Dr. Ricardo Lima</td>
                <td>(11) 99999-0005</td>
                <td>ricardo.lima@email.com</td>
                <td>Ortopedia</td>

                </tr><tr><td>6</td>
                <td>Dra. Beatriz Mendes</td>
                <td>(11) 99999-0006</td>
                <td>beatriz.mendes@email.com</td>
                <td>Pediatria</td>

                </tr><tr><td>7</td>
                <td>Dr. Lucas Ferreira</td>
                <td>(11) 99999-0007</td>
                <td>lucas.ferreira@email.com</td>
                <td>Cardiologia</td>

                </tr><tr><td>8</td>
                <td>Dra. Carolina Ramos</td>
                <td>(11) 99999-0008</td>
                <td>carolina.ramos@email.com</td>
                <td>Clínica Geral</td>
                
                </tr>
                </tbody>
                </table>
    </div>
  );
}
