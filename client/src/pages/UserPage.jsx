import React, { useState, useEffect, useCallback } from 'react';
import './UserPage.scss';
import { useSelector } from 'react-redux';
import Purchases from '../components/Purchases';
import UserData from '../components/UserData';
import { getPurchaseDocuments } from '../firebase/firebaseUtils';
import Spinner from '../components/Spinner';

export default function CheckoutPage() {
  const currentUser = useSelector(state => state.user.currentUser);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPurchases = useCallback(async () => {
    setLoading(true);
    const fetchedPurchases = await getPurchaseDocuments(currentUser.id);
    setPurchases(fetchedPurchases);
    setLoading(false);
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) getPurchases();
  }, [currentUser, getPurchases]);

  return (
    <div className='user-page'>
      {currentUser ? (
        <>
          <UserData user={currentUser} />
          {loading ? <Spinner /> : <Purchases purchases={purchases} />}
        </>
      ) : (
        <p>No user </p>
      )}
    </div>
  );
}
