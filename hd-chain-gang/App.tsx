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

const Stack = createNativeStackNavigator(); //gives us access to two things: navigator component and component for registering screens
const BottomTabs = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverview() {
  return <View><Text>TEST</Text></View>
}

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (goalInputText) => {
    setGoalsList(currentCourseGoals =>  {
      const newIndex = currentCourseGoals.length + 1; //Adding a sequential index based on the array length
      return [
      ...currentCourseGoals,
      {text: goalInputText, key: newIndex }] //FlatList works with this key, so this will work
    });

    //Note: setGoalsList(currentCourseGoals => [...currentCourseGoals, goalInputText]); is better than setGoalsList([...goalsList, goalInputText]);
    //Reason: setGoalsList(currentCourseGoals => [...currentCourseGoals, goalInputText]); uses the functional update form, which ensures that currentCourseGoals always has the latest state, even if multiple state updates happen asynchronously.
    //Reason n.2 = in "setGoalsList([...goalsList, goalInputText]);" ... if goalsList hasn't been updated yet due to React's asynchronous state updates, this may cause an outdated value to be used.
    /*
        Key differences:
          The "worst" method relies on the state value at render time, which may be stale.
          The "best" method always gets the most recent state, making it safer in cases where multiple updates might occur in quick succession.
          *When does this matter?
          If state updates depend on previous state values (like adding to an array), always use the functional update.
          If React batches multiple state updates, the first approach may miss some updates.
    ✅ Rule of thumb: When updating state based on its previous value, always use the functional form. 🚀
    */

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
                  iconName = 'suitcase';
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
    flex: 1, // since this is the app container, the parent container, this makes it so that it takes 100% of height space
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5, // this makes it take 5/6 of the available height space
  },

});


/*import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.dummyText}>
          HD Eagle Chain Gang!</Text>
        <Button title='sample' /> {/!*UNLIKE FOR THE WEB, THIS IS A SELF-CLOSING ELEMENT*!/}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'blue',
  }
});*/
