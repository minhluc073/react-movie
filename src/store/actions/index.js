export const GET_POPULAR_REQUEST = "GET_POPULAR_REQUEST"
export const GET_POPULAR_SUCCESS = "GET_POPULAR_SUCCESS"
export const GET_POPULAR_FAILURE = "GET_POPULAR_FAILURE"

//now playing
export const GET_PLAYING_REQUEST = "GET_PLAYING_REQUEST"
export const GET_PLAYING_SUCCESS = "GET_PLAYING_SUCCESS"
export const GET_PLAYING_FAILURE = "GET_PLAYING_FAILURE"

export const getPopular = (payload) => {
    return {
        type: GET_POPULAR_REQUEST,
        payload
    }
}

export const getPlaying = (payload) => {
    return {
        type: GET_PLAYING_REQUEST,
        payload
    }
}