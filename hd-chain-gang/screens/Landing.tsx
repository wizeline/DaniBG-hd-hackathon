import React, {useState} from 'react';
import { Image, Text, View, StyleSheet, FlatList } from 'react-native';
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

function Landing() {
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
    setGoalsList(currentGoals => [...currentGoals.filter(goal => goal.key !== id)]); //filter returns the previous array MINUS the item(s) that were filtered out - Note: filter internally evaluates a boolean
  }

  return (
    <>
      <View style={styles.imgContainer}>
        <Image
          source={require('./../assets/looking_at_phone.jpg')}
          style={styles.lookingAtPhoneImg}
        />
      </View>
      <Text>Add your trip goals and remove them!</Text>
      <View style={styles.costsContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList
          data={goalsList}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoalHandler}/>
          }}
          alwaysBounceVertical={false}
          //keyExtractor={(item) => item.id.toString()} //This if I were to have id instead of key in .... {text: goalInputText, id: newIndex }]
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lookingAtPhoneImg: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    flex: 9,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  costsContainer: {
    flex: 4,
    marginTop: 20,
  }
});

export default Landing;
