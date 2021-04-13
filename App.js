import React  ,{useState}from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task , setTask]=useState();
  const [taskItems, setTaskItems]= useState([]);
  const handleAddTask= (e)=>{
    Keyboard.dismiss(); // to make the pop up keybaord go down 
    setTaskItems([...taskItems , task]);
    setTask(null);
  }

  const completeTask = (index)=>{
    let itemsCopy= [...taskItems];
    itemsCopy.splice(index ,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* todoys's tasks  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>todoy's task</Text>
        <View style={styles.items}>
          {/*  this is where the tasks will go  */}
          {taskItems.map((elem , index)=>{
           return <TouchableOpacity  key={index } onPress={()=>completeTask(index)}>
            <Task text={elem}/>
           </TouchableOpacity> 
          })}

        </View>
      </View>
      {/* write a a task section  */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={txt => setTask(txt)} />
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}></View>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: row,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper :{
   width: 60 , 
   height: 60 , 
   backgroundColor: '#fff', 
   borderRadius: 60 , 
   justifyContent:'center' ,alignItems:'center' ,
   borderColor: '#C0C0C0' , 
   borderWidth: 1 
  }

});
