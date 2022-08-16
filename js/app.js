window.addEventListener('keyup', (e) => {
  const main = document.querySelector('main');
  const keyCode = document.createElement('div');
  const container = document.createElement('div');

  let keyInformation = document.createElement('div');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');

  container.classList.add('container');
  main.innerHTML = '';

  keyCode.classList.add('key-code');
  keyCode.innerText = e.keyCode;

  keyInformation.classList.add('key-information');
  h2.innerText = 'Key';
  keyInformation.append(h2);
  p.innerText = e.key;
  keyInformation.append(p);
  container.append(keyInformation);

  keyInformation = document.createElement('div');
  h2 = document.createElement('h2');
  p = document.createElement('p');
  keyInformation.classList.add('key-information');
  h2.innerText = 'Code';
  keyInformation.append(h2);
  p.innerText = e.code;
  keyInformation.append(p);
  container.append(keyInformation);

  main.append(keyCode,container);
});
