import React, {useState} from 'react'
import SHOP_DATA from '../data/testData';
import CollectionPreview from '../components/CollectionPreview';
export default function ShopPage() {
  const [collections] = useState(SHOP_DATA);
  return (
      <div className="shop-page">
            {collections.map(collection =>
             (<CollectionPreview key={collection.id} collection={collection} />))}
      </div>
  )
}
