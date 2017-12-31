const localeChange = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_LOCALE_CHANGE':
      return [
        ...state,
        {
          locale: action
        }
      ];
    default:
      return state;
  }
};

export default localeChange;
