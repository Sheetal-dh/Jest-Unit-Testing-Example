function getTotalLikes(user) {
    // iterate through the blog entries and sum the like values
    const totalLikes = user.blogs.reduce((total, blog) => {
        return total += blog.likes
    }, 0)

    return totalLikes;
}

module.exports = { getTotalLikes }