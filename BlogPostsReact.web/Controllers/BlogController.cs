using BlogPostsReact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPostsReact.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private string _connectionString;

        public BlogController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<BlogPost> GetAll()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetBlogs();
        }
        [HttpPost]
        [Route("addblog")]
        public void AddBlog(BlogPost blogpost)
        {
            blogpost.Date = DateTime.Now;
            var repo = new BlogPostRepository(_connectionString);
            repo.AddBlog(blogpost);
        }
        [HttpPost]
        [Route("addcomment")]
        public void AddComment(Comment comment)
        {
            comment.Date = DateTime.Now;
            var repo = new BlogPostRepository(_connectionString);
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getblogbyid")]
        public BlogPost GetBlogById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetBlogById(id);
        }

        [HttpGet]
        [Route("getcommentsbyid")]
        public List<Comment> GetCommentsById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetCommentsById(id);
        }
        [HttpGet]
        [Route("getpage")]
        public List<BlogPost> GetPage(int page)
            
        {
            int pageCount = 3;
            int from = (page - 1) * pageCount;
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetPaginatedBlogPosts(from, pageCount);
        }
        [HttpGet]
        [Route("getnewestid")]
        public BlogPost GetNewestId()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetNewestId();
        }
    }
}
