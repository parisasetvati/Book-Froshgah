import react from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './components/Home';
// import { ToastProvider, useToasts } from 'react-toast-notifications';

// const FormWithToasts = () => {
//   const { addToast } = useToasts();

//   const onSubmit = async value => {
//     const { error } = await dataPersistenceLayer(value);

//     if (error) {
//       addToast(error.message, { appearance: 'error' });
//     } else {
//       addToast('Saved Successfully', { appearance: 'success' });
//     }
//   };

//   return <form onSubmit={onSubmit}>...</form>;
// };

// const App = () => (
//   <ToastProvider>
//     <FormWithToasts />
//   </ToastProvider>
// );
const App=()=> {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
    <Home/>
    
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  );
}

export default App;
