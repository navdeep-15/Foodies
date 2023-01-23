import actionNames from "@navdeep/utils/actionNames";

export function clearDynamicLinkReducer() {
    return (dispatch: Function) => {
        dispatch({
            type: actionNames?.DYNAMIC_LINK_REDUCER,
            payload: {
                screenName: '',
            }
        })
    }
}