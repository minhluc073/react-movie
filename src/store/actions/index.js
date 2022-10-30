export const GET_POPULAR_REQUEST = "GET_POPULAR_REQUEST"
export const GET_POPULAR_SUCCESS = "GET_POPULAR_SUCCESS"
export const GET_POPULAR_FAILURE = "GET_POPULAR_FAILURE"

export const getPopular = (payload) => {
    return {
        type: GET_POPULAR_REQUEST,
        payload
    }
} 