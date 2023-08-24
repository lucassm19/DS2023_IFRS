// import React, { useReducer } from 'react';
// const myCounterReducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREASE_OR_DECREASE_BY':
//             return state + action.by;
//         default:
//             throw new Error();
//     }
// };
// const CounterReducer = () => {
//     const [count, dispatch] = useReducer(myCounterReducer, 0);
//     return (
//         <div>
//             <h1>Contador com useReducer</h1>
//             <p>Count: {count}</p>
//             <div>
//                 <button type="button" onClick={() => {
//                     dispatch({ type: 'INCREASE_OR_DECREASE_BY', by: 1 })
//                 }}>
//                     +
//                 </button>
//                 <button type="button" onClick={() => {
//                     dispatch({ type: 'INCREASE_OR_DECREASE_BY', by: -1 })
//                 }}>
//                     -
//                 </button>
//             </div>
//         </div>
//     );
// };
// export default CounterReducer;

// const [state, dispatch] = useReducer(dataFetchReducer, {
//     isLoading: false,
//     isError: false,
//     data: initialData,
// });
