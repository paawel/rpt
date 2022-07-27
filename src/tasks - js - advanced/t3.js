let obj0 = {
  name: 'Ivan',
  position: 'Developer',
  skills: {
    soft: ['english', 'german'],
    hard: ['js', 'ts', 'angular']
  }
};
let obj1 = {
  name: 'Ivan',
  position: 'Developer',
  skills: {
    soft: ['english', 'german'],
    hard: ['js', 'ts', 'angular']
  }
};

// TODO: obj0 === obj1 => true

let obj2 = {
  name: 'Ivan',
  position: 'Developer',
  skills: {
    hard: ['js', 'ts', 'angular'],
    soft: ['english', 'german']
  }
};
let obj3 = {
  position: 'Developer',
  skills: {
    soft: ['english', 'german'],
    hard: ['js', 'ts', 'angular']
  },
  name: 'Ivan'
};

// TODO: obj2 === obj3 => true
