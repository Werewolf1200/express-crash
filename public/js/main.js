const output = document.querySelector('#output');
const button = document.querySelector('#get-posts');
const form = document.querySelector('#add-post');


// Get and Show Posts
async function showPosts() {
    try {
        const res = await fetch('http://localhost:4000/api/posts');
        if (!res.ok) {
            throw new Error('Failed to fetch posts')
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.textContent = post.title;
            output.appendChild(postElement);
        })
    } catch (error) {
        console.log('Error fetching posts: ', error);
    }
}

//Add new Post
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:4000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            throw new Error('Failed to add post')
        }

        const newPost = await res.json();

        const postElement = document.createElement('div');
        postElement.textContent = newPost.title;
        output.appendChild(postElement);

        showPosts();
    } catch (error){
        console.log('error adding post')
    }
}

// Event Listeners
button.addEventListener('click', showPosts);
form.addEventListener('submit', addPost);