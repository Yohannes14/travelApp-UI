import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { categoriesData } from '../constants';

const Categories = () => {
    return (
        <View className="space-y-5">
            <View className="mx-5 flex-row justify-between items-center">
                <Text style={{ fontSize: wp(4) }} className="font-semibold text-neutral-700">Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: wp(4), color: theme.text }}> See All</Text>
                </TouchableOpacity>

            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="space-x-4"
                showsHorizontalScrollIndicator={false}
            >
                {categoriesData.map((cat, index) => {
                    return (
                        <TouchableOpacity key={index} className="flex items-center space-y-2">
                            <Image source={cat.image} className="rounded-3xl" style={{ height: wp(20), width: wp(20) }} />
                            <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>{cat.title}</Text>

                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default Categories