const posts_TEM = [
  {
    id: 1,
    thumbUrl: "images/thumbnail1.jpg",
    postLink: "#",
    category: "AI",
    categoryLink: "#",
    title: "AI - Things You Should Learn",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et dolor laborum, quidem veniam exercitationem autem tempora nihil quos ullam, hic, alias minima. ",
    author: "Admin",
    datePublished: "Feb 20, 2022",
  },

  {
    id: 2,
    thumbUrl: "images/thumbnail2.jpg",
    postLink: "#",
    category: "Technology",
    categoryLink: "#",
    title: "Macbook Shortcut Keys",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et dolor laborum, quidem veniam exercitationem autem tempora nihil quos ullam, hic, alias minima. ",
    author: "Admin",
    datePublished: "Feb 24, 2022",
  },

  {
    id: 3,
    thumbUrl: "images/thumbnail3.jpg",
    postLink: "#",
    category: "Social Media",
    categoryLink: "#",
    title: "Get More Traffic With These Tricks",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et dolor laborum, quidem veniam exercitationem autem tempora nihil quos ullam, hic, alias minima. ",
    author: "Admin",
    datePublished: "Mar 12, 2022",
  },

  {
    id: 4,
    thumbUrl: "images/thumbnail4.jpg",
    postLink: "#",
    category: "Technology",
    categoryLink: "#",
    title: "Apple Watch: An Honest Review",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et dolor laborum, quidem veniam exercitationem autem tempora nihil quos ullam, hic, alias minima. ",
    author: "Admin",
    datePublished: "Mar 26, 2022",
  },

  {
    id: 5,
    thumbUrl: "images/thumbnail5.jpg",
    postLink: "#",
    category: "VR",
    categoryLink: "#",
    title: "VR - Things To Look Out For",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et dolor laborum, quidem veniam exercitationem autem tempora nihil quos ullam, hic, alias minima. ",
    author: "Admin",
    datePublished: "Apr 17, 2022",
  },

  {
    id: 6,
    thumbUrl: "images/thumbnail6.jpg",
    postLink: "#",
    category: "Tips",
    categoryLink: "#",
    title: "What Is On My Office Desk?",
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et dolor laborum, quidem veniam exercitationem autem tempora nihil quos ullam, hic, alias minima. ",
    author: "Admin",
    datePublished: "Apr 28, 2022",
  },
];

const blogPostsContainer = document.getElementById("blog-posts-container");

const createPostDiv = (id,
  postLink,
  thumbUrl,
  category,
  categoryLink,
  title,
  summary,
  author,
  datePublished
) => {
  postLink = postLink.replace("https://www.youtube.com/watch?v=","")
  let HTMLCode = `<div class="post">
    <a href="/post.html?link=${postLink}&id=${id}" target="_blank" class="post-link"></a>
    <div class="thumbnail">
      <img src="${thumbUrl}" alt="" />
    </div>

    <div class="title-container">
      <a href="${categoryLink}" class="category">${category}</a>
      <a href="/post.html?link=${postLink}&id=${id}" target="_blank">
        <h2 class="title">${title}</h2>
      </a>
    </div>

    <div class="summary">
      ${summary}
    </div>

    <div class="meta-data">
      <div class="author">By ${author}</div>
      <div class="date">on ${datePublished}</div>
    </div>
  </div>`;

  blogPostsContainer.insertAdjacentHTML("beforeend", HTMLCode);
};
function compareTime(a, b) {
  return b.datePublished - a.datePublished
}
const populateAllPosts = (posts) => {
  blogPostsContainer.innerHTML = ""
  var posts2 = [...posts]
  posts2 = posts2.sort(compareTime);
  posts2.forEach((post) => {
    let postLink = post.postLink;
    let thumbUrl = post.thumbUrl;
    let category = post.category;
    let categoryLink = post.categoryLink;
    let title = post.title;
    let summary = post.summary;
    let author = post.author;
    var date = new Date(post.datePublished);
    var options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    let datePublished = date.toLocaleDateString('en', options);

    createPostDiv(
      posts.indexOf(post),
      postLink,
      thumbUrl,
      category,
      categoryLink,
      title,
      summary,
      author,
      datePublished
    );
  });
};

document.getElementById("black").innerHTML = `<h3>挺細心，不過沒有影片了哦，期待我們更新吧～～</h3>`
