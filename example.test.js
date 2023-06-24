const {getTotalLikes} = require('./example');

const user = {
    username : 'santosh',
    blogs: [
        {
            title: 'Blog one',
            likes: 100,
            desc: 'Blog One Desc'
        },
        {
            title: 'Blog Two',
            likes: 120,
            desc: 'Blog Two Desc'
        }
    ]
}

describe('getTotalLikes Tests', ()=>{
    test('Should return the total likes', ()=>{
        expect(getTotalLikes(user)).toBe(220);
    });
})