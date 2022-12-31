const posts = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

// 2 sec takes that function creates a new post
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

//  1 sec takes that function shows all posts
function getPost() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `
                <li>${post.title}</li>
             `;
    });
    document.body.innerHTML = output;
  }, 1000);
}

/*
Promise is one method for handling asynchronous code. 
Promise causes createPost function is implemented completely  
and after that getPost function shows output.
*/
createPost({ title: "post three", body: "This is post three" })
  .then(getPost)
  .catch(function (error) {
    console.log(error);
  });
