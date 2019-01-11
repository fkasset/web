import locale from './locale';
import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { reactLocalStorage } from 'reactjs-localstorage';

const getLanguage = () => {
    let language = reactLocalStorage.get('locale') || navigator.language.split(/[-_]/)[0];
    if(!locale[language]){
      language = 'en';
    }
    return language;
}

let string = locale[getLanguage()];
// let string = locale['ko'];

export default string;