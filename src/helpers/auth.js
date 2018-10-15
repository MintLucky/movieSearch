import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import Loading from '../components/Loading'

const locationHelper = locationHelperBuilder({})

const userIsAuthenticatedDefaults = {
    authenticatedSelector: state => state.authentication !== null,
    authenticatingSelector: state => state.authentication.loggingIn,
    wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedRouterRedirect({
    ...userIsAuthenticatedDefaults,
    AuthenticatingComponent: Loading,
    redirectPath: '/login'
})

export const userIsAdminRedir = connectedRouterRedirect({
    redirectPath: '/login',
    allowRedirectBack: false,
    authenticatedSelector: state => {
        if(state.authentication.user) {
            return state.authentication.user.isAdmin === 'true'
        }
        return false;
    },
    // predicate: authentication => authentication.user.isAdmin,
    wrapperDisplayName: 'UserIsAdmin'
})

const userIsNotAuthenticatedDefaults = {
    // Want to redirect the user when they are done loading and authenticated
    authenticatedSelector: state => state.user.data === null && state.user.isLoading === false,
    wrapperDisplayName: 'UserIsNotAuthenticated'
}

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults)

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
    ...userIsNotAuthenticatedDefaults,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/protected',
    allowRedirectBack: false
})
