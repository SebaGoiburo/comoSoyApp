import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realTimeDataBase";

export const testApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profileImageGet', 'personalityTest'],
    endpoints: (builder) => ({
        getProfileimage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ["profileImageGet"]
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet'],
        }),
        getPersonalityTest: builder.query({
            query: (localId) => `personalityTests/${localId}.json`,
            providesTags: ["personalityTest"]
        }),
        postPersonalityTest: builder.mutation({
            query: ({ test, localId, resultado }) => ({
                url: `personalityTests/${localId}.json`,
                method: "PUT", 
                body: { test, resultado },
            }),
            invalidatesTags: ['personalityTest'],
        }),
    }),
});

export const {
    useGetProfileimageQuery,
    usePostProfileImageMutation,
    usePostPersonalityTestMutation,
    useGetPersonalityTestQuery
} = testApi;