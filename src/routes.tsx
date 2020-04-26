import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages'
import { BuildingPage } from './pages'

type RoutesProps = boolean

// export const useRoutes: React.FC<RoutesProps> = isAuth => {
//   if (isAuth) {
//     return (
//       <Switch>
//         <Route path='/home' component={() => <h1>HOME</h1>} />
//         <Redirect to='/home' />
//       </Switch>
//     )
//   }
//   return (
//     <Switch>
//       <Route path='/login' component={AuthPage} exact />
//       <Redirect to='/login' />
//     </Switch>
//   )
// }
export const useRoutes: React.FC<RoutesProps> = isAuth => {
  return (
    <Switch>
      <Route path='/house' component={BuildingPage} />
      <Redirect to='/house' />
    </Switch>
  )
}
