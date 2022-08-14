// Что и почему выведет код ?

Promise.resolve()
  .then(()=>console.log(1))
  .then(() => {
      setTimeout(()=>{
        console.log(2);
      },0)
  })
  .then(() => console.log(3));

// Перепишите такб чтобы получилось 1-2-3
