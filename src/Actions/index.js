import axios from 'axios';

export function getZapas(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/productos/zapatillas')
        
        return dispatch({
        type: 'GET_ZAPAS',
        payload: json.data
        })
    }
}

export function getModeloZapas(modelo){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/productos/zapatillas?modelo=${modelo}`)
            return dispatch({
            type: 'GET_MODELO_ZAPAS',
            payload: json.data
        })
            
        }catch(error){
            console.error(error)
        }
        
}
}

export function getZapaById(id){
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/productos/zapatillas/${id}`)
            return dispatch({
                type: 'GET_ZAPA_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(error, 'err')
        }
    }
}

export function getFilters ({talla, precio, actividad, order}) {
    return async function (dispatch) {
        var filters = await axios.get(`http://localhost:3001/productos/filtros?talla=${talla}&&precio=${precio}&&actividad=${actividad}&&order=${order}`)
        return dispatch({
            type: "GET_FILTERS",
            payload: filters.data
        })
    }
}

export function postProduct (payload){
    return async function (dispatch){
        const response = await axios.post('http://localhost:3001/productos/zapatillas', payload)
        //console.log(response)
        return dispatch({
            type: "POST_PRODUCT",
            response
        });
    }
};

export function addToCart(id) {
    return async function (dispatch) {
        const product = await axios.get(`http://localhost:3001/productos/zapatillas/${id}`);
        dispatch({
            type: "ADD_TO_CART",
            payload: product.data,
             
                
        })
    }
};

export function removeToCart(id) {
    return async function (dispatch) {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: id
        })
    }
};

