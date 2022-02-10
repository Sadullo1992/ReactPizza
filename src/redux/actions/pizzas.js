import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {

    dispatch(setLoaded(false));
    axios
        .get(`http://localhost:3004/pizzas?${
            category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({ data }) => {
       dispatch(setPizzas(data)); 
    });
};


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});