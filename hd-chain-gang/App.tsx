import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import RouteOverview from "./screens/RouteOverview";
import { Ionicons } from 'react-native-vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverview() {
  return <View><Text>TEST</Text></View>
}

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (goalInputText) => {
    setGoalsList(currentCourseGoals =>  {
      const newIndex = currentCourseGoals.length + 1;
      return [
      ...currentCourseGoals,
      {text: goalInputText, key: newIndex }]
    });

  };

  const deleteGoalHandler = (id) => {
    //I want to filter the items for which the conditional returns FALSE
    // Returns TRUE if there is no match, because we want to keep items when there is no match, but if there is a match, if the id exists, this goal.id !== id will return false, because then the ids ARE EQUAL, and then that item will be dropped

    setGoalsList(currentGoals => [...currentGoals.filter(goal => goal.key !== id)]); //filter returns the previous array MINUS the item(s) that were filtered out - Note: filter internally evaluates a boolean
  }

  return (
    <View style={styles.appContainer}>
{/*      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoalHandler}/>
          }}
          alwaysBounceVertical={false}
          //keyExtractor={(item) => item.id.toString()} //This if I were to have id instead of key in .... {text: goalInputText, id: newIndex }]
        />
          <ScrollView alwaysBounceVertical={false}>
          <Text>List of goals</Text>
          {goalsList.map((goal, index)=> <Text key={index} style={styles.goalItem}>{goal}</Text>)}
        </ScrollView>

      </View>*/}
      <>
        <StatusBar  style="auto"/>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Expenses Overview') {
                  iconName = 'wallet';
                } else if (route.name === 'Manage Expense') {
                  iconName = 'create';
                } else if (route.name === 'My trip') {
                  iconName = 'wallet';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Expenses Overview" component={ExpensesOverview} />
            <Tab.Screen name="Manage Expense" component={ManageExpense} />
            <Tab.Screen name="My trip" component={RouteOverview} />
          </Tab.Navigator>
        </NavigationContainer>
      </>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },

});
