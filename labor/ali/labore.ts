
const dataset = tf.data.dataset([1, 2, 3, 4, 5]);
dataset.shuffle().forEach(element => {
  console.log(element);
});

