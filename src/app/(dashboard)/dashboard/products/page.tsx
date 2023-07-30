import React from 'react';
import request from '@/helpers/request';
import type { ProductTypes } from '@/types/products';

// SSG
async function getProducts() {
  const res = await request.get<ProductTypes[]>('products?_page=1&_limit=10');
  return res;
}

async function ProductPage() {
  const products = await getProducts();

  if (!products?.length) return null;

  return (
    <div className='container my-16 min-h-screen'>
      <ul>
        {products.map((item) => (
          <li key={item.id} className='mb-6 border-b border-solid border-white pb-6 last:mb-0 last:border-0'>
            <p className='mb-2 text-[1.5rem] text-white'>{item.name}</p>
            <p className='mb-2 text-[1.5rem] text-white'>Material: {item.material}</p>
            <p className='text-[1.5rem] text-white'>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
