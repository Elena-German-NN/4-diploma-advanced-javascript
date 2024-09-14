const themes = {
  prairie: 'prairie',
  desert: 'desert',
  arctic: 'arctic',
  mountain: 'mountain',

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.current === undefined) {      
      this.current = this.mountain;
    }

    switch (this.current) {
      case 'prairie':
        this.current = 'desert';
        return {
          done: false,
          value: 'desert',
        };
      case 'desert':
        this.current = 'arctic';
        return {
          done: false,
          value: 'arctic',
        };
      case 'arctic':
        this.current = 'mountain';
        return {
          done: true,
          value: 'mountain',
        };
      case 'mountain':
        this.current = 'prairie';
        return {
          done: false,
          value: 'prairie',
        };
    }
  },

  get currentTheme(){
    let iterator = this[Symbol.iterator]();
    let rezult = iterator.next();
    return rezult.value;
  }

};

export default themes;


