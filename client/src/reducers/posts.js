export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // [ ... posts] spreads all of the posts
            return [ ... posts, action.payload];
        default:
            return posts;
    }
}