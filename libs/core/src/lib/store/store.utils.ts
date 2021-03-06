export function getStoresSnapshot(__stores__) {
    const acc = {};
    const keys =  Object.keys(__stores__);
    for (let i = 0; i < keys.length; i++) {
      const storeName = keys[i];
      acc[storeName] = __stores__[storeName].getSnapshot();
    }

    return acc;
  }

  export function deepFreeze (o) {
    Object.freeze(o);
  
    const oIsFunction = typeof o === "function";
    const hasOwnProp = Object.prototype.hasOwnProperty;
  
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (hasOwnProp.call(o, prop)
      && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true )
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });
    
    return o;
  };
  