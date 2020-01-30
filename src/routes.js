import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main';
import Result from './pages/Result';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Sua Idade'
            },
        },
        Result: {
            screen: Result,
            navigationOptions: {
                title: 'Result'
            }
        }
    },
    {
        defaulNavigationOptions: {
            headerStyle: {
                backgroundColor: '#1E88E5'
            }
        },
    })
);
//DefaultNavigationOption = a cor é a cor que ficará no Header (Devo alterar depois)

export default Routes;