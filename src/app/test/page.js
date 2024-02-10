'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTestValue, selectTestData, setTestValue } from '@/redux/slice/test/test-slice'
function Test() {
    const dispatch = useDispatch()
    const testValue = useSelector(selectTestData)
    console.log(testValue)
    return (
        <div>
            <h1>Testing next route pages and redux setup</h1>
            <h4>Redux Value: {testValue}</h4>
            <input value={testValue} onChange={(e) => dispatch(setTestValue(e.target.value))} />
        </div>
    )
}

export default Test