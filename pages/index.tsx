/* eslint-disable quotes */
import React from 'react';
import { GlobalStyles } from "@ui/theme/GlobalStyles";

const bg = "/bg.jpeg";
const todos = [
  {
    "id": "20fd8eda-bf4f-4f9d-a552-1c4186fa0999",
    "date": "2023-08-20T19:59:02.033Z",
    "content": "Primeira TODO",
    "done": false,
  },
  {
    "id": "4b1c91bf-320e-4615-800f-c88197351981",
    "date": "2023-08-20T19:59:02.034Z",
    "content": "Atualizada",
    "done": false,
  }

]



function HomePage() {
  console.log("todos", todos);

  return (
    <main>
      <GlobalStyles themeName='indigo' />
      <header
        style={{
          backgroundImage: `url('${bg}')`,
        }}
      >
        <div className="typewriter">
          <h1>O que fazer hoje?</h1>
        </div>
        <form>
          <input
            type="text"
            placeholder="Correr, Estudar..."
          />
          <button
            type="submit"
            aria-label="Adicionar novo item"
          >
            +
          </button>
        </form>
      </header>

      <section>
        <form>
          <input
            type="text"
            placeholder="Filtrar lista atual, ex: Dentista"
          />
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th align="left">
                <input type="checkbox" disabled />
              </th>
              <th align="left">Id</th>
              <th align="left">Conteúdo</th>
              <th />
            </tr>
          </thead>

          <tbody>
          {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{todo.id.substring(0, 4)}</td>
                  <td>{todo.content}</td>
                  <td align="right">
                    <button data-type="delete">Apagar</button>
                  </td>
                </tr>
              );
            })}
            

              


            {/* <tr>
              <td colSpan={4} align="center" style={{ textAlign: "center" }}>
                Carregando...
              </td>
            </tr>

            <tr>
              <td colSpan={4} align="center">
                Nenhum item encontrado
              </td>
            </tr> */}

            {/* <tr>
              <td colSpan={4} align="center" style={{ textAlign: "center" }}>
                <button
                  data-type="load-more"
                >
                  Carregar mais{" "}
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "4px",
                      fontSize: "1.2em",
                    }}
                  >
                    ↓
                  </span>
                </button>
              </td>
            </tr> */}

          </tbody>
        </table>
      </section>
    </main>
  )
}

export default HomePage

