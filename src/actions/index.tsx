import actionNames from "@navdeep/utils/actionNames";

export function updateDynamicLinkReducer(link: any) {
    return (dispatch: Function) => {
        if (link?.url) {
            let temp = link?.url?.split('?')?.[1]?.split('&')
            let screenName = temp?.[0]?.split('=')?.[1]
            let sectionIndex = parseInt(temp?.[1]?.split('=')?.[1])
            let itemIndex = parseInt(temp?.[2]?.split('=')?.[1])

            dispatch({
                type: actionNames?.DYNAMIC_LINK_REDUCER,
                payload: {
                    screenName: screenName ?? '',
                    sectionIndex: sectionIndex ?? 0,
                    itemIndex: itemIndex ?? 0
                }
            })
        }
    }
}

export function clearDynamicLinkReducer() {
    return (dispatch: Function) => {
        dispatch({
            type: actionNames?.DYNAMIC_LINK_REDUCER,
            payload: {
            }
        })
    }
}