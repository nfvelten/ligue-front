import { useFetch } from "hooks/useFetch";

type Devs = {
  name: string;
  hobby: string;
  description: string;
};

function Developers() {
  const { data, isFetching } = useFetch<Devs[]>("developers");

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((dev) => {
        return (
          <li key={dev.name}>
            <strong>{dev.name}</strong>
            <p>{dev.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export { Developers };
