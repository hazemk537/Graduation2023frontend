import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slices/NotifySlice';
import { json } from 'react-router-dom/dist/umd/react-router-dom.development';

function useFetch() {

    const [data, setData] = useState('');
    const dispatch = useDispatch()

    async function sendRequest(url, options) {

        let response
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
           // #debug console.log(options.body);
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
                if (options?.onOk) {
                    options.onOk(response)
                    console.log('fffffffffff')
                }
                let jsonData = await response.json()
                console.log(jsonData)
                if (jsonData.statusCode === 200 || jsonData.statusCode === 201) {
                    if (options?.onSucceed) {
                        options.onSucceed(jsonData)
                    }

                    console.log(` response.ok success , jsonData.statusCode success in ${options?.name} ...`)//for devs
                    dispatch(actions.setSuccess(`success  ${options?.name} `))//for user
                    console.log(`jsonData`)
                    console.log(jsonData)
                    setData(jsonData)
                    // call the callback 
                    // 1. ex add Token to local Storage
                    // 2. navigate to other route
                    // call onSuccess with the new state


                }

                else {
                    console.log(` response.ok success , jsonData.statusCode failed in ${options?.name} ...`)//for devs
                    dispatch(actions.setError(`Err in ${options?.name} `))//for user
                    setData(jsonData)
                    console.log(`jsonData`)
                    console.log(jsonData)



                }




            } else {
                if (options?.onOk) {
                    options.onOkFailed(response)
                }
                dispatch(actions.setError(`response.ok failed in ${options?.name} `))//for user

                let jsonData = await response.json()
                console.log(jsonData)
                if (jsonData.statusCode === 200 || jsonData.statusCode === 201 || json.succeeded) {

                    console.log(`response.ok failed , jsonData.statusCode success in ${options?.name} ...`)
                    console.log(`jsonData`)
                    console.log(jsonData)
                    setData(jsonData)
                    if (options?.onSucceed) {
                        options.onSucceed(jsonData)
                    }


                }

                else {
                    console.log(` response.ok failed , jsonData.statusCode failed  ${options?.name} ...`)//for devs
                    dispatch(actions.setError(` response.ok failed , jsonData.statusCode  ${options?.name} ...`))//for user
                    setData(jsonData)

                    console.log(`jsonData`)
                    console.log(jsonData)
                    if (options?.onSucceedFailed) {
                        options.onSucceedFailed(jsonData)
                    }


                }

                throw new Error(`throw Err from response.ok ${options?.name} ...`)
            }
        }

        catch (err) {

            console.log(err)//for devs

            dispatch(actions.setError(err))//for user

        }


    }


    return [data, setData, sendRequest]//return the result state


}

export default useFetch