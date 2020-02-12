import React from 'react';
import './Purchases.scss';
import PurchasedItem from './PurchasedItem';

// Function compares timestamp values of docs. Docs without
// timestamp are placed before docs that have a timestamp.

const compareDocTimes = (a, b) => {
  const aTime = a.data().timestamp && a.data().timestamp.seconds;
  const bTime = b.data().timestamp && b.data().timestamp.seconds;

  if (!aTime && bTime) {
    return -1;
  } else if (aTime && !bTime) {
    return 1;
  } else if (!aTime && !bTime) {
    return 0;
  }
  if (aTime < bTime) {
    return -1;
  } else if (aTime > bTime) {
    return 1;
  }
  return 0;
};

const PurchaseHeader = () => (
  <div className='purchased-header'>
    <span className='name'>Name</span>
    <span className='quantity'>Quantity</span>
    <span className='price'>Price</span>
  </div>
);

export default function Purchases({ purchases }) {
  if (purchases.docs) {
    return (
      <>
        <h2 className='title'>Previous purchases:</h2>

        {purchases.docs.sort(compareDocTimes).map((doc, purchaseI) => {
          const purchase = doc.data();
          return (
            <div key={'purchase' + purchaseI} className='purchases'>
              {purchase.timestamp && (
                <div className='date'>
                  {purchase.timestamp.toDate().toLocaleDateString()}
                </div>
              )}

              <PurchaseHeader />

              {purchase.cartContent.map((item, itemI) => (
                <PurchasedItem key={'key ' + purchaseI + itemI} item={item} />
              ))}

              <div className='total'>{purchase.price}</div>
            </div>
          );
        })}
      </>
    );
  }

  return <h2>NO PURCHASES</h2>;
}
