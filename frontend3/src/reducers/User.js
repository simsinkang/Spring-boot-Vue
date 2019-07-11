const getUser = response =>{
    const repos = [];
    const itemLength = response.data.length;
    for (let i = 0; i < itemLength; i++){
        const item = response.data[i];
        repos.push({
            name: item.Name,
            description: item.description,
            url: item.html_url
        })
    }
    return repos;
}

const initialState = {
    // user를 category로 변경
    user: undefined,
    repos: undefined,
    error: false
}

export default (state= initialState, action) => {
     switch(action.type){
         // 요청을 시작할 때 상태 리셋
         case 'START_REQUEST':
             return {
                 // category 를 상태에 저장
                user: action.payload.user,
                repos: undefined,
                error: false
             }
        case 'RECEIVE_DATA':
            return action.payload.error
             ? {...state, error: true}
             : {
                 ...state,
                 repos: getUser(action.payload.response)
             }
        default:
            return state
    }   
 }
