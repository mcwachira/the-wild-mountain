import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useUser} from "../features/authentication/useUser.ts";
import styled from "styled-components";
import Spinner from "./Spinner.tsx";

const FullPage = styled.div`
    height: 100vh;
        background-color: var(--color-grey-50);
        display: flex;
        align-items: center;
        justify-content: center;
    `
const ProtectedRoutes = ({children}) => {


    const navigate = useNavigate();


    // 1. LOad the AAuthenticated User


    const {user, isLoading, isAuthenticated} = useUser()
    console.log(user)
    //2. While Loading show spinner

    if(isLoading) return (<FullPage><Spinner/> </FullPage>)

    //3. If there is no Authenticated User , redirect lo /login

    useEffect(() => {
        if(!isAuthenticated && !isLoading) navigate('/login')

    }, [isLoading, isAuthenticated, navigate]);
    //4.if there is a user , render the app

    if (isAuthenticated) return children
}

export default ProtectedRoutes;