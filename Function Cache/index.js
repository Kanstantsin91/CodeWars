function cache(func) {
    let cache = new Map();
    return function(...args) {
      if (cache.has(JSON.stringify(args))) {
        return cache.get(JSON.stringify(args));
      }
  
      let result = func(...args);
  
      cache.set(JSON.stringify(args), result);
      return result;
    };
  }