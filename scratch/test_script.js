let domContentLoadedCallback = null;

global.window = {
  supabase: {
    createClient: () => {
      return {
        from: () => ({
          insert: () => Promise.resolve({ error: null })
        })
      };
    }
  }
};

global.localStorage = {
  getItem: (key) => null,
  setItem: () => {}
};

global.document = {
  addEventListener: (event, callback) => {
    if (event === 'DOMContentLoaded') {
      domContentLoadedCallback = callback;
    }
  },
  getElementById: (id) => {
    return {
      innerText: '',
      reset: () => {},
      classList: {
        add: () => {},
        remove: () => {}
      }
    };
  },
  querySelectorAll: () => []
};

global.tailwind = {
  config: {}
};

require('../js/script.js');
console.log("Loaded script.js successfully");

if (domContentLoadedCallback) {
  try {
    domContentLoadedCallback();
    console.log("DOMContentLoaded callback executed successfully with null localStorage without crashes!");
  } catch (err) {
    console.error("Crash during DOMContentLoaded execution with null localStorage:", err);
  }
}
