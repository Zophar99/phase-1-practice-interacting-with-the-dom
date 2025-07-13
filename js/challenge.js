document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('counter');
  let count = parseInt(counter.innerText); // start with the current number in DOM
  let isPaused = false;
  let likes = {}; // to keep track of likes per number

  // Start automatic counter
  let interval = setInterval(() => {
    if (!isPaused) {
      count++;
      counter.textContent = count;
    }
  }, 1000);

  // Plus and minus buttons
  const plusBtn = document.getElementById('plus');
  const minusBtn = document.getElementById('minus');

  plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });

  minusBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
  });

  // Like button
  const heartBtn = document.getElementById('heart');
  const likesList = document.querySelector('.likes');

  heartBtn.addEventListener('click', () => {
    if (likes[count]) {
      likes[count]++;
      const existingLi = document.getElementById(`like-${count}`);
      existingLi.textContent = `${count} has been liked ${likes[count]} times`;
    } else {
      likes[count] = 1;
      const newLi = document.createElement('li');
      newLi.id = `like-${count}`;
      newLi.textContent = `${count} has been liked 1 time`;
      likesList.appendChild(newLi);
    }
  });

  // Pause and resume button
  const pauseBtn = document.getElementById('pause');

  pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
      pauseBtn.textContent = 'resume';
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      heartBtn.disabled = true;
    } else {
      pauseBtn.textContent = 'pause';
      plusBtn.disabled = false;
      minusBtn.disabled = false;
      heartBtn.disabled = false;
    }
  });

  // Comments
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentList = document.getElementById('list');

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = '';
  });
});
