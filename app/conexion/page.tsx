import React from 'react';
import { useFirestoreDocData, useAuth } from 'reactfire';
import firebase from '../firebaseConfig';

const HomePage = () => {
  const auth = useAuth();
  const userRef = firebase.firestore().collection('users').doc(auth.currentUser?.uid);
  const { status, data: userData } = useFirestoreDocData(userRef);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <h1>Página de Inicio</h1>
      {auth.currentUser ? (
        <>
          <p>Bienvenido, {userData?.name || 'Usuario'}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <p>Inicia sesión para continuar</p>
      )}
    </div>
  );
};

export default HomePage;