export default  [
    {
        path: '/',
        redirect:'/home',
        component: () => import('../views/Layout'),
        children: [
            {
                path:'home',
                name:'home',
                component: () => import('../views/Home'),
            },
            {
                path:'users/pharmacists',
                name:'pharmacists',
                component: () => import('../views/Users/Pharmacists'),
            },
            {
                path:'tests/questions',
                name:'testQuestions',
                component: () => import('../views/TestQuestions'),
            },
            {
                path:'tests/result',
                name:'testResult',
                component: () => import('../views/TestResult'),
            },
            {
                path:'tests/:id',
                name:'test',
                component: () => import('../views/Test'),
            },
            {
                path:'courses/:id',
                name:'course',
                component: () => import('../views/Course'),
            },
            {
                path:'access',
                name:'access',
                component: () => import('../views/Access'),
            },
            {
                path:'history',
                name:'history',
                component: () => import('../views/History'),
            },
            {
                path:'awards',
                name:'awards',
                component: () => import('../views/Awards'),
            },
            {
                path:'404',
                component: () => import('../views/404'),
            }
        ]
    },
    {
        path: '/auth',
        redirect:'/auth/singin',
        component: () => import('../views/AuthLayout'),
        children: [
            {
                path:'singin',
                name:'singIn',
                component: () => import('../views/Auth/SingIn')
            }
        ]
    },
    {
        path:'*',
        redirect: '/404'
    }
]
