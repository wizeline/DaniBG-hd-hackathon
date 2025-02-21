import {Button, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";

function GoalInput(props) {
  const [goalInputText, setGoalInputText] = useState('');

  const goalInputHandler = (enteredText) => {
      setGoalInputText(enteredText);

  };

  function addGoalHandler() {
    if(goalInputText){ //forbidding empty inputs
      props.onAddGoal(goalInputText);
      setGoalInputText(''); // Cleaning up the input
    }
  }

  return (
    <View style={styles.inputContainer}>
    <TextInput placeholder="Prepare for adventure!" style={styles.textInput} onChangeText={goalInputHandler} value={goalInputText} />
    <Button title="Add goal" onPress={addGoalHandler}/>
  </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // this makes it take 1/6 of the available height space
    flexDirection: 'row',
    justifyContent: 'flex-start', //justifyContent defines how the elements are distributed in the MAIN AXIS (Reminder: MainAxis is defined by whether the elements are aligned on a column or a row)
    alignItems: "center", //defined how the elements are distributed along the CROSS AXIS
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})