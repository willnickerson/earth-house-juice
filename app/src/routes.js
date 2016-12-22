routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'landing',
        url:'/',
        component: 'landing'
    });
    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'home'
    });

    $stateProvider.state({
        name: 'buy',
        url: '/buy',
        component: 'buy'
    });

    $urlRouterProvider.otherwise('/home');
}