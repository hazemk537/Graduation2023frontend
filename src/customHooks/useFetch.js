import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slices/NotifySlice';

function useFetch(url, options) {

    const [data, setData] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {

        async function sendRequest() {

            dispatch(actions.setPending(`${options?.name}`))
            // this .? handle if the options. is not exist


            let response = await fetch(url, {
                method: options.method || 'GET',
                headers: {
                    ...(options.method === 'POST' && { 'Content-Type': 'application/json' }),
                    ...(options.token && { Authorization: `Bearer ${options.token}` }),
                }
            })


            try {

                if (response.ok) {
                    console.log(` response.ok in ${options?.name} ...`)
                    // dispatch(actions.setSuccess(`${options?.name} response.ok ...`))




                } else {
                    dispatch(actions.setError(`Err in ${options?.name} `))//for user

                    throw new Error(`Err in ${options?.name} ...`)


                }

                let jsonData = await response.json()
                console.log(jsonData)

                if (jsonData.succeeded || jsonData.hasOwnProperty('data')) {
                    console.log(` jsonData.succeeded in ${options?.name} ...`)//for devs
                    dispatch(actions.setError(`Err in ${options?.name} `))//for user

                    setData(jsonData.data)
                    console.log(`jsonData`)
                    console.log(jsonData)

                }

            }

            catch (err) {

                console.log(err)//for devs


            }
            console.log(data);


        }
        sendRequest()

    }

        , [])

    return [data, setData]//return the result state


}

export default useFetch