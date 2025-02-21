import { Pressable, StyleSheet, Text, View } from "react-native";

type GoalItemProps = {
  text: string;
  id: number;
};

function GoalItem({ text, id, onDeleteItem }: GoalItemProps) {
  return (
    <View>
      <Pressable
        android_ripple={{color: '#f34c4c'}}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem} key={id}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#ff7300',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  }
});