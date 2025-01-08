export function loadContact() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const form = document.createElement('form');

    form.innerHTML = `
     <div class="message">
    <label for="msg">Message</label>
    <textarea id="msg"></textarea>
  </div>
  <div class="contact">
    <label for="name">Name</label>
    <input type="text" id="name">

    <label for="email">Email Address</label>
    <input type="email" id="email"> 

    <button>Submit</button>
  </div>    `;

content.appendChild(form);
}




