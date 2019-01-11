import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { reactLocalStorage } from 'reactjs-localstorage';
import locale from '../locale';

const getMessage = (id) => {
    return <FormattedHTMLMessage id={id} />
}

const getLanguage = () => {
    let language = reactLocalStorage.get('locale') || navigator.language.split(/[-_]/)[0];
    if(!locale[language]){
      language = 'en';
    }
    return language;
}

export { getMessage, getLanguage };