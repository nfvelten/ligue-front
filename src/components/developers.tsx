import { api } from 'api';
import { useFetch } from 'hooks/useFetch';

type Devs = {
  id: string;
  name: string;
  hobby: string;
  age: number;
  sex: string;
  birthdate: string;
};

function Developers() {
  const { data, isFetching } = useFetch<Devs[]>('developers');

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map(dev => {
        return (
          <li key={dev.name}>
            <strong>{dev.name}</strong>
            <p>{dev.hobby}</p>
            <p>{dev.age}</p>
            <p>{dev.sex}</p>
            <p>{dev.birthdate}</p>
          </li>
        );
      })}
    </ul>
  );
}

export { Developers };
