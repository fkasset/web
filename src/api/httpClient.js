/*
    호출 시 아래와 같이 하면됨
    httpClient.httpRequest(httpClient.target.currencies).then((result)=>{
      console.log('result = ' + result[0].id); 
    }); 
*/
import con from '../const';
import util from 'util';

const httpRequest = (_target, _params, _method) => {
    console.log('httpRequest...');
    if (_method == undefined || _method == '') _method = method.get; 
    if (_params == undefined || _params == '') _params = []; 
    if (_method == method.get) {
        _params.forEach(_param => {
            _target = util.format(_target, _param);
        });
    }
    let requestParam = {
        method: _method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if (_method == method.post) requestParam['body'] = JSON.stringify(_params);

    console.log('httpRequest='+_target);
    return new Promise((resolve, reject)=>{
        fetch(_target, requestParam).then((response) => {
            return response.text();
        }).then((responseText) => {
            let responseJson = '';
            try {
                responseJson = JSON.parse(responseText);
            } catch (error) {}
            resolve(responseJson); 
        }).catch(()=>{alert('오류가 발생하였습니다. 잠시후 다시 시도해 주세요.')});
    });
}

const apiUrl = con.serverProtocol+'://'+con.serverIp+':'+con.serverPort+'/coin'

const target = {
    login: apiUrl + '/qna/create',
}

const method = {
    get: 'GET',
    post: 'POST'
}
export default {
    httpRequest,
    target,
    method
};