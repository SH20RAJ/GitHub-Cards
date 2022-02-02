var user = 'sh20raj';
if(getparam('user')){
  user = getparam('user');
}

function embed(){
  
}

var url = 'https://api.github.com/users/' + user + '/repos';
var field = document.getElementById('repos');
fetch(url)
  .then(response => response.json())
  .then(data => showrepos(data));

function showrepos(data) {
  for (let i = 0; i < data.length; i++) {
    field.insertAdjacentHTML('beforeend', `
   <div class="github-card">
   <a href="https://github.com/${data[i].full_name}" target="_blank">
   <img src="https://gh-card.dev/repos/${data[i].full_name}.svg"/></a>
   </div>
   `)
  }
}

function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
