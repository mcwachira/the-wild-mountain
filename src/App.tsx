import styled from "styled-components";
// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
//     QueryClient,
//     QueryClientProvider,
// } from '@tanstack/react-query'
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
import {Toaster} from "react-hot-toast";
import Booking from "./pages/Booking.tsx";
import Checkin from "./pages/Checkin.tsx";
import ProtectedRoutes from "./ui/ProtectedRoutes.tsx";





function App() {




    const StyledApp =   styled.main`

      padding: 20px;
    `

    return (

        <>
            <GlobalStyles/>

            <Routes>


                <Route element={<ProtectedRoutes><AppLayout/></ProtectedRoutes>}>


                    <Route index element={<Navigate replace to='dashboard'/>}/>

                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='bookings' element={<Bookings/>}/>
                    <Route path='bookings/:bookingId' element={<Booking/>}/>
                    <Route path='checkin/:bookingId' element={<Checkin/>}/>
                    <Route path='cabins' element={<Cabins/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path='settings' element={<Settings/>}/>
                    <Route path='account' element={<Account/>}/>

                </Route>


                <Route path='login' element={<Login/>}/>
                <Route path='*' element={<PageNotFound/>}/>

            </Routes>

            <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{margin:'8px'}}
            toastOptions={{
                success:{
                    duration:3000
                },

                error:{
                    duration:5000
                },
                style:{
                    fontSize:'16px',
                    maxWidth:"500px",
                    padding:'16px 24px',
                    backgroundColor:"var(--color-grey-0)",
                    color:"var(--color-grey-700)",
                },
            }}
            />
        </>

  )
}

export default App
