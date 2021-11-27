const body = document.querySelector<HTMLBodyElement>('body')!;
const form = document.querySelector<HTMLFormElement>('form');

const toggleDarkMode = document.getElementById(
  'toggle-dark-mode'
)! as HTMLInputElement;

function switchDarkMode(status: string) {
  const element = body;

  if (status === 'off') {
    element.classList.remove('dark-mode');
    localStorage.removeItem('darkMode');
    return;
  }

  if (status === 'on') {
    if (element.classList.contains('dark-mode')) return;
    element.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'on');
  }
}

// manual turn on dark mode
toggleDarkMode.addEventListener('change', function () {
  if (this.checked) {
    console.log('dark mode on');
    switchDarkMode('on');
    return;
  }

  console.log('dark mode off');
  switchDarkMode('off');
});

// auto dark mode upon load
const hour = new Date().getHours();
if (hour < 6 || hour > 19 || localStorage.getItem('darkMode') === 'on') {
  toggleDarkMode.checked = true;
  switchDarkMode('on');
}

const reactInput = document.getElementById('react') as HTMLInputElement;
reactInput.addEventListener('change', function () {
  if (this.checked) {
    console.log('checked');
    return;
  }

  console.log('uncheck');
});

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
  });
}
