import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=80';

const UserScreen = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const text = await response.text();
        const data = JSON.parse(text);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" className="flex-1 justify-center" />;
  }

  if (users.length === 0) {
    return <Text className="text-red-500 text-center text-lg mt-5">No user data available</Text>;
  }

  const user = users[currentIndex];

  return (
    
    <View className="flex-1 items-center p-5 bg-gray-400  w-full h-full">
      <Image source={{ uri: user.avatar }} className="w-40 h-40 rounded-full mt-8 mb-4 bg-black" />
      <Text className='font-bold text-[20px] mb-10'>{user.first_name} {user.last_name}</Text>
      <View className='flex-row w-11/12 justify-between gap-x-2'>
        <View className='w-1/2 '>
            <Text className='text-left ml-3 mb-2'>ID</Text>
            <TextInput className='border w-[95%]  text-black p-4 rounded-full bg-gray-300 mb-5' value={user.id.toString()} editable={false} />
        </View>
        <View className='w-1/2'>
            <Text className='text-left ml-3 mb-2'>USER ID</Text>
            <TextInput className='border w-[95%] h-14 text-black p-4 rounded-full bg-gray-300 mb-5 ' value={user.uid} editable={false} />
        </View>
      </View>
     
      <View className='w-11/12'>
        <Text className='text-left ml-3 mb-2'>USER NAME</Text>
        <TextInput className='border w-full text-black p-4 rounded-full bg-gray-300 mb-5' value={user.username} editable={false} />
      </View>
      <View className='w-11/12'>
        <Text className='text-left ml-3 mb-2'>EMAIL</Text>
        <TextInput className='border w-full text-black p-4 rounded-full bg-gray-300 mb-5' value={user.email} editable={false} />
      </View>
      <View className='w-11/12'>
        <Text className='text-left ml-3 mb-2'>PASSWORD</Text>
        <TextInput className='border w-full text-black p-4 rounded-full bg-gray-300 mb-5' value={user.password} secureTextEntry={true} editable={false} />
      </View>
      

      <View className="flex-row justify-between w-9/12 mt-7">
        <TouchableOpacity 
          className={`px-4 py-2 bg-black text-white rounded-full ${currentIndex === 0 ? 'opacity-50' : ''}`}
          onPress={()=>{setCurrentIndex(prev => Math.max(prev-1, 0))}}
          disabled={currentIndex === 0}
        >
          <Text className="text-white text-center">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`px-4 py-2 bg-black text-white rounded-full ${currentIndex === users.length - 1 ? 'opacity-50' : ''}`}
          onPress={()=>{setCurrentIndex(prev => Math.min(prev + 1 , users.length -1))}}
          disabled={currentIndex === users.length - 1}
        >
          <Text className="text-white text-center">Next</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={'#9ca3af'} barStyle='dark-content'/>
    </View>
 
  );
};

export default UserScreen;
