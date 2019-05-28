export const login = profile => ({
    type : 'LOGIN',
    first: profile.first,
    last : profile.last,
    age : profile.age,
    gender: profile.gender,
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
    avatar: profile.avatar,
    score: profile.score
})

export const addScore = profile => ({
    type : 'ADD_SCORE',
    first: profile.first,
    last : profile.last,
    age : profile.age,
    gender: profile.gender,
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
    avatar: profile.avatar,
    score: profile.score + 100,
})

export const removeScore = profile => ({
    type : 'REMOVE_SCORE',
    first: profile.first,
    last : profile.last,
    age : profile.age,
    gender: profile.gender,
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
    avatar: profile.avatar,
    score: profile.score - 100,
})