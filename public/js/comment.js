
const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log("comment form");
    const commentBody = document.querySelector('#form-comment').value.trim();
    const currentTime = Date.now();
    console.log(JSON.stringify(event));
    console.log(JSON.stringify({ commentBody, currentTime, post_id:1, user_id:1}));
    if (commentBody) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ body:commentBody, date_created:currentTime, post_id:1, user_id:1}),
        headers: { 'Content-Type': 'application/json' },
      });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to log in');
    //   }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  