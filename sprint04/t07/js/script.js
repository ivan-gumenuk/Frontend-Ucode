let user = {
  name: document.getElementById('name').value,
  age: document.getElementById('age').value,
  email: document.getElementById('email').value
};

// Don't edit above this line/

user = new Proxy(user, {
  set(target, prop, value) {
    if (prop === `name`)
      target.name = value
        .trim()
        .split(" ")
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    else if (prop === "age") {
      let reg = /^[^0\D][\d]{0,2}$/;
      if (value.match(reg) != null)
        target.age = value;
    }
    else if (prop === "email") {
      let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (value.match(reg) != null)
        if (value.match(reg)[0] === value)
          target.email = value;
    }
  }
});

// Don't edit below this line

function edit(btn) {
  btn.innerHTML = 'save';
  btn.setAttribute('onclick', 'save(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.removeAttribute('disabled');
}

function save(btn) {
  btn.innerHTML = 'edit';
  btn.setAttribute('onclick', 'edit(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.setAttribute('disabled', 'true');
  user[input.id] = document.getElementById(input.id).value;
  document.getElementById(input.id).value = user[input.id];
}