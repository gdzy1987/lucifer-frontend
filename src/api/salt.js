import fetch from 'utils/fetch';
import apiURL from '@/config'

// cmdrun
export function postCmdrun(data) {
  return fetch({
    url: apiURL.cmdrun,
    method: 'post',
    data
  });
}

export function getCmdrun(query) {
    return fetch({
        url: apiURL.cmdrun,
        method: 'get',
        params: query
    });
}