import React from "react";
import{Modal,TouchableOpacity,View,Image} from "react-native";

function Modal({onDismiss,onShow,visible}) {
    return(
        <Modal animationType="slide"
        onDismiss={() => console.log('Modal close')}
        onShow={() => console.log('Modal open')}
        transparent
        visible={visible}
       >
        <View 
        style={{flex: 1, backgroundColor:"rgba(1,1,1, 0.5)", justifyContent: 'center', alignItems: 'center'}}
        >
        
        <View
          style={{
            height: "80%",
            width: "90%",
            backgroundColor: "#fff",
          }}
        >
          <View
          style={{
            height: 45,
            width: "100%",
            flexDirection: 'row',
            justifyContent: "flex-end",
            alignContent: 'center',
            paddingHorizontal: 8,}}
          >
            <TouchableOpacity
            onPress={()=>{setModalVisible(false)}}>
            <Image
            source={sonic}
              style={{height: 30, width: 30, tintColor : "#000"}}
            />
            </TouchableOpacity>
  
          </View>
        </View>
        </View>
      </Modal>
    );
}