export const userQuery = (userId) => {
    const query = `*_[type == "user" && _id == '${userId}']`;

    return query;
};