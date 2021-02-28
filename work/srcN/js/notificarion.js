import { notice, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  showNotice() {
    notice({
      title: 'Nothing entered, enter your query!',
      delay: 2000,
    });
  },

  showSuccess() {
    success({
      title: 'Success!',
      delay: 2000,
    });
  },

  showError() {
    error({
      title: `Nothing found for query`,
      delay: 2000,
    });
  },
};
