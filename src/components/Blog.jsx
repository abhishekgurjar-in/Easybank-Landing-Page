import blog1Image from "../assets/images/image-currency.jpg";
import blog2Image from "../assets/images/image-restaurant.jpg";
import blog3Image from "../assets/images/image-plane.jpg";
import blog4Image from "../assets/images/image-confetti.jpg";

const Blog = () => {
  const blogData = [
    {
      image: blog1Image,
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      image: blog2Image,
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      image: blog3Image,
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...",
    },
    {
      image: blog4Image,
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
    },
  ];

  return (
    <div className="blog">
      <div className="blog-title">
        <h2>Latest Articles</h2>
      </div>
      <div className="articles">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <p>By {blog.author}</p>
            <h3>{blog.title}</h3>
            <h6>{blog.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
