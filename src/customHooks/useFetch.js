import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slices/NotifySlice';

function useFetch(url, options, dependArray) {
    if (!dependArray) //if not provided
        dependArray = []


    let response
    const [data, setData] = useState('');
    const dispatch = useDispatch()



    async function sendRequest() {
        dispatch(actions.setPending(`${options?.name}`))
        // this .? handle if the options. is not exist
        if (options.method.toUpperCase() === 'GET') {

            response = await fetch(url, {
                method: 'GET',
                headers: {

                    ...(options.token && { Authorization: `Bearer ${options.token}` }),
                },

            });
        }
        else {

            response = await fetch(url, {
                method: options.method,
                headers: {
                    ...(options.method === 'POST' && { 'Content-Type': 'application/json' }),
                    ...(options.token && { Authorization: `Bearer ${options.token}` }),
                },
                body: (options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH') && JSON.stringify(options.body)
            });



        }

        try {

            if (response.ok) {
                let jsonData = await response.json()
                console.log(jsonData)
                if (jsonData.statusCode === 200 || jsonData.statusCode === 201) {
                    console.log(` response.ok success , jsonData.statusCode success in ${options?.name} ...`)//for devs
                    dispatch(actions.setSuccess(`success  ${options?.name} `))//for user
                    console.log(`jsonData`)
                    console.log(jsonData)
                    setData(jsonData)

                }

                else {
                    console.log(` response.ok success , jsonData.statusCode failed in ${options?.name} ...`)//for devs
                    dispatch(actions.setError(`Err in ${options?.name} `))//for user
                    setData(jsonData)
                    console.log(`jsonData`)
                    console.log(jsonData)


                }




            } else {
                dispatch(actions.setError(`response.ok failed in ${options?.name} `))//for user

                let jsonData = await response.json()
                console.log(jsonData)
                if (jsonData.statusCode === 200 || jsonData.statusCode === 201) {

                    console.log(`response.ok failed , jsonData.statusCode success in ${options?.name} ...`)
                    console.log(`jsonData`)
                    console.log(jsonData)
                    setData(jsonData)

                }

                else {
                    console.log(` response.ok failed , jsonData.statusCode failed  ${options?.name} ...`)//for devs
                    dispatch(actions.setError(` response.ok failed , jsonData.statusCode  ${options?.name} ...`))//for user
                    setData(jsonData)

                    console.log(`jsonData`)
                    console.log(jsonData)
                }

                throw new Error(`throw Err from response.ok ${options?.name} ...`)
            }
        }

        catch (err) {

            console.log(err)//for devs

            dispatch(actions.setError(err))//for user

        }


    }
    useEffect(() => {
        if (options.useEffect) {

            sendRequest()
        }

    }, [...dependArray])

    return [data, setData, sendRequest]//return the result state


}

export default useFetch