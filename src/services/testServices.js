import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realTimeDataBase";

export const testApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl }),
    tagTypes: ['profileImageGet'],
    endpoints: (builder)=> ({
        getTest: builder.query({
            query: ()=> `test.json`
        }),
        getPreguntasByCategory: builder.query({
            query: (category)=> `test.json?orderBy="categoria"&equalTo="${category}"`
        }),
        getPreguntasById: builder.query({
            query: (id)=> `test.json?orderBy="id"&equalTo=${id}`
        }),
        postTest: builder.mutation({
            query: (...test)=>({
                url: 'test.json',
                method: "POST",
                body: test,
            })
        }),
        getProfileimage: builder.query({
            query: (localId )=> `profileImages/${localId}.json`, 
            providesTags: ["profileImageGet"]
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
              url: `profileImages/${localId}.json`,
              method: "PUT",
              body: {
                image: image
              },
            }),
            invalidatesTags: ['profileImageGet'],
        })
    }),
});

export const {useGetTestQuery, useGetPreguntasByCategoryQuery, useGetPreguntasByIdQuery, usePostTestMutation, useGetProfileimageQuery, usePostProfileImageMutation} = testApi;