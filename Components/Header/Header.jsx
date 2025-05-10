import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, delCounter } from '../../Store/Slices/CounterSlice'

const Header = () => {
    const { counter } = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    const addHandler = () => {
        dispatch(addCounter())
    }
    const delHandler = () => {
        dispatch(delCounter())
    }
    return (
        <View>
            <Text
                style={{ textAlign: 'center', marginTop: 20, fontSize: 20 }}>
                Counter Value =
                <Text
                    style={{ fontSize: 30, color: 'green', fontWeight: 900 }}>
                    {counter}
                </Text>
            </Text>
            <TouchableOpacity onPress={addHandler}
                style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        marginVertical: 30, padding: 15,
                        backgroundColor: 'green',
                        color: 'white', borderRadius: 10
                    }}>
                    inceriment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={delHandler}
                style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        marginVertical: 30, padding: 15,
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: 10
                    }}>
                    decrement
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header