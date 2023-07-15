import styled from "styled-components";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
import Account from "./pages/Account.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import AppLayout from "./ui/AppLayout.tsx";


function App() {




    const StyledApp =   styled.main`

      padding: 20px;
    `

    return (

        <>
            <GlobalStyles/>

            <Routes>


                <Route element={<AppLayout/>}>


                    <Route index element={<Navigate replace to='dashboard'/>}/>

                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='bookings' element={<Bookings/>}/>
                    <Route path='cabins' element={<Cabins/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path='settings' element={<Settings/>}/>
                    <Route path='account' element={<Account/>}/>

                </Route>


                <Route path='login' element={<Login/>}/>
                <Route path='*' element={<PageNotFound/>}/>

            </Routes>
        </>

  )
}

export default App
