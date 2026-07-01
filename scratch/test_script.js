global.window = {
  supabase: {
    createClient: () => {}
  }
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};
global.document = {
  addEventListener: () => {}
};
global.tailwind = {
  config: {}
};
require('../js/script.js');
console.log("Loaded script.js successfully without runtime issues!");
