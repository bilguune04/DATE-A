const floatBox = document.getElementById('float');

for (let i = 0; i < 17; i++) {

  let s = document.createElement('span');

  s.className = 'heart';
  s.textContent = ['♡', '♥', '✦'][i % 3];

  s.style.left = (Math.random() * 100) + '%';
  s.style.animationDuration = (9 + Math.random() * 10) + 's';
  s.style.animationDelay = (-Math.random() * 16) + 's';
  s.style.fontSize = (14 + Math.random() * 20) + 'px';

  floatBox.appendChild(s);
}


// YES товч
function accept() {

  document.getElementById('result').style.display = 'block';

  document.getElementById('yes').textContent = 'Ёстой гоё! 💗';

  document.getElementById('no').style.display = 'none';

  // Зүрх, цэцгийн эффект
  for (let i = 0; i < 24; i++) {

    let e = document.createElement('span');

    e.className = 'sparkle';
    e.textContent = ['💗', '💕', '✨', '🌸'][i % 4];

    e.style.left = (Math.random() * 100) + 'vw';
    e.style.top = (Math.random() * 100) + 'vh';

    document.body.appendChild(e);

    setTimeout(() => e.remove(), 1100);
  }
}


// NO товч
function playfulNo() {

  const b = document.getElementById('no');

  b.textContent = [
    'Дахиад бодоод үз дээ 🥺',
    'Жаахан ч гэсэн? 💗',
    'Нэг л удаа гуйя 🙈'
  ][Math.floor(Math.random() * 3)];

  b.style.transform =
    `translate(${Math.random() * 24 - 12}px,
    ${Math.random() * 12 - 6}px)`;

}