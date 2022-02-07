function antiOptimizeAsync(task) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(task());
      }, 1500);
    });
  }