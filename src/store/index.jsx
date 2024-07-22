const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        auth: sliceAuth,
    },
    devTools: process.env.NODE_ENV !== "production",
})