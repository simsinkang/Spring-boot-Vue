import fetchJsonp from 'fetch-jsonp';
import {replace} from 'replace-router'

const API_URL = 'https://api.github.com/user/';

const startRequest = user =>({
    type: 'START_REQUEST',
    payload: {user}
})

const receiveDate = (user, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: {user, error, response}
})

// 요청완료
const finishRequest = user => ({
    type: 'FINISH_REQUEST',
    payload: { user }
})

// 사용자 추출
export const fetchUser = user => {
    //redux-thunk를 사용한 비동기 처리
    return async(dispatch, getState) =>{
        //카테고리 ID에 대응하는 state.users.categories 요소 추출
        const categories = getState().users.categories;
        const category = categories.find(category => (category.id === user));

        // 대응하는 데이터가 없을 경우 최상위 페이지로 리다이렉트
        if(typeof category === 'undefined'){
            dispatchEvent(replace('/'));
            return;
        }
        
        // user 를 category로 변경
        dispatchEvent(startRequest(category));
        try{
           const response = await fetchJsonp(`${API_URL}/${user}`)
           const data = await response.json()
           dispatchEvent(receiveDate(user,null,data))
        }catch{
            /* dispatchEvent(receiveDate(user, err)) */
        }
        dispatchEvent(finishRequest(user))
    }
}