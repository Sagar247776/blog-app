import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
};

export type AuthPayload = {
    __typename?: "AuthPayload";
    access_token?: Maybe<Scalars["String"]>;
    refresh_token?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
};

export type Mutation = {
    __typename?: "Mutation";
    Resetpass?: Maybe<ResetpassPayload>;
    forgotpassword?: Maybe<Registerpayload>;
    login?: Maybe<AuthPayload>;
    logout?: Maybe<AuthPayload>;
    signup?: Maybe<Registerpayload>;
};

export type MutationResetpassArgs = {
    password: Scalars["String"];
    token: Scalars["String"];
    userId: Scalars["String"];
};

export type MutationForgotpasswordArgs = {
    email: Scalars["String"];
};

export type MutationLoginArgs = {
    email: Scalars["String"];
    password: Scalars["String"];
};

export type MutationSignupArgs = {
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    password: Scalars["String"];
    username: Scalars["String"];
};

export type Query = {
    __typename?: "Query";
    allUsers: Array<User>;
    me?: Maybe<User>;
    users?: Maybe<User>;
};

export type QueryUsersArgs = {
    id?: InputMaybe<Scalars["String"]>;
};

export type Registerpayload = {
    __typename?: "Registerpayload";
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    username?: Maybe<Scalars["String"]>;
};

export type ResetpassPayload = {
    __typename?: "ResetpassPayload";
    password?: Maybe<Scalars["String"]>;
    token?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
};

export type User = {
    __typename?: "User";
    email: Scalars["String"];
    id: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
};

export type LoginMutationVariables = Exact<{
    email: Scalars["String"];
    password: Scalars["String"];
}>;

export type LoginMutation = {
    __typename?: "Mutation";
    login?:
        | {
              __typename?: "AuthPayload";
              access_token?: string | null | undefined;
              refresh_token?: string | null | undefined;
              user?:
                  | {
                        __typename?: "User";
                        id: string;
                        name?: string | null | undefined;
                        email: string;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
};

export type SignupMutationVariables = Exact<{
    email: Scalars["String"];
    password: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    username: Scalars["String"];
}>;

export type SignupMutation = {
    __typename?: "Mutation";
    signup?:
        | {
              __typename?: "Registerpayload";
              firstName?: string | null | undefined;
              lastName?: string | null | undefined;
              username?: string | null | undefined;
              email?: string | null | undefined;
          }
        | null
        | undefined;
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AllUsersQuery = {
    __typename?: "Query";
    allUsers: Array<{
        __typename?: "User";
        id: string;
        name?: string | null | undefined;
        email: string;
    }>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
    __typename?: "Query";
    me?:
        | { __typename?: "User"; id: string; name?: string | null | undefined; email: string }
        | null
        | undefined;
};

export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            access_token
            refresh_token
            user {
                id
                name
                email
            }
        }
    }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
    baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
    LoginMutation,
    LoginMutationVariables
>;
export const SignupDocument = gql`
    mutation Signup(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $username: String!
    ) {
        signup(
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
            username: $username
        ) {
            firstName
            lastName
            username
            email
        }
    }
`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSignupMutation(
    baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
    SignupMutation,
    SignupMutationVariables
>;
export const AllUsersDocument = gql`
    query AllUsers {
        allUsers {
            id
            name
            email
        }
    }
`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(
    baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
}
export function useAllUsersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
}
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const MeDocument = gql`
    query Me {
        me {
            id
            name
            email
        }
    }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
