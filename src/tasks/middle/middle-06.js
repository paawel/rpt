// Перепишите так, чтобы получилось 1-2-3

Promise.resolve()
  .then(()=>console.log(1))
  .then(() => {
      setTimeout(()=>{
        console.log(2);
      },0)
  })
  .then(() => console.log(3));
