import HomePage from "../views/Home";
import HomeIcon from "@material-ui/icons/Home";

const NEDRoutes = {
    New: "new",
    Detail: ":id"
}

export const PublicRouteNames = {
    Home: '',
    Customer: 'Customer',
}

export const AllRouteNames = {
    ...PublicRouteNames
}

export const RoutePaths = {
    Home: ['', PublicRouteNames.Home].join('/'),
   
    // CanInfo: ['', PublicRouteNames.CanInfo, NEDRoutes.Detail].join('/'),
    // NewPost: ['', PublicRouteNames.NewPost, NEDRoutes.New].join('/'),
}

export const PublicRoutes = {
    Home: {
        exact: true,
        id: PublicRouteNames.Home,
        label: "Tên route hiện trên drawer cho admin",
        path: RoutePaths.Home,
        component: HomePage,
        icon: HomeIcon      // chỉ hiện thị trên drawer
    },
}

// routes cho từng nhóm người dùng
export const CandidateRoutes = {
    Home: {
        exact: true,
        id: PublicRouteNames.Home,
        label: "Home",
        path: RoutePaths.Home,
        component: HomePage,
        icon: HomeIcon
    },
}

export const RecruiterRoutes = {
    Home: {
        exact: true,
        id: PublicRouteNames.Home,
        label: "Home",
        path: RoutePaths.Home,
        component: HomePage,
        icon: HomeIcon
    },
}

export const AdminRoutes = {
    RecruInfo: {
        exact: true,
        id: PublicRouteNames.RecruInfo,
        label: "Profile can label",
        path: RoutePaths.RecruInfo,
        component: RecruInfoPage,
    },
}