import { useState } from 'react';
import { useGetProductsQuery } from '../../services/catalogApi';

function Catalog() {
  const [count, setCount] = useState<string>('');
  const { data, isLoading } = useGetProductsQuery(count);

  return (
    <>
      <h4>Catalog</h4>
      <div>
        <p>Filter</p>
        <div>
          <select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="">all</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
      <div>
        <ul>
          {isLoading ? (
            <h4>Loading...</h4>
          ) : (
            data?.map((product) => <li key={product.id}>{product.title}</li>)
          )}
        </ul>
      </div>
    </>
  );
}

export default Catalog;
